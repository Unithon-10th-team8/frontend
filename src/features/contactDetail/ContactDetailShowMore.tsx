import { TextButton, TextButtonProps } from "@/components";

export const ContactDetailShowMore = ({
  variant,
  children,
  ...props
}: TextButtonProps) => {
  return (
    <div className="flex w-full items-center justify-center">
      <TextButton {...props} variant="muted">
        항목 더 보기
      </TextButton>
    </div>
  );
};
