import { ContactOutput } from "@/api";
import { ContactItem } from "@/features/contacts/components/list/ContactItem";
import { useGetContacts } from "@/fetchers";

type Props = {
  searchQuery: string;
};

const getContactTags = (contact: ContactOutput) => {
  const tags = [];
  if (contact.organization) tags.push(contact.organization);
  if (contact.position) tags.push(contact.position);
  return tags;
};

export const ContactsListContainer = ({ searchQuery }: Props) => {
  const { data: contacts, isLoading } = useGetContacts({});

  const filteredSearchQuery = (contacts ?? []).filter((contact) => {
    return contact.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      {isLoading ? (
        <div className="text-muted flex w-full items-center justify-center px-20 py-48">
          로딩중...
        </div>
      ) : filteredSearchQuery.length === 0 ? (
        <div className="text-muted flex w-full items-center justify-center whitespace-pre-wrap px-20 py-48  text-center">
          {`등록된 연락처가 없습니다.\n"+" 버튼을 클릭해 연락처를 추가해보세요!`}
        </div>
      ) : (
        filteredSearchQuery.map((contact) => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            tags={getContactTags(contact)}
            imageSrc={contact.profile_image_url}
          />
        ))
      )}
    </div>
  );
};
