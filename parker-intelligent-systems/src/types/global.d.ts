// This file contains type declarations for your application
// It ensures TypeScript understands the types used throughout the app

import { DefaultSession, DefaultUser } from "next-auth";

declare global {
  // Add any global type declarations here
  namespace NodeJS {
    interface ProcessEnv {
      // Database
      DATABASE_URL: string;
      
      // NextAuth
      NEXTAUTH_URL: string;
      NEXTAUTH_SECRET: string;
      
      // OAuth Providers
      GOOGLE_CLIENT_ID?: string;
      GOOGLE_CLIENT_SECRET?: string;
      GITHUB_CLIENT_ID?: string;
      GITHUB_CLIENT_SECRET?: string;
      
      // App
      NODE_ENV: 'development' | 'production' | 'test';
      
      // Add other environment variables as needed
    }
  }
}

// NextAuth type augmentation
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      role?: string;
      image?: string | null;
    } & DefaultSession["user"];
  }
  interface User extends DefaultUser {
    id: string;
    role?: string;
  }
}

// This is needed to make this file a module
export {};
