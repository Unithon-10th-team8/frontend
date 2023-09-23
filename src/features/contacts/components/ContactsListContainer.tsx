import { ContactItem } from "@/features/contacts/components/list/ContactItem";
import { MOCKUP_CONTACT_LIST } from "@/features/contacts/mockups/MockupContactList";

export const ContactsListContainer = () => {
  return (
    <div>
      {MOCKUP_CONTACT_LIST.map((contact) => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </div>
  );
};
