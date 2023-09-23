import { CONTACT_IMAGES } from "@/constants";
import Image from "next/image";

type Props = {
  className?: string;
};

export const HeaderAddContactButton = ({ className }: Props) => {
  return (
    <Image
      height={20}
      width={20}
      alt="iconChevronDown"
      src={CONTACT_IMAGES.iconContactAdd}
      className={`h-[20px] ${className}`}
    />
  );
};
