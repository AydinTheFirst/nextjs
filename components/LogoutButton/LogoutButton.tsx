"use client";

import { Button } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import React from "react";

export const LogoutButton = () => {
  const handleLogout = async () => {
    signOut();
  };

  return (
    <>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
};
