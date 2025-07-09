#!/usr/bin/env node
/**
 * Database initialization script
 * This script is used to initialize the database with default data
 * Run with: ts-node src/scripts/init-db.ts
 */

import { PrismaClient } from '@prisma/client';
import { hashPassword } from '@/lib/auth-utils';

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Starting database initialization...');

  // Example: Create an admin user if it doesn't exist
  const adminEmail = 'admin@example.com';
  const adminPassword = await hashPassword('admin123');

  const adminUser = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      name: 'Admin User',
      email: adminEmail,
      password: adminPassword,
      role: 'ADMIN',
      emailVerified: new Date(),
    },
  });

  console.log('✅ Database initialized successfully');
  console.log(`👤 Admin user: ${adminUser.email}`);
}

main()
  .catch((e) => {
    console.error('❌ Error initializing database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
