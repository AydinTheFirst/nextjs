import { User } from "@/mongodb";
import { Account, DefaultSession } from "next-auth";

declare module "next-auth/adapters" {
  interface AdapterUser extends User {}
}

declare module "next-auth" {
  interface Session {
    account: Account;

    user: DefaultSession["user"] & {
      id: string;
      username: string;
      role: UserRole;
    };
  }
}
