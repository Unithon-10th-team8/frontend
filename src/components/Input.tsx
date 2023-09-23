import classNames from "classnames";
import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";
import { Divider } from "./Divider";

export type InputProps = { variant?: "start" | "end" } & DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input = ({ className, variant, ...props }: InputProps) => {
  return (
    <input
      {...props}
      autoComplete="off"
      autoCapitalize="off"
      autoCorrect="off"
      className={classNames(
        "rounded-12 bg-surface px-16 py-[15px] text-[15px] text-white placeholder:text-[15px] placeholder:text-[#696969] autofill:bg-surface hover:autofill:bg-surface focus:outline-none focus:autofill:bg-surface active:autofill:bg-surface",
        {
          "!rounded-b-none": variant === "start",
          "!rounded-t-none": variant === "end",
        },
        className,
      )}
    />
  );
};

export type InputGroupProps = {
  children?: ReactNode;
};

export const InputGroup = ({ children }: InputGroupProps) => {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-12 bg-surface">
      {children}
    </div>
  );
};

export const InputGroupDivider = () => {
  return <Divider className="mx-[15px] !w-[calc(100%-30px)]" />;
};
