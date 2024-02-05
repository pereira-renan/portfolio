"use client";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "next-themes";
import { Kanit, Mate } from "next/font/google";
import Link from "next/link";

const kanit = Kanit({ weight: "300", subsets: ["latin"] });
const mate = Mate({ weight: "400", subsets: ["latin"] });

type Contact = {
  url: string;
  urlTarget?: "_blank" | "_self" | "_parent" | "_top" | string;
  icon: React.ReactNode;
  iconColor: string;
  text: string;
  customClassName: string;
};

const ICON_SIZE = "32px";

const contactDetails: Contact[] = [
  {
    url: "https://github.com/pereira-renan",
    urlTarget: "_blank",
    icon: <Github size={ICON_SIZE} />,
    iconColor: "#6e5494",
    text: "Github",
    customClassName: "contact-link-github__button",
  },
  {
    url: "https://www.linkedin.com/in/pereira-renan/",
    urlTarget: "_blank",
    icon: <Linkedin size={ICON_SIZE} />,
    iconColor: "#0077b5",
    text: "LinkedIn",
    customClassName: "contact-link-linkedin__button",
  },
  {
    url: "mailto: contact@renanpereira.com",
    icon: <Mail size={ICON_SIZE} />,
    iconColor: "#d93025",
    text: "Mail",
    customClassName: "contact-link-mail__button",
  },
];

const Contacts = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className="max-w-5xl w-full fullHeight-minus-navs p-2 flex flex-col">
        <h1
          className={cn(
            "text-logo text-center font-bold lg:text-5xl sm:text-3xl text-3xl pb-8 tracking-in-expand"
          )}
        >
          CONTACTS
        </h1>

        <div className="flex flex-col  h-full  justify-center items-center fade-in-left">
          <div>
            <h2
              className={cn([
                mate.className,
                "text-center lg:text-3xl sm:text-2xl text-1xl mb-4",
              ])}
            >
              Feel free to reach me out through any of my socials below.
            </h2>
          </div>
          <div
            className={cn([
              kanit.className,
              "flex lg:flex-row flex-col lg:text-3xl text-lg w-full gap-8 lg:justify-evenly justify-evenly items-center",
            ])}
          >
            {contactDetails.map((contact, index) => (
              <>
                <Link
                  href={contact.url}
                  target={contact.urlTarget}
                  className="flex items-center"
                  key={index}
                >
                  <div
                    className={cn([
                      "contact-links__icon",
                      contact.customClassName,
                    ])}
                    style={{ color: contact.iconColor }}
                  >
                    {contact.icon}
                  </div>
                  <button
                    className={cn([
                      "contact-links__button",
                      contact.customClassName,
                      theme === "dark"
                        ? "contact-links__button-darkMode"
                        : "contact-links__button-lightMode",
                    ])}
                    data-text={contact.text}
                  >
                    <span className="contact-links__text">
                      &nbsp;{contact.text}&nbsp;
                    </span>
                    <span aria-hidden="true" className="contact-links__hover">
                      &nbsp;{contact.text}&nbsp;
                    </span>
                  </button>
                  <span className="sr-only">{contact.text}</span>
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
