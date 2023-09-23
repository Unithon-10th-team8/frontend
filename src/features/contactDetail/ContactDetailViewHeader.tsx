import { TextButton } from "@/components";
import { useWatch } from "react-hook-form";
import { Profile } from "./validationSchema";
import Link from "next/link";

export type ContactDetailViewHeaderProps = {};

export const ContactDetailViewHeader = ({}: ContactDetailViewHeaderProps) => {
  const { name } = useWatch<Profile>();

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
    </div>
  );
};
