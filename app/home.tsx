"use client";

import { buttonVariants } from "@/components/ui/button";
import RotatingText from "@/components/ui/rotating-text";
import { Handshake } from "lucide-react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex h-full flex-col justify-center gap-12">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold lg:text-6xl">
          Hey there, I'm Renan Pereira.
        </h1>

        <span className="text-xl lg:text-2xl">
          <RotatingText
            staticText="I'm a software engineer, and also a go to source for"
            texts={[
              "pixel-perfect imperfection",
              "cross-browser incompatibility",
              "unavoidable lame jokes",
              "scalable bottlenecks",
              "microservice monoliths",
              "undocumentable documentation",
              "database optimistic optimization",
              "parallel processing asynchronosity",
              "AI whispering",
              "debuggable bugs crafting",
              "production-ready prototypes",
            ]}
            rotatingTextClassName="md:px-2 md:bg-red-300 md:text-black overflow-hidden py-0.5 sm:py-1 md:py-2 inline rounded-lg"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={4000}
          />
        </span>
      </div>

      <div>
        <p>
          I'm currently working as a{" "}
          <span className="font-bold text-red-300">
            fullstack software engineer
          </span>
          , mainly focused on developing solutions using React and .NET Core
          frameworks.
        </p>
      </div>

      <div>
        <Link href="/links" className={buttonVariants({ variant: "default" })}>
          Let's talk
          <Handshake className="size-4" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
