import { CONTACT_DETAIL_IMAGE } from "@/constants";
import Image from "next/image";
import { useWatch } from "react-hook-form";

export type MyPageProfileImageProps = {};

export const MyPageProfileImage = ({}: MyPageProfileImageProps) => {
  const { logo } = useWatch<any>();

  return (
    <div className="flex h-[166px] w-full flex-col items-center justify-center">
      <div className="relative h-[126px] w-[126px] rounded-full">
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-surface">
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
      </div>
    </div>
  );
};
