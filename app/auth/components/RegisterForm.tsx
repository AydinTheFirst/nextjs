"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Link,
} from "@nextui-org/react";
import React, { useEffect } from "react";
import { Footer } from "./Footer";
import { register } from "@/lib/actions/auth";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";

export const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/");
  }, [state, router]);

  const findError = (error: string) => {
    const err = state?.zod?.find((e) => e.path === error);
    const data: any = {
      color: err ? "danger" : "default",
      message: err?.message,
    };
    return data;
  };

  return (
    <div className="container h-[100vh]">
      <div className="col-lg-4 col-md-6 mx-auto flex h-full items-center">
        <Card>
          <CardHeader>
            <h4 className="text-lg font-bold">Register</h4>
          </CardHeader>
          <CardBody>
            <form action={formAction} className="row g-3">
              <div className="col-12">
                <Input
                  label="Name"
                  name="displayName"
                  type="text"
                  placeholder="Name"
                  color={findError("displayName").color}
                  description={findError("displayName").message}
                />
              </div>
              <div className="col-12">
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  color={findError("email").color}
                  description={findError("email").message}
                />
              </div>
              <div className="col-12">
                <Input
                  label="Username"
                  name="username"
                  type="text"
                  placeholder="Username"
                  color={findError("username").color}
                  description={findError("username").message}
                />
              </div>
              <div className="col-12">
                <Input
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  color={findError("password").color}
                  description={findError("password").message}
                />
              </div>
              <div className="col-12">
                {state?.success ? (
                  <Button color="success" isDisabled fullWidth>
                    Successfully registered! Redirecting...
                  </Button>
                ) : (
                  <Button type="submit" color="primary" fullWidth>
                    Register
                  </Button>
                )}
              </div>

              {state?.error && (
                <div className="col-12 text-center">
                  <p className="text-danger">{state.error}</p>
                </div>
              )}

              <Divider className="my-1" />

              <div className="col-12 text-center">
                <span className="me-2">Already have an account?</span>
                <Link href="/auth/login" color="primary">
                  Login
                </Link>
              </div>

              <Footer />
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
