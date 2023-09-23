import classNames from "classnames";
import { ReactNode } from "react";

export type FieldItemProps = {
  className?: string;
  children?: ReactNode;
  variant?: "start" | "end";
  label: string;
};

export const FieldItem = ({
  className,
  label,
  variant,
  children,
}: FieldItemProps) => {
  return (
    <div
      className={classNames(
        "bg-surface flex items-center justify-between rounded-12 px-16 py-[15px] text-[15px] text-white",
        {
          "!rounded-b-none": variant === "start",
          "!rounded-t-none": variant === "end",
        },
        className,
      )}
    >
      <span>{label}</span>
      <div>{children}</div>
    </div>
  );
};
