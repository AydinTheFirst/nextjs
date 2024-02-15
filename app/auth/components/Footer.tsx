import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

export const Footer = () => {
  const loginGithub = () => {
    signIn("github", {
      callbackUrl: "/",
    });
  };

  const loginGoogle = () => {
    signIn("google", {
      callbackUrl: "/",
    });
  };

  return (
    <div className="col-12">
      <div className="flex justify-center gap-3">
        <Button
          onClick={loginGithub}
          color="default"
          startContent={<FaGithub />}
          variant="ghost"
        >
          Github
        </Button>
        <Button
          onClick={loginGoogle}
          color="default"
          startContent={<FaGoogle />}
          variant="ghost"
        >
          Google
        </Button>
      </div>
    </div>
  );
};
