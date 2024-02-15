import { LogoutButton } from "@/components";
import { getSession } from "@/lib/auth";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Home = async () => {
  const { session } = await getSession();

  return (
    <>
      {JSON.stringify(session?.user, null, 2)}
      <br />
      <LogoutButton />
      <br />
      <Button href="/auth/login" as={Link}>
        Login
      </Button>
    </>
  );
};

export default Home;
