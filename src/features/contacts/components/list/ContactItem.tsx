import { ButtonContactBookmark } from "@/features/contacts/components/button/ButtonContactBookmark";
import { TContactItem } from "@/features/contacts/type/TContactItem";
import Image from "next/image";
import Link from "next/link";

type Props = {
  isSelectMode?: boolean;
  setUser?: (user: TContactItem) => void;
  isBookmarked?: boolean;
} & TContactItem;

export const ContactItem = ({
  id,
  name,
  tags,
  setUser,
  imageSrc,
  isSelectMode = false,
  isBookmarked,
}: Props) => {
  const contactDetailLink = `/contacts/${id}`;

  const handleClick = () => {
    if (!isSelectMode) return;

    setUser?.({
      id,
      name,
      tags,
    });
  };

  return (
    <Link
      href={isSelectMode ? "" : contactDetailLink}
      className=" border-b-solid flex animate-fade-in items-center justify-between border-b-[1px] border-b-[#353639] pb-[15px] pl-[19px] pr-[20px] pt-[15px]"
      onClick={handleClick}
    >
      {/* TODO: 이미지 태그로 대체 */}
      <div className="flex">
        {imageSrc ? (
          <Image
            src={imageSrc ?? ""}
            alt="프로필 이미지"
            className="h-[58px] w-[58px] rounded-full bg-[#444]"
            width={58}
            height={58}
          />
        ) : (
          <div className="h-[58px] w-[58px] rounded-full bg-[#444]"></div>
        )}
        <div className="ml-[17px]">
          <span className="text-[16px] font-[600]">{name}</span>
          <div className="mt-[4px] flex flex-wrap gap-[7px]">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="mr-[4px] bg-[#353639] px-[7px] py-[3px] text-12 font-[400] text-[#666]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      {!isSelectMode && (
        <ButtonContactBookmark
          isBookmarked={isBookmarked ?? false}
          contactId={id}
        />
      )}
    </Link>
  );
};
