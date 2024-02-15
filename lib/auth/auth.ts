import { connectDB, userModel } from "@/mongodb";
import {
  getServerSession,
  type Account,
  type NextAuthOptions,
  Session,
} from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { CredentialsProvider } from "./providers/Credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    Google({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider,
  ],

  pages: {
    signIn: "/auth/login",
  },

  session: { strategy: "jwt" },

  callbacks: {
    jwt: async ({ token, user, account }) => {
      if (account) token.account = account;
      if (user) token.user = user;
      return token;
    },

    session: async ({ session, token }) => {
      if (token && token.user && token.account) {
        session.account = token.account as Account;

        await connectDB();
        const user = await userModel.findOne({ email: token.email });

        session.user = user!;
      }

      return session;
    },
  },
};

export async function getSession() {
  const session = (await getServerSession(authOptions)) as Session;

  return {
    session,
  };
}
