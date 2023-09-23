import { ButtonContactBookmark } from "@/features/contacts/components/button/ButtonContactBookmark";

const MOCKUP_TAGS = ["우아한형제들", "대리"];

export const ContactItem = () => {
  return (
    <div className=" border-b-solid flex items-center justify-between border-b-[1px] border-b-[#353639] pb-[15px] pl-[19px] pr-[20px] pt-[15px]">
      {/* TODO: 이미지 태그로 대체 */}
      <div className="flex">
        <div className="h-[58px] w-[58px] rounded-full bg-[#444]" />
        <div className="ml-[17px]">
          <span className="text-[16px] font-[600]">김영한</span>
          <div className="mt-[4px] flex flex-wrap gap-[7px]">
            {MOCKUP_TAGS.map((tag, index) => (
              <span
                key={index}
                className="mr-[4px] bg-[#353639] px-[7px] py-[3px] text-[12px] font-[400] text-[#666]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <ButtonContactBookmark isBookmarked contactId={1} />
    </div>
  );
};
