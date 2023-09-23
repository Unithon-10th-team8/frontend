import { HeaderContacts } from "@/features/contacts/components/HeaderContacts";
import { ContactsListContainer } from "@/features/contacts/components/ContactsListContainer";
import { useState } from "react";

export const ScreenContacts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("전체");

  return (
    <>
      <HeaderContacts
        category={category}
        setCategory={setCategory}
        setSearchQuery={setSearchQuery}
      />
      <ContactsListContainer searchQuery={searchQuery} category={category} />
    </>
  );
};
