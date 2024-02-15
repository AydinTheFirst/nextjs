import mongoose from "mongoose";
export enum UserRoles {
  Admin = "ADMIN",
  User = "USER",
}

interface Schema {
  id: string;
  displayName: string;
  email: string;
  username: string;
  password: string;
  avatar_url?: string;
  role: UserRoles;
  createdAt: Date;
}

const userSchema = new mongoose.Schema<Schema>({
  id: { type: String, required: true },
  displayName: { type: String, required: true, minlength: 3, maxlength: 32 },
  username: { type: String, required: true, minlength: 3, maxlength: 16 },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar_url: { type: String },
  role: {
    type: String,
    default: UserRoles.User,
    enum: [UserRoles.Admin, UserRoles.User],
  },
  createdAt: { type: Date, default: Date.now(), required: true },
});

export const userModel: mongoose.Model<Schema & mongoose.Document> =
  mongoose.models?.User || mongoose.model("User", userSchema);

export type User = mongoose.Document & Schema;
