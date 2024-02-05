"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";
import ModeToggle from "../mode-toggle";
import { Button } from "../ui/button";

const Header = () => {
  const currentPage = usePathname();

  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono p-2 lg:flex">
      <div className="h-[48px]">
        <Link
          className="pointer-events-auto flex place-items-center lg:p-0 justify-center"
          href="/"
        >
          <div className="text-lg flex flex border-2 border-black text-logo rounded overflow-hidden font-extrabold dark:invert">
            <p className="pl-2 pr-2 pb-1 pt-2 text-white bg-black">RENAN</p>
            <p className="pl-1 pr-2 pb-1 pt-2 text-black bg-white">PEREIRA</p>
          </div>
        </Link>
      </div>
      <div className="fixed bottom-0 pb-4 m-2 lg:m-0 left-0 w-full h-[48px] justify-center lg:static lg:h-auto lg:w-auto lg:bg-none pointer-events-auto flex place-items-center">
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

export default Header;
