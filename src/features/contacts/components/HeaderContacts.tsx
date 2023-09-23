import { HeaderAddContactButton } from "@/features/contacts/components/header/HeaderAddContactButton";
import { HeaderCategorySelector } from "@/features/contacts/components/header/HeaderCategorySelector";
import { HeaderSearchContactButton } from "@/features/contacts/components/header/HeaderSearchContactButton";
import { HeaderShowMoreButton } from "@/features/contacts/components/header/HeaderShowMoreButton";

export const HeaderContacts = () => {
  return (
    <div className="flex">
      <HeaderCategorySelector />
      <HeaderAddContactButton />
      <HeaderSearchContactButton />
      <HeaderShowMoreButton />
    </div>
  );
};
