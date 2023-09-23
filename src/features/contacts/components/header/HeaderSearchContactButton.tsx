import Image from "next/image";
import { CONTACT_IMAGES } from "@/constants";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setIsSearchMode: Dispatch<SetStateAction<boolean>>;
};

export const HeaderSearchContactButton = ({ setIsSearchMode }: Props) => {
  return (
    <button onClick={() => setIsSearchMode((prev) => !prev)}>
      <Image
        height={6}
        width={12}
        alt="iconChevronDown"
        src={CONTACT_IMAGES.iconContactSearch}
        className="h-20 w-20"
      />
    </button>
  );
};
