import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import CardHomePage from "./components/CardHomePage";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-10 text-center">
        <h1 className="mb-4 text-5xl leading-normal text-blue-600">
          Take control of your money with <br />{" "}
          <span className="font-bold bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-transparent">
            Tracker Cost AI
          </span>{" "}
        </h1>
        <p className="text-gray-600 text-xl leading-9">
          Welcome to your new money buddy 🤝 Track, save, and plan with the help
          of AI.
          <br />
          Meet your smartest finance assistant! ExpenseTracker AI helps you
          spend wisely and stress less.
        </p>
      </div>

      <p className="text-center text-gray-500 mb-4">
        Sign in is required to access{" "}
        <span className="font-semibold">Get Started</span> and{" "}
        <span className="font-semibold">See Details</span> features
      </p>

      <div className="flex items-center justify-center gap-4 m-6">
        <SignedOut>
          <SignInButton mode="modal">
            <Button>Get Started</Button>
          </SignInButton>
          <SignInButton mode="modal">
            <Button>See Details</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <Link href="/add-record">
            <Button>Get Started</Button>
          </Link>
          <Link href="/add-record">
            <Button>See Details</Button>
          </Link>
        </SignedIn>
      </div>

      <CardHomePage />
    </div>
  );
}
