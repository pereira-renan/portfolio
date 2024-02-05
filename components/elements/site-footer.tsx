"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";
import ModeToggle from "../mode-toggle";
import { Button } from "../ui/button";

const Footer = () => {
  const currentPage = usePathname();

  return (
    <div className="z-10 fixed bottom-0 left-0 max-w-5xl w-full items-center justify-between font-mono p-2 lg:flex">
      <div className="w-full justify-center lg:static lg:h-auto lg:w-auto lg:bg-none pointer-events-auto flex place-items-center p-8 lg:pointer-events-auto lg:p-0">
        <nav className="relative lg:flex">
          <ul className="flex space-x-4">
            <li>
              <Button variant="ghost" className="text-lg">
                <Link className={cn(["font-bold"])} href="/about">
                  About
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="text-lg">
                <Link className={cn(["font-bold"])} href="/contacts">
                  Contacts
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
        <div className="flex h-5 items-center">
          <Separator orientation="vertical" className="mx-4" />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Footer;
