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
import { useFormState } from "react-dom";
import { login } from "@/lib/actions/auth";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  const router = useRouter();

  useEffect(() => {
    if (!state?.success) return;
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, [state, router]);

  return (
    <div className="container h-[100vh]">
      <div className="col-lg-4 col-md-6 mx-auto flex h-full items-center">
        <Card>
          <CardHeader>
            <h4 className="text-lg font-bold">Login</h4>
          </CardHeader>
          <CardBody>
            <form action={formAction} className="row g-3">
              <div className="col-12">
                <Input
                  label="Username"
                  name="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="col-12">
                <Input
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="col-12">
                {state?.success ? (
                  <Button color="success" isDisabled fullWidth>
                    Success!, Redirecting...
                  </Button>
                ) : (
                  <Button type="submit" color="primary" fullWidth>
                    Login
                  </Button>
                )}
              </div>

              <Divider className="my-1" />

              <div className="col-12 text-center">
                <span className="me-2">Already have an account?</span>
                <Link href="/auth/register" color="primary">
                  Register
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
