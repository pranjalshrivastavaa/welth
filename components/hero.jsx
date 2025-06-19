"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl md:text-8xl leading-tight pb-6 gradient-title">
               Manage Your Finances <br /> with Intelligence
        </h1>


        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          An AI-powered financial management platform…
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          <Link href="/dashboard" passHref>
            <Button size="lg">Get Started</Button>
          </Link>
          <Link href="/dashboard" passHref>
            <Button size="lg">Watch Demo</Button>
          </Link>
        </div>

        <Image
          src="/banner.jpeg"
          width={1280}
          height={720}
          alt="Dashboard Preview"
          className="rounded-lg shadow-2xl border mx-auto"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
