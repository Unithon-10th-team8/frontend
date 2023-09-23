import { CONTACT_IMAGES } from "@/constants";
import Image from "next/image";
import Link from "next/link";

type Props = {
  className?: string;
};

export const HeaderAddContactButton = ({ className }: Props) => {
  const link = "/contacts/add";

  return (
    <Link href={link}>
      <Image
        height={20}
        width={20}
        alt="iconChevronDown"
        src={CONTACT_IMAGES.iconContactAdd}
        className={`h-20 ${className}`}
      />
    </Link>
  );
};
