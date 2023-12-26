"use client";

import React from "react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

function LogoutBtn() {
  return (
    <Button variant="outline" onClick={() => signOut()}>
      Logout
    </Button>
  );
}

export default LogoutBtn;
