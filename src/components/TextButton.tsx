import classNames from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export type TextButtonVariant = "primary" | "secondary" | "muted" | "danger";

export type TextButtonProps = {
  variant?: TextButtonVariant;
  icon?: ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const textButtonBaseStyleClassName =
  "flex justify-center items-center gap-8 font-[600]";
const textButtonVariantStyleMap: Record<TextButtonVariant, string> = {
  primary: classNames("text-primary text-20"),
  secondary: classNames("text-white text-20"),
  muted: classNames("text-muted text-[15px] !font-[500]"),
  danger: classNames("text-[#FD5252] text-20"),
};
const textButtonDisabledStyleClassName = "!text-muted cursor-not-allowed";

export const TextButton = ({
  variant = "primary",
  className,
  children,
  disabled,
  icon,
  ...props
}: TextButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(
        textButtonBaseStyleClassName,
        textButtonVariantStyleMap[variant],
        disabled && textButtonDisabledStyleClassName,
        className,
      )}
    >
      {icon}
      {children}
    </button>
  );
};
