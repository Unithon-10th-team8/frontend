import { HeaderContacts } from "@/features/contacts/components/HeaderContacts";
import { ContactsListContainer } from "@/features/contacts/components/ContactsListContainer";
import { useState } from "react";

export const ScreenContacts = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <HeaderContacts setSearchQuery={setSearchQuery} />
      <ContactsListContainer searchQuery={searchQuery} />
    </>
  );
};
