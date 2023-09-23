import { ContactDetail } from "@/features/contactDetail/ContactDetail";
import { Profile } from "@/constants";

const AddContact = () => {
  const profile: Profile = {
    name: "홍길동",
    affiliation: "유티톤",
    rank: "참가자",
    phone: "010-1234-5678",
    email: "test@example.com",
    isEnableAlarm: true,
    alarmMonth: 2,
    alarmDay: 3,
    memo: "hello world",
  };

  return <ContactDetail profile={profile} />;
};

export default AddContact;
