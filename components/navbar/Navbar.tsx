"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import NavbarPublic from "./NavbarPublic";
import NavbarPrivate from "./NavbarPrivate";

export default function Navbar() {
  return (
    <>
      <SignedOut>
        <NavbarPublic />
      </SignedOut>
      <SignedIn>
        <NavbarPrivate />
      </SignedIn>
    </>
  );
}
