import { BaseIconProps } from "./base-icon";
import { GithubIcon } from "./github";
import { LinkedinFilledIcon, LinkedinIcon } from "./linkedin";
import { MailIcon } from "./mail";
import { LogoIcon } from "./logo";

export type IconProps = {} & Omit<BaseIconProps, "children">;

const Icon = {
  Linkedin: LinkedinIcon,
  LinkedinFilled: LinkedinFilledIcon,
  Github: GithubIcon,
  Mail: MailIcon,
  Logo: LogoIcon,
};

export default Icon;
