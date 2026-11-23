import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve(process.cwd(), '.env.local') });
config({ path: resolve(process.cwd(), '.env') });

import mongoose from 'mongoose';

async function run() {
  try {
    const { ensureAdminSeeded } = await import('../lib/seedAdmin');
    const admin = await ensureAdminSeeded();
    console.log('✅ Admin seeded / verified in MongoDB:', {
      id: String(admin._id),
      username: admin.username,
      email: admin.email,
    });
  } catch (err) {
    console.error('❌ Failed to seed admin:', err);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

run();