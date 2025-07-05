import { cn } from "@/utils/cn";

export type BaseIconProps = {
  size?: number;
  viewBox?: string;
  className?: string;
  children: React.ReactNode;
} & React.SVGProps<SVGSVGElement>;

const BaseIcon = ({
  children,
  className,
  viewBox = "0 0 24 24",
  ...props
}: BaseIconProps) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      className={cn("size-6", className)}
    >
      {children}
    </svg>
  );
};

export default BaseIcon;
