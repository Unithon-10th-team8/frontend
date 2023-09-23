import { CONTACT_IMAGES } from "@/constants";
import Image from "next/image";

export const HeaderShowMoreButton = () => {
  return (
    <Image
      height={20}
      width={20}
      alt="iconChevronDown"
      src={CONTACT_IMAGES.iconContactMenuMore}
      className="h-20"
    />
  );
};
