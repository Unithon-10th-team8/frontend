import classNames from "classnames";
import {
  DetailedHTMLProps,
  TextareaHTMLAttributes,
  useEffect,
  useRef,
} from "react";

export type TextAreaProps = {
  variant?: "start" | "end";
  isAllowResize?: boolean;
  isAllowAutoHeight?: boolean;
} & DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export const TextArea = ({
  className,
  variant,
  isAllowResize,
  isAllowAutoHeight,
  ...props
}: TextAreaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleAutoHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "1px";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "1px";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, []);

  return (
    <textarea
      {...props}
      ref={textareaRef}
      onInput={handleAutoHeight}
      className={classNames(
        "bg-surface rounded-12 px-16 py-[15px] text-[15px] text-white placeholder:text-[15px] placeholder:text-[#696969] focus:outline-none",
        {
          "!rounded-b-none": variant === "start",
          "!rounded-t-none": variant === "end",
          "resize-none": !isAllowResize,
        },
        className,
      )}
    />
  );
};
