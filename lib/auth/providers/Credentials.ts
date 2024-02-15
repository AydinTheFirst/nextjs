import { connectDB, userModel } from "@/mongodb";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export type Credentials = {
  username: string;
  password: string;
};

export const CredentialsProvider = Credentials({
  credentials: {},
  authorize: async (credentials: any) => {
    const { username, password } = credentials as Credentials;
    await connectDB();
    const user = await userModel.findOne({
      $or: [{ email: username }, { username }],
    });

    if (!user) return null;

    if (user.password) {
      const isValid = await bcrypt.compare(password, user.password);
      return isValid ? user : null;
    } else {
      user.password = await bcrypt.hash(password, 10);
      await user.save();

      return user;
    }
  },
});
