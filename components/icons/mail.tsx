import { mergeClassNames } from "@/lib/utils";
import BaseIcon from "./base-icon";
import { IconProps } from "./icon";
import { Mail } from "lucide-react";

export const MailIcon = (props: IconProps) => {
  return (
    <Mail {...props} className={mergeClassNames("size-6", props.className)} />
  );
};
