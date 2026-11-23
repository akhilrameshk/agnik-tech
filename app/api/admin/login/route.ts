import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import Admin from '@/models/Admin';
import { ensureAdminSeeded } from '@/lib/seedAdmin';
import { ADMIN_COOKIE_NAME, signAdminToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    await ensureAdminSeeded();

    const body = await req.json();
    const identifier = String(body?.username || body?.email || '').trim().toLowerCase();
    const password = String(body?.password || '');

    if (!identifier || !password) {
      return NextResponse.json(
        { error: 'Username/Email and password are required' },
        { status: 400 }
      );
    }

    const admin = await Admin.findOne({
      $or: [{ username: identifier }, { email: identifier }],
    });

    if (!admin) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const isValid = await bcrypt.compare(password, admin.password);
    if (!isValid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const token = await signAdminToken({
      sub: String(admin._id),
      username: admin.username,
      email: admin.email,
      role: 'admin',
    });

    const res = NextResponse.json({
      success: true,
      admin: {
        username: admin.username,
        email: admin.email,
      },
    });

    res.cookies.set(ADMIN_COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return res;
  } catch (err) {
    console.error('Login error:', err);
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}