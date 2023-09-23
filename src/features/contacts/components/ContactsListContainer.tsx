import { ContactItem } from "@/features/contacts/components/list/ContactItem";
import { MOCKUP_CONTACT_LIST } from "@/features/contacts/mockups/MockupContactList";

type Props = {
  searchQuery: string;
};

export const ContactsListContainer = ({ searchQuery }: Props) => {
  const filteredSearchQuery = MOCKUP_CONTACT_LIST.filter((contact) => {
    return contact.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      {filteredSearchQuery.map((contact) => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </div>
  );
};
