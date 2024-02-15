import { signIn, signOut } from "next-auth/react";
import { parseError } from ".";

type RegisterData = {
  displayName: string;
  email: string;
  username: string;
  password: string;
};

export const register = async (prev: any, formData: FormData) => {
  const data = Object.fromEntries(formData.entries()) as RegisterData;

  const res = await fetch("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await res.json();

  console.log("json", json);

  return json.error
    ? {
        error: json.error,
        zod: parseError(json),
      }
    : { success: true };
};

type LoginCredentials = {
  username: string;
  password: string;
};

export const login = async (prev: any, formData: FormData) => {
  const data: LoginCredentials = Object.fromEntries(formData.entries()) as any;
  try {
    const res = await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
    });

    console.log("res", res);
    if (!res?.ok) return { error: "Invalid username or password" };

    return { success: true };
  } catch (error) {
    return { error: "Invalid username or password" };
  }
};

export const logout = async () => {
  await signOut();
};
