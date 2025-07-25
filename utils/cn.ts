import { twMerge } from "tailwind-merge";

export const cn = (...classes: (string | undefined)[]) => {
  return twMerge(classes.filter((c) => c !== undefined));
};
