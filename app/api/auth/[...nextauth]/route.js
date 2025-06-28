import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log('Attempting to authorize...');
        console.log('Credentials received:', credentials);

        if (!credentials?.email || !credentials?.password) {
          console.log('Missing email or password.');
          throw new Error("Please enter both email and password.");
        }

        const user = await prisma.user.findUnique({ where: { email: credentials.email } });

        if (!user) {
          console.log('User not found for email:', credentials.email);
          throw new Error("No user found with this email.");
        }

        console.log('User found:', user.email);
        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);

        if (!isPasswordValid) {
          console.log('Password validation failed for user:', user.email);
          throw new Error("Incorrect password.");
        }

        console.log('Authorization successful for user:', user.email);
        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],
  pages: {
    signIn: "/login", // Specify the custom login page
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
});

export { handler as GET, handler as POST };