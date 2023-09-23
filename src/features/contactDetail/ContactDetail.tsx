import { useState } from "react";
import { ContactDetailDefaultFormItems } from "./ContactDetailDefaultFormItems";
import { ContactDetailEditHeader } from "./ContactDetailEditHeader";
import { ContactDetailOptionalFormItems } from "./ContactDetailOptionalFormItems";
import { ContactDetailProfileImage } from "./ContactDetailProfileImage";
import { ContactDetailShowMore } from "./ContactDetailShowMore";
import { ContactDetailViewHeader } from "./ContactDetailViewHeader";
import { FormProvider, useForm, useFormState } from "react-hook-form";
import { contactDetailValidationSchema } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactInput } from "@/api";
import { useCreateContact } from "@/fetchers";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

type Props = {
  profile?: ContactInput;
};

export const ContactDetail = ({ profile }: Props) => {
  const { trigger: createContact } = useCreateContact();

  const router = useRouter();
  const [isShowOptional, setIsShowOptional] = useState(!!profile);

  const formMethod = useForm<ContactInput>({
    mode: "all",
    defaultValues: profile,
    resolver: zodResolver(contactDetailValidationSchema),
  });
  const { handleSubmit } = formMethod;
  const { isValid } = useFormState({ control: formMethod.control });

  const handleSave = handleSubmit(async (values) => {
    try {
      await toast.promise(createContact(values), {
        loading: "연락처를 저장하는 중...",
        success: "연락처가 저장되었습니다!",
        error: "연락처 저장을 실패했습니다.",
      });
      router.push("/contacts");
    } catch (e) {}
  });

  return (
    <FormProvider {...formMethod}>
      <div className="flex h-full w-full flex-col gap-16 px-20">
        {profile ? (
          <ContactDetailViewHeader />
        ) : (
          <ContactDetailEditHeader
            onSave={handleSave}
            disabledSave={!isValid}
          />
        )}
        <ContactDetailProfileImage isAllowEdit={!profile} />
        <ContactDetailDefaultFormItems />
        {isShowOptional ? (
          <ContactDetailOptionalFormItems />
        ) : (
          <ContactDetailShowMore onClick={() => setIsShowOptional(true)} />
        )}
      </div>
    </FormProvider>
  );
};
