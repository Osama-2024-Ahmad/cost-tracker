"use client";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

function Navbar() {
  const { user } = useUser();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await fetch("/api/check-user", {
          method: "GET",
        });

        if (!res.ok) {
          const errorText = await res.text();
          console.error("Failed to check user:", errorText);
          return;
        }

        // Check if response is JSON
        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          console.error("Invalid response format from check-user API");
          return;
        }

        const data = await res.json();
        console.log("User check success:", data);
      } catch (error) {
        console.error("Error calling check-user:", error);
      }
    };

    if (user) checkUser();
  }, [user]);
  return (
    <div className="w-full bg-gray-100 shadow-md py-3 px-6 flex justify-between items-center">
      <Image src="/Logo3.png" alt="logo" width={150} height={150} />
      <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <Link
          href="/"
          className="text-blue-600 hover:text-violet-800 transition"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-blue-600 hover:text-violet-800 transition"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-blue-600  hover:text-violet-800 transition"
        >
          Contact
        </Link>
      </div>

      {/* Right Side (Auth Buttons) */}

      <div className="flex items-center gap-3">
        <SignedOut>
          <SignInButton mode="modal">
            <Button className="bg-blue-600 hover:bg-violet-800">Sign In</Button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <SignOutButton redirectUrl="/">
            <Button className="bg-blue-600 hover:bg-violet-800">
              Sign out
            </Button>
          </SignOutButton>
          <UserButton
            appearance={{
              elements: {
                userButtonPopoverActionButton__addRecord:
                  "text-green-600 hover:text-green-800 font-medium",
              },
            }}
          >
            <UserButton.MenuItems>
              <UserButton.Link
                label="Add Record"
                href="/add-record"
                labelIcon={
                  <span>
                    <Plus size={20} />
                  </span>
                }
              />
            </UserButton.MenuItems>
          </UserButton>
        </SignedIn>
      </div>
    </div>
  );
}

export default Navbar;
