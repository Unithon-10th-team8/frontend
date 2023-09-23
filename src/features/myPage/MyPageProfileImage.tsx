import { CONTACT_DETAIL_IMAGE } from "@/constants";
import { UserOutput } from "@/fetchers/user";
import Image from "next/image";
import { useWatch } from "react-hook-form";

export type MyPageProfileImageProps = {};

export const MyPageProfileImage = ({}: MyPageProfileImageProps) => {
  const { profile_image_url } = useWatch<UserOutput>();

  return (
    <div className="flex h-[166px] w-full flex-col items-center justify-center">
      <div className="relative h-[126px] w-[126px] rounded-full">
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-surface">
          {profile_image_url ? (
            <Image fill src={profile_image_url} alt="프로필이미지" />
          ) : (
            <Image
              width={88}
              height={88}
              src={CONTACT_DETAIL_IMAGE.profileDefault}
              alt="프로필이미지"
            />
          )}
        </div>
      </div>
    </div>
  );
};
