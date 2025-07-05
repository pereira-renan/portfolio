import Icon from "../icons/icon";
import { LinkButton } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const Links = () => {
  return (
    <div className="flex h-full flex-col items-center gap-6 md:justify-center">
      <Avatar className="size-24">
        <AvatarImage src={process.env.NEXT_PUBLIC_AVATAR_URL} />
        <AvatarFallback>RP</AvatarFallback>
      </Avatar>
      <h1 className="mb-4 text-2xl font-bold">My Links</h1>
      {process.env.NEXT_PUBLIC_LINKEDIN_URL && (
        <LinkButton
          href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
          icon={<Icon.Linkedin className="size-4" />}
          variant="outline"
          className="w-40"
        >
          LinkedIn
        </LinkButton>
      )}
      {process.env.NEXT_PUBLIC_GITHUB_URL && (
        <LinkButton
          href={process.env.NEXT_PUBLIC_GITHUB_URL}
          icon={<Icon.Github className="size-4" />}
          variant="outline"
          className="w-40"
        >
          GitHub
        </LinkButton>
      )}
      {process.env.NEXT_PUBLIC_EMAIL_ADDRESS && (
        <LinkButton
          href={"mailto:" + process.env.NEXT_PUBLIC_EMAIL_ADDRESS}
          icon={<Icon.Mail className="size-4" />}
          variant="outline"
          className="w-40"
        >
          Mail
        </LinkButton>
      )}
    </div>
  );
};
