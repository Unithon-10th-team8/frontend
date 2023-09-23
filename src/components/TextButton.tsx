import classNames from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type TextButtonVariant = "primary" | "secondary" | "muted";

export type TextButtonProps = {
  variant?: TextButtonVariant;
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
};
const textButtonDisabledStyleClassName = "!text-muted cursor-not-allowed";

export const TextButton = ({
  variant = "primary",
  className,
  children,
  disabled,
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
      {children}
    </button>
  );
};
