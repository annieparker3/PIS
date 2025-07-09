import { prisma } from './db';
import { Prisma } from '@prisma/client';

// Define types based on Prisma schema
type User = Prisma.UserGetPayload<{
  include: {
    accounts: true;
    sessions: true;
  };
}>;

type Account = Prisma.AccountGetPayload<{}>;
type Session = Prisma.SessionGetPayload<{}>;
type VerificationToken = Prisma.VerificationTokenGetPayload<{}>;

type UserWithRelations = User & {
  accounts: Account[];
  sessions: Session[];
};

// Input types for database operations
type CreateUserInput = {
  name?: string;
  email: string;
  password: string;
  image?: string;
  role?: string;
  emailVerified?: Date;
};

type UpdateUserInput = Partial<Omit<CreateUserInput, 'email'>> & {
  id: string;
};

type CreateAccountInput = {
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string | null;
  access_token?: string | null;
  expires_at?: number | null;
  token_type?: string | null;
  scope?: string | null;
  id_token?: string | null;
  session_state?: string | null;
  refresh_token_expires_in?: number | null;
};

type CreateSessionInput = {
  sessionToken: string;
  userId: string;
  expires: Date;
};

type CreateVerificationTokenInput = {
  identifier: string;
  token: string;
  expires: Date;
};

/**
 * Database utility functions for common operations
 */
export const db = {
  // User operations
  async getUserById(id: string): Promise<UserWithRelations | null> {
    return prisma.user.findUnique({
      where: { id },
      include: { accounts: true, sessions: true },
    });
  },

  async getUserByEmail(email: string): Promise<UserWithRelations | null> {
    return prisma.user.findUnique({
      where: { email },
      include: { accounts: true, sessions: true },
    });
  },

  async createUser(data: {
    name?: string;
    email: string;
    password: string;
    image?: string;
  }): Promise<UserWithRelations> {
    return prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password, // Make sure to hash the password before calling this
        image: data.image,
      },
      include: { accounts: true, sessions: true },
    });
  },

  async updateUser(
    id: string,
    data: Partial<Pick<User, 'name' | 'email' | 'image' | 'password'>>
  ): Promise<UserWithRelations> {
    return prisma.user.update({
      where: { id },
      data,
      include: { accounts: true, sessions: true },
    });
  },

  // Account operations
  async getAccountByProvider(provider: string, providerAccountId: string): Promise<Account | null> {
    return prisma.account.findUnique({
      where: {
        provider_providerAccountId: {
          provider,
          providerAccountId,
        },
      },
    });
  },

  async createAccount(data: {
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string;
    access_token?: string;
    expires_at?: number;
    token_type?: string;
    scope?: string;
    id_token?: string;
    session_state?: string;
    refresh_token_expires_in?: number;
  }): Promise<Account> {
    return prisma.account.create({ data });
  },

  // Session operations
  async getSession(sessionToken: string): Promise<Session | null> {
    return prisma.session.findUnique({
      where: { sessionToken },
    });
  },

  async createSession(data: {
    sessionToken: string;
    userId: string;
    expires: Date;
  }): Promise<Session> {
    return prisma.session.create({ data });
  },

  async updateSession(
    sessionToken: string,
    data: Partial<Pick<Session, 'expires'>>
  ): Promise<Session> {
    return prisma.session.update({
      where: { sessionToken },
      data,
    });
  },

  async deleteSession(sessionToken: string): Promise<void> {
    await prisma.session.delete({ where: { sessionToken } });
  },

  // Verification token operations
  async getVerificationToken(
    identifier: string,
    token: string
  ): Promise<VerificationToken | null> {
    return prisma.verificationToken.findUnique({
      where: { identifier_token: { identifier, token } },
    });
  },

  async createVerificationToken(data: {
    identifier: string;
    token: string;
    expires: Date;
  }): Promise<VerificationToken> {
    return prisma.verificationToken.create({ data });
  },

  async deleteVerificationToken(identifier: string, token: string): Promise<void> {
    await prisma.verificationToken.delete({
      where: { identifier_token: { identifier, token } },
    });
  },

  // Helper function to execute a transaction
  async transaction<T>(fn: (tx: typeof prisma) => Promise<T>): Promise<T> {
    // @ts-expect-error: Prisma types are too strict here, but this is safe
    return prisma.$transaction(fn as any);
  },
};

export default db;
