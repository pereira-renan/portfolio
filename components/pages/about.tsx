import Link from "next/link";
import SpotlightCard from "../ui/card/spotlight-card";
import { ArrowRightIcon, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";

export const About = () => {
  return (
    <div className="flex h-full flex-col gap-6">
      <h1 className="mb-4 text-4xl font-bold text-red-300">Renan Pereira</h1>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <p>
            Ever since I was younger, I thrived on breaking things apart,
            solving problems and creating things by myself. I loved creating and
            managing my own game servers, so my friends and I could play exactly
            the way we wanted.
          </p>

          <p>
            That eventually led me to pursue a degree that aligned with those
            same kind of goals:{" "}
            <span className="font-bold text-red-300">
              studying systems, solving problems and creating solutions.
            </span>{" "}
            So I went for a Systems Analysis and Development degree.
          </p>
          <p>
            I'm a{" "}
            <span className="font-bold text-red-300">
              Full Stack Engineer with over 3 years
            </span>{" "}
            of experience working on web applications across multiple
            industries, I've worked with a variety of technologies and
            frameworks, from small-scale applications to large-scale enterprise
            systems. Here is a breakdown of my experiences: <br />
          </p>
        </div>
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
          <SpotlightCard className="h-full w-full max-w-md lg:w-1/3">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold">Fullstack Experience</h2>
              <p className="text-sm">
                Experience with fullstack web development using modern
                technologies stacks like React, Typescript, .NET 8 and Spring
                Boot. <br />
                <br />
                Always applying best practices and patterns to build scalable
                and maintainable applications.
              </p>
            </div>
          </SpotlightCard>
          <SpotlightCard className="h-full w-full max-w-md lg:w-1/3">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold">Cloud and DevOps</h2>
              <p className="text-sm">
                Experience with cloud platforms like AWS and Azure,
                containerization and orchestration tools like Docker with ECS.
                <br />
                <br />
                Also with CI/CD pipelines and automation tools like GitHub
                Actions and Jenkins.
              </p>
            </div>
          </SpotlightCard>
          <SpotlightCard className="h-full w-full max-w-md lg:w-1/3">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold">Artificial Intelligence</h2>
              <p className="text-sm">
                Leveraging AI to improve productivity, creative processes
                through tools like Cursor and Claude Code.
                <br />
                <br />
                Delivering value to clients through integrating AI insights into
                customer-facing applications, using OpenAI and Anthropic APIs.
              </p>
            </div>
          </SpotlightCard>
        </div>
        <div className="mb-8 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Career Experience</h2>

          <div className="flex flex-col">
            <ul className="list-disc space-y-4 px-5">
              <li>
                <span className="font-bold text-red-300">
                  dec/2024 - present
                </span>{" "}
                <span className="text-xs text-gray-500">
                  (Remote | Full-time | US-based client)
                </span>
                <div className="flex flex-col gap-2">
                  <p>
                    React | .NET 8 | SQL Server | Redis | AWS (DynamoDB,
                    Functions, ECS) | Docker | BitBucket | Jenkins | JIRA
                  </p>
                </div>
              </li>

              <li>
                <span className="font-bold text-red-300">
                  nov/2022 - dec/2024
                </span>{" "}
                <span className="text-xs text-gray-500">
                  (Remote | Full-time | US-based client)
                </span>
                <div className="flex flex-col gap-2">
                  <p>
                    React | React Native | Angular | TypeScript | Spring Boot |
                    PostgreSQL | AWS (DynamoDB, Functions, ECS) | Docker |
                    BitBucket | Jenkins | JIRA
                  </p>
                </div>
              </li>
              <li>
                <span className="font-bold text-red-300">
                  jun/2022 - nov/2022
                </span>{" "}
                <span className="text-xs text-gray-500">
                  (Remote | Full-time | Latam-based client)
                </span>
                <div className="flex flex-col gap-2">
                  <p>
                    React | JavaScript | .NET 6 | SQL Server | Azure (Cosmos DB,
                    Key Vault) | Docker | Gitlab | Gitlab CI/CD Pipelines | JIRA
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-8 flex flex-col items-end gap-4">
          <span>
            Makes sense to you? Then{" "}
            <Button
              variant="link"
              size="icon"
              className="inline-block w-fit items-center font-bold text-red-300"
            >
              <Link href="/links" className="inline-block">
                <div className="flex w-full items-center gap-2">
                  let's talk
                  <ExternalLink className="size-4" />
                </div>
              </Link>
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};
