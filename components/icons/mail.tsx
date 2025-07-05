import { mergeClassNames } from "@/lib/utils";
import { Mail } from "lucide-react";
import { IconProps } from "./icon";

export const MailIcon = (props: IconProps) => {
  return (
    <Mail {...props} className={mergeClassNames("size-6", props.className)} />
  );
};
