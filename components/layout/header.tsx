"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";
import { Menu } from "lucide-react";
import { mergeClassNames } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Icon from "../icons/icon";
import Link from "next/link";
import { NAV_LINKS } from "@/app/sitemap";

export const Header = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  return (
    <header className={className}>
      <Link href="/">
        <Icon.Logo className="fill-white" />
      </Link>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="gap-6">
          {NAV_LINKS.filter((link) => link.showLink).map((link) => (
            <NavigationMenuItem key={link.href}>
              <NavigationMenuLink
                href={link.href}
                className={mergeClassNames(
                  "px-4",
                  pathname === link.href && "font-bold",
                )}
              >
                {link.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu className="block md:hidden">
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <NavigationMenuTrigger showChevron={false}>
              <Menu className="size-6" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {NAV_LINKS.filter((link) => link.showLink).map((link, index) => (
                <NavigationMenuLink
                  key={index}
                  href={link.href}
                  className={mergeClassNames(
                    "px-4",
                    pathname === link.href && "font-bold",
                  )}
                >
                  {link.label}
                </NavigationMenuLink>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
