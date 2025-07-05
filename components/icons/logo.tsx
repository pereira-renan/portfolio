import { mergeClassNames } from "@/lib/utils";
import BaseIcon from "./base-icon";
import { IconProps } from "./icon";

export const LogoIcon = (props: IconProps) => {
  return (
    <BaseIcon
      {...props}
      viewBox="0 0 270 280"
      preserveAspectRatio="xMidYMid meet"
      className={mergeClassNames("size-8", props.className)}
    >
      <g transform="translate(0.000000,280.000000) scale(0.100000,-0.100000)">
        <path
          d="M10 2435 l0 -365 680 0 c465 0 696 -4 732 -11 175 -37 270 -168 255
-349 -3 -38 -15 -89 -25 -114 -27 -60 -92 -121 -160 -148 l-57 -23 -712 -3
-713 -3 0 -709 0 -710 470 0 470 0 0 350 0 350 129 0 129 0 238 -350 238 -350
503 0 504 0 -165 243 c-458 674 -423 619 -402 631 212 124 353 277 432 470 47
116 64 200 71 356 22 537 -298 931 -857 1054 -196 43 -270 46 -1035 46 l-725
0 0 -365z"
        />
      </g>
    </BaseIcon>
  );
};
