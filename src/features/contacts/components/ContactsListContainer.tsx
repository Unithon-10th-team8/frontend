import { ContactOutput } from "@/api";
import { ContactItem } from "@/features/contacts/components/list/ContactItem";
import { useGetContacts } from "@/fetchers";

type Props = {
  searchQuery: string;
  category: string;
};

const getContactTags = (contact: ContactOutput) => {
  const tags = [];
  if (contact.organization) tags.push(contact.organization);
  if (contact.position) tags.push(contact.position);
  return tags;
};

export const ContactsListContainer = ({ searchQuery, category }: Props) => {
  const { data: contacts, isLoading } = useGetContacts({});

  // move items with is_important to the top
  const sortedContacts = (contacts ?? []).sort((a, b) => {
    if (a.is_important && !b.is_important) return -1;
    if (!a.is_important && b.is_important) return 1;
    return 0;
  });

  const filteredSearchQuery = (sortedContacts ?? []).filter((contact) => {
    return contact.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const filteredCategory = (sortedContacts ?? []).filter((contact) => {
    return category === "전체"
      ? true
      : contact?.category?.toLowerCase().includes(category.toLowerCase());
  });

  const finalFiltered =
    searchQuery === "" ? filteredCategory : filteredSearchQuery;

  return (
    <div>
      {isLoading ? (
        <div className="text-muted flex w-full items-center justify-center px-20 py-48">
          로딩중...
        </div>
      ) : finalFiltered.length === 0 ? (
        <div className="text-muted flex w-full items-center justify-center whitespace-pre-wrap px-20 py-48  text-center">
          {`등록된 연락처가 없습니다.\n"+" 버튼을 클릭해 연락처를 추가해보세요!`}
        </div>
      ) : (
        finalFiltered.map((contact) => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            tags={getContactTags(contact)}
            imageSrc={contact.profile_image_url}
            isBookmarked={contact.is_important}
          />
        ))
      )}
    </div>
  );
};
