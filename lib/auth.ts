import { SignJWT, jwtVerify } from 'jose';
import { cookies, headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export const ADMIN_COOKIE_NAME = 'agnik_admin_session';

function getJwtSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET is not defined in environment variables');
  }
  return new TextEncoder().encode(secret);
}

export interface AdminTokenPayload {
  sub: string;
  username: string;
  email: string;
  role: 'admin';
}

export async function signAdminToken(payload: AdminTokenPayload): Promise<string> {
  return await new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(getJwtSecret());
}

export async function verifyAdminToken(token: string): Promise<AdminTokenPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getJwtSecret());
    if (payload.role !== 'admin' || typeof payload.sub !== 'string') {
      return null;
    }
    return {
      sub: payload.sub,
      username: String(payload.username || ''),
      email: String(payload.email || ''),
      role: 'admin',
    };
  } catch {
    return null;
  }
}

export async function getSessionAdmin(): Promise<AdminTokenPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  if (!token) return null;
  return await verifyAdminToken(token);
}

/**
 * Blocks external / cross-origin / non-browser direct API scraping attempts
 * and enforces an active authenticated admin session.
 */
export async function requireProtectedAdminApi(
  req: NextRequest
): Promise<{ ok: true; admin: AdminTokenPayload } | { ok: false; response: NextResponse }> {
  const reqHeaders = await headers();
  const host = req.headers.get('host') || reqHeaders.get('host') || '';
  const origin = req.headers.get('origin');
  const referer = req.headers.get('referer');

  // If an Origin header is present, it must match the same host
  if (origin) {
    try {
      const originHost = new URL(origin).host;
      if (originHost !== host) {
        return {
          ok: false,
          response: NextResponse.json({ error: 'Forbidden origin' }, { status: 403 }),
        };
      }
    } catch {
      return {
        ok: false,
        response: NextResponse.json({ error: 'Invalid origin' }, { status: 403 }),
      };
    }
  }

  // Require a Referer or matching Origin for state-changing requests
  if (req.method !== 'GET' && !origin && referer) {
    try {
      const refererHost = new URL(referer).host;
      if (refererHost !== host) {
        return {
          ok: false,
          response: NextResponse.json({ error: 'Forbidden referer' }, { status: 403 }),
        };
      }
    } catch {
      return {
        ok: false,
        response: NextResponse.json({ error: 'Invalid referer' }, { status: 403 }),
      };
    }
  }

  const admin = await getSessionAdmin();
  if (!admin) {
    return {
      ok: false,
      response: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }),
    };
  }

  return { ok: true, admin };
}