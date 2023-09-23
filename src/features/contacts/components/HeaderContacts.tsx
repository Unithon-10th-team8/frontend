import { HeaderAddContactButton } from "@/features/contacts/components/header/HeaderAddContactButton";
import { HeaderCategorySelector } from "@/features/contacts/components/header/HeaderCategorySelector";
import { HeaderSearchContactButton } from "@/features/contacts/components/header/HeaderSearchContactButton";
import { HeaderShowMoreButton } from "@/features/contacts/components/header/HeaderShowMoreButton";

export const HeaderContacts = () => {
  return (
    <div className="flex items-center justify-between px-[20px] py-[10px]">
      <HeaderCategorySelector />
      <div className="flex gap-[16px]">
        <HeaderAddContactButton />
        <HeaderSearchContactButton />
        <HeaderShowMoreButton />
      </div>
    </div>
  );
};
