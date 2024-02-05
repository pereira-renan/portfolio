import { cn } from "@/lib/utils";
import { Dot } from "lucide-react";
import { Kanit, Mate, Montserrat } from "next/font/google";
import Link from "next/link";

const kanit = Kanit({ weight: "300", subsets: ["latin"] });

const About = () => {
  return (
    <>
      <div className="max-w-5xl w-full fullHeight-minus-navs p-2 flex flex-col">
        <h1
          className={cn(
            "text-logo text-center font-bold lg:text-5xl sm:text-3xl text-3xl pb-8 tracking-in-expand"
          )}
        >
          ABOUT
        </h1>
        <div
          className={cn([
            kanit.className,
            "lg:text-2xl text-lg justify-center h-full flex flex-col fade-in-left",
          ])}
        >
          <p>
            My name is Renan Pereira, I'm from Brazil. I'm a college graduate in
            both Mechanical Engineering and Software Development, it was on my
            first graduation where I discovered my true passion for programming
            and I've been working with it both professionally and as a hobby
            ever since.
          </p>
          <br />
          <p>
            Here are some of the skills that I've acquired as a software
            developer:
          </p>
          <ul>
            <li>
              <div className="flex items-center">
                <Dot />
                <span>Java (Spring Boot), C# (.NET)</span>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <Dot />
                <span>Node, React and Next.js</span>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <Dot />
                <span>Docker, AWS, Azure</span>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <Dot />
                <span>GitHub, GitLab, BitBucket</span>
              </div>
            </li>
          </ul>
          <br />
          <p>
            I'm currently working as a fullstack developer at{" "}
            <a
              href="https://www.linkedin.com/company/jalasoft/"
              target="_blank"
              className="underline"
            >
              JalaSoft,
            </a>{" "}
            mainly using React and Java Spring Boot as tech stacks.
          </p>
          <br />
          <p>
            I'm always open to talk about anything! Feel free to reach me out on
            any of{" "}
            <Link href="/contacts" className="underline">
              my contacts
            </Link>
            .
          </p>
        </div>
        <br />
      </div>
    </>
  );
};

export default About;
