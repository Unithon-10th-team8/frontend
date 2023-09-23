import { CONTACT_IMAGES } from "@/constants";
import Image from "next/image";

export const HeaderAddContactButton = () => {
  return (
    <div>
      <Image
        height={6}
        width={12}
        alt="iconChevronDown"
        src={CONTACT_IMAGES.iconContactAdd}
        className="ml-[4px] h-[20px] w-[20px]"
      />
    </div>
  );
};
