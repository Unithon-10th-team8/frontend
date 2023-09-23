import { CONTACT_DETAIL_IMAGE } from "@/constants";
import Image from "next/image";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { useWatch } from "react-hook-form";
import { Profile } from "@/constants";

export type ContactDetailProfileImageProps = {
  isAllowEdit?: boolean;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const ContactDetailProfileImage = ({
  isAllowEdit,
}: ContactDetailProfileImageProps) => {
  const { logo } = useWatch<Profile>();

  return (
    <div className="flex h-[152px] w-full flex-col items-center justify-center">
      <button className="relative h-[126px] w-[126px] rounded-full">
        <div className="bg-surface relative flex h-full w-full items-center justify-center overflow-hidden rounded-full">
          {logo ? (
            <Image fill src={logo} alt="프로필이미지" />
          ) : (
            <Image
              width={88}
              height={88}
              src={CONTACT_DETAIL_IMAGE.profileDefault}
              alt="프로필이미지"
            />
          )}
        </div>
        {isAllowEdit && (
          <Image
            width={20}
            height={20}
            className="absolute right-0 top-0"
            src={CONTACT_DETAIL_IMAGE.editProfileIcon}
            alt="프로필이미지 선택"
          />
        )}
      </button>
    </div>
  );
};
