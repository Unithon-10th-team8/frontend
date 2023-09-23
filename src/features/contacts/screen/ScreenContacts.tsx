import { HeaderContacts } from "@/features/contacts/components/HeaderContacts";
import { ContactsListContainer } from "@/features/contacts/components/ContactsListContainer";
import { useState } from "react";

export const ScreenContacts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("전체");

  return (
    <>
      <div className="w-full">
        <div className="w-full border-b-1 border-[#353639] px-20 pb-16 pt-32">
          <h1 className="animate-title text-[32px] font-bold">연락책</h1>
        </div>
        <HeaderContacts
          category={category}
          setCategory={setCategory}
          setSearchQuery={setSearchQuery}
        />
      </div>
      <ContactsListContainer searchQuery={searchQuery} category={category} />
    </>
  );
};
