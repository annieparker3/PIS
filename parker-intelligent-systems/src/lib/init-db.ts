import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

/**
 * Initializes the database connection and returns the Prisma client instance.
 * @returns {Promise<PrismaClient>} The Prisma client instance
 */
async function initDB(): Promise<PrismaClient> {
  try {
    await prisma.$connect();
    console.log('✅ Database connected successfully');
    return prisma;
  } catch (error) {
    console.error('❌ Error connecting to the database:', error);
    process.exit(1);
  }
}

export { prisma };
export default initDB;
