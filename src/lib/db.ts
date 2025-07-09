import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Create a new Prisma client instance
const prisma = global.prisma || new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

// In development, set the global prisma instance to avoid too many connections
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

/**
 * Connects to the database and returns the Prisma client instance.
 * @returns {Promise<PrismaClient>} The Prisma client instance
 */
async function connectDB(): Promise<PrismaClient> {
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
export default connectDB;
