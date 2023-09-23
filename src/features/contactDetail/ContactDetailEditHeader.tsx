import { TextButton } from "@/components";

export type ContactDetailEditHeaderProps = {
  disabledSave?: boolean;
  onSave?: () => void;
  onCancel?: () => void;
};

export const ContactDetailEditHeader = ({
  disabledSave,
  onSave,
  onCancel,
}: ContactDetailEditHeaderProps) => {
  return (
    <div className="flex h-48 items-center justify-between">
      <TextButton variant="secondary" onClick={onCancel}>
        취소
      </TextButton>
      <TextButton disabled={disabledSave} onClick={onSave}>
        완료
      </TextButton>
    </div>
  );
};
