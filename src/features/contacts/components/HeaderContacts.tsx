import { HeaderAddContactButton } from "@/features/contacts/components/header/HeaderAddContactButton";
import { HeaderCategorySelector } from "@/features/contacts/components/header/HeaderCategorySelector";
import { HeaderSearchContactButton } from "@/features/contacts/components/header/HeaderSearchContactButton";
import { HeaderSearchInput } from "@/features/contacts/components/header/HeaderSearchInput";
import { HeaderShowMoreButton } from "@/features/contacts/components/header/HeaderShowMoreButton";
import { useState } from "react";

export const HeaderContacts = () => {
  const [isSearchMode, setIsSearchMode] = useState(false);

  return (
    <div className="flex h-[48px] items-center justify-between px-[20px] py-[4px]">
      <HeaderCategorySelector className={isSearchMode ? "hidden" : ""} />
      <div
        className={`ml-[16px] flex items-center gap-[16px] ${
          isSearchMode ? "flex-1" : ""
        }`}
      >
        <HeaderAddContactButton className={isSearchMode ? "hidden" : ""} />
        {isSearchMode && <HeaderSearchInput />}
        <HeaderSearchContactButton setIsSearchMode={setIsSearchMode} />
        <HeaderShowMoreButton />
      </div>
    </div>
  );
};
