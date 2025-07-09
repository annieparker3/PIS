import { randomBytes, scrypt as _scrypt, timingSafeEqual } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

/**
 * Hashes a password using scrypt
 * @param password The password to hash
 * @returns A promise that resolves to the hashed password
 */
export async function hashPassword(password: string): Promise<string> {
  // Generate a random salt
  const salt = randomBytes(16).toString('hex');
  
  // Hash the password with the salt
  const hash = (await scrypt(password, salt, 32)) as Buffer;
  
  // Combine the salt and hash
  return `${salt}.${hash.toString('hex')}`;
}

/**
 * Verifies a password against a hash
 * @param storedPassword The stored hashed password (format: salt.hash)
 * @param suppliedPassword The password to verify
 * @returns A promise that resolves to a boolean indicating if the password is valid
 */
export async function verifyPassword(
  storedPassword: string,
  suppliedPassword: string
): Promise<boolean> {
  try {
    // Split the stored password into salt and hash
    const [salt, storedHash] = storedPassword.split('.');
    
    // Hash the supplied password with the same salt
    const hash = (await scrypt(suppliedPassword, salt, 32)) as Buffer;
    
    // Compare the hashes
    return timingSafeEqual(
      Buffer.from(storedHash, 'hex'),
      hash
    );
  } catch (error) {
    // If there's an error (e.g., invalid format), return false
    return false;
  }
}

/**
 * Generates a random token
 * @param length The length of the token in bytes (default: 32)
 * @returns A promise that resolves to a random token
 */
export function generateToken(length = 32): string {
  return randomBytes(length).toString('hex');
}

/**
 * Generates a random verification code (6 digits)
 * @returns A 6-digit verification code
 */
export function generateVerificationCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
