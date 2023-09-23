import Image from "next/image";
import { CONTACT_IMAGES } from "@/constants";

export const HeaderSearchContactButton = () => {
  return (
    <div>
      <Image
        height={6}
        width={12}
        alt="iconChevronDown"
        src={CONTACT_IMAGES.iconContactSearch}
        className="h-[20px] w-[20px]"
      />
    </div>
  );
};
