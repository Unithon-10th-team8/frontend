import { TextButton } from "@/components";
import Link from "next/link";

export type ContactDetailEditHeaderProps = {
  disabledSave?: boolean;
  onSave?: () => void;
};

export const ContactDetailEditHeader = ({
  disabledSave,
  onSave,
}: ContactDetailEditHeaderProps) => {
  return (
    <div className="flex h-48 items-center justify-between">
      <Link href="/contacts">
        <TextButton variant="secondary">취소</TextButton>
      </Link>
      <TextButton disabled={disabledSave} onClick={onSave}>
        완료
      </TextButton>
    </div>
  );
};
