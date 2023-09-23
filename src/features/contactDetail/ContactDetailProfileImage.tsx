import { CONTACT_DETAIL_IMAGE } from "@/constants";
import Image from "next/image";
import { ButtonHTMLAttributes, DetailedHTMLProps, useRef } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { useGetImageUploadURL, useUploadImage } from "@/fetchers";
import toast from "react-hot-toast";
import { ContactInput } from "@/api";

export type ContactDetailProfileImageProps = {
  isAllowEdit?: boolean;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const ContactDetailProfileImage = ({
  isAllowEdit,
}: ContactDetailProfileImageProps) => {
  const { trigger: getUploadURL, isMutating: isLoadingCloudflareImages } =
    useGetImageUploadURL();
  const { trigger: uploadImage, isMutating: isLoadingUploadImage } =
    useUploadImage();
  const fileRef = useRef<HTMLInputElement>(null);
  const { setValue } = useFormContext<ContactInput>();
  const { profile_image_url } = useWatch<ContactInput>();

  const disabledImageButton =
    !isAllowEdit || isLoadingCloudflareImages || isLoadingUploadImage;

  const handleUploadImage = () => {
    if (fileRef) {
      fileRef.current?.click();
    }
  };

  const handleChangeFile = () => {
    const files = fileRef.current?.files;
    if (files && files.length > 0) {
      const file = files[0];
      toast.promise(
        getUploadURL().then(async ({ id, uploadURL }) => {
          await uploadImage({ uploadURL, file });
          setValue(
            "profile_image_url",
            `https://imagedelivery.net/hDWngOGW7FBTt1PBPBKedA/${id}/public`,
            { shouldValidate: true },
          );
        }),
        {
          loading: "프로필 이미지 업로드 중...",
          success: "프로필 이미지 업로드 완료!",
          error: "프로필 이미지 업로드 실패.",
        },
      );
    }
  };

  return (
    <div className="flex h-[152px] w-full flex-col items-center justify-center">
      <input
        ref={fileRef}
        onChange={handleChangeFile}
        type="file"
        className="hidden"
        accept="image/jpeg, image/png"
      />
      <button
        onClick={handleUploadImage}
        disabled={disabledImageButton}
        className="relative h-[126px] w-[126px] rounded-full"
      >
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
