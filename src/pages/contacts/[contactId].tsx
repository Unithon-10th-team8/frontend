import { ContactDetail } from "@/features/contactDetail/ContactDetail";
import { useGetContactById } from "@/fetchers";
import { useRouter } from "next/router";

const AddContact = () => {
  const router = useRouter();
  const { contactId } = router.query;

  const { data: profile } = useGetContactById((contactId as string) || "");

  return <ContactDetail profile={profile} />;
};

export default AddContact;
