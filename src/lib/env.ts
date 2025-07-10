/**
 * Environment variables and app configuration
 * This file provides type-safe access to environment variables
 */

// This function ensures that required environment variables are set
function getEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

// NextAuth
const NEXTAUTH_URL = getEnvVar('NEXTAUTH_URL');
const NEXTAUTH_SECRET = getEnvVar('NEXTAUTH_SECRET');

// OAuth Providers
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

// App
const NODE_ENV = (process.env.NODE_ENV || 'development') as 'development' | 'production' | 'test';
const IS_DEVELOPMENT = NODE_ENV === 'development';
const IS_PRODUCTION = NODE_ENV === 'production';
const IS_TEST = NODE_ENV === 'test';

export const env = {
  // NextAuth
  NEXTAUTH_URL,
  NEXTAUTH_SECRET,
  
  // OAuth Providers
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  
  // App
  NODE_ENV,
  IS_DEVELOPMENT,
  IS_PRODUCTION,
  IS_TEST,
} as const;

/**
 * Type-safe environment variables
 */
type Env = typeof env;

declare global {
  // eslint-disable-next-line no-var
  var ENV: Env;
}

// Make environment variables available globally in development
if (IS_DEVELOPMENT) {
  global.ENV = env;
}
