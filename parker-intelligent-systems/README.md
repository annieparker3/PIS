# PARKER INTELLIGENT SYSTEMS

A modern, responsive website for PARKER INTELLIGENT SYSTEMS built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn or pnpm or bun
- PostgreSQL database
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/parker-intelligent-systems.git
   cd parker-intelligent-systems
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   # or
   bun install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Update the environment variables in `.env.local` with your configuration

   ```bash
   cp .env.example .env.local
   ```

4. Set up the database:
   - Make sure PostgreSQL is running
   - Update the `DATABASE_URL` in `.env.local` with your PostgreSQL connection string
   - Run database migrations:
     ```bash
     npx prisma migrate dev --name init
     ```
   - (Optional) Seed the database with initial data:
     ```bash
     npx ts-node src/scripts/init-db.ts
     ```

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/parker_intelligent_systems?schema=public"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key" # Generate using: openssl rand -base64 32

# OAuth Providers (Optional)
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""

# App
NODE_ENV="development"
```

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - The React Framework for Production
- [TypeScript](https://www.typescriptlang.org/) - TypeScript is a typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components
- [Prisma](https://www.prisma.io/) - Next-generation Node.js and TypeScript ORM
- [NextAuth.js](https://next-auth.js.org/) - Authentication for Next.js
- [Framer Motion](https://www.framer.com/motion/) - Animation library for React
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icon toolkit

## 🚀 Deployment

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fparker-intelligent-systems&env=DATABASE_URL,NEXTAUTH_URL,NEXTAUTH_SECRET,GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET,GITHUB_CLIENT_ID,GITHUB_CLIENT_SECRET&envDescription=Required%20environment%20variables&envLink=https%3A%2F%2Fgithub.com%2Fyour-username%2Fparker-intelligent-systems%2Fblob%2Fmain%2F.env.example)

### Docker

1. Build the Docker image:
   ```bash
   docker build -t parker-intelligent-systems .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 --env-file .env.local parker-intelligent-systems
   ```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js Documentation
- Tailwind CSS Documentation
- shadcn/ui Components
- Prisma Documentation
- NextAuth.js Documentation
