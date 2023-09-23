import Image from "next/image";
import { CONTACT_IMAGES } from "@/constants";

export const HeaderCategorySelector = () => {
  return (
    <div className="p-x-[4px] p-y-[2px] flex items-center">
      <span className="mr-[12px] text-[20px] font-bold">전체</span>
      <Image
        height={6}
        width={12}
        alt="iconChevronDown"
        src={CONTACT_IMAGES.iconChevronDown}
      />
    </div>
  );
};
