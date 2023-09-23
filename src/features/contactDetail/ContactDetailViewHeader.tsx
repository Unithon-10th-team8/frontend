import { TextButton } from "@/components";
import { useWatch } from "react-hook-form";
import Link from "next/link";
import { ContactInput } from "@/api";

export type ContactDetailViewHeaderProps = {
  onClickEdit?: () => void;
};

export const ContactDetailViewHeader = ({
  onClickEdit,
}: ContactDetailViewHeaderProps) => {
  const { name } = useWatch<ContactInput>();

  return (
    <div className="flex h-48 items-center justify-between">
      <Link href="/contacts">
        <TextButton variant="secondary">
          <div className="flex h-20 w-20 items-center justify-center">
            <svg
              width="8"
              height="16"
              viewBox="0 0 8 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1.5L1 8L7 14.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {name}
        </TextButton>
      </Link>
      <TextButton onClick={onClickEdit}>수정</TextButton>
    </div>
  );
};
