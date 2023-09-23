import { useState } from "react";
import { ContactDetailDefaultFormItems } from "./ContactDetailDefaultFormItems";
import { ContactDetailEditHeader } from "./ContactDetailEditHeader";
import { ContactDetailOptionalFormItems } from "./ContactDetailOptionalFormItems";
import { ContactDetailProfileImage } from "./ContactDetailProfileImage";
import { ContactDetailShowMore } from "./ContactDetailShowMore";
import { ContactDetailViewHeader } from "./ContactDetailViewHeader";
import { FormProvider, useForm, useFormState } from "react-hook-form";
import { Profile, contactDetailValidationSchema } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactDetailCalendar } from "@/features/contactDetail/ContactDetailCalendar";

type Props = {
  profile?: Profile;
};

export const ContactDetail = ({ profile }: Props) => {
  const [isShowOptional, setIsShowOptional] = useState(!!profile);

  const formMethod = useForm<Profile>({
    mode: "all",
    defaultValues: profile,
    resolver: zodResolver(contactDetailValidationSchema),
  });
  const { isValid } = useFormState({ control: formMethod.control });

  return (
    <FormProvider {...formMethod}>
      <div className="flex w-full flex-col gap-16 px-20">
        {profile ? (
          <ContactDetailViewHeader />
        ) : (
          <ContactDetailEditHeader disabledSave={!isValid} />
        )}
        <ContactDetailProfileImage isAllowEdit={!profile} />
        <ContactDetailDefaultFormItems />
        <ContactDetailCalendar />
        {isShowOptional ? (
          <ContactDetailOptionalFormItems />
        ) : (
          <ContactDetailShowMore onClick={() => setIsShowOptional(true)} />
        )}
      </div>
    </FormProvider>
  );
};
