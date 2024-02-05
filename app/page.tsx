import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Kanit, Mate, Montserrat } from "next/font/google";
import Link from "next/link";

const montSerrat = Montserrat({ weight: "700", subsets: ["latin"] });
const mate = Mate({ weight: "400", subsets: ["latin"] });
const kanit = Kanit({ weight: "300", subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <div className="relative max-w-5xl w-full fullHeight-minus-navs p-2 flex flex-col align-center justify-center">
        <h1
          className={cn([
            montSerrat.className,
            "lg:text-6xl sm:text-4xl text-3xl pb-4 fade-in-left",
          ])}
        >
          Hey there, I'm Renan Pereira.
        </h1>
        <h2
          className={cn([
            mate.className,
            "lg:text-5xl sm:text-3xl text-2xl fade-in-left",
          ])}
        >
          I'm a software developer.
        </h2>
        <br />
        <br />

        <div className="flex flex-col lg:flex-row text-lg">
          <div>
            <p className={cn([kanit.className, "w-8/12 pb-4 lg:p-0"])}>
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
          </div>
          <Link className={cn(["font-bold"])} href="/contacts">
            <Button variant="default" className="bounce-in-top">
              Let's chat
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
