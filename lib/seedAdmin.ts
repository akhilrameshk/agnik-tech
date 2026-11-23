import bcrypt from 'bcryptjs';
import Admin from '@/models/Admin';
import { connectDB } from '@/lib/mongodb';

export async function ensureAdminSeeded() {
  await connectDB();

  const username = (process.env.ADMIN_USERNAME || 'admin').trim();
  const email = (process.env.ADMIN_EMAIL || 'info@agniktech.com').trim().toLowerCase();
  const rawPassword = process.env.ADMIN_PASSWORD;

  if (!rawPassword) {
    throw new Error('ADMIN_PASSWORD is not defined in environment variables');
  }

  const existingAdmin = await Admin.findOne({
    $or: [{ username }, { email }],
  });

  if (existingAdmin) {
    return existingAdmin;
  }

  const hashedPassword = await bcrypt.hash(rawPassword, 12);

  const createdAdmin = await Admin.create({
    username,
    email,
    password: hashedPassword,
  });

  return createdAdmin;
}