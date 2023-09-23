import { useEffect, useState } from "react";
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
import {
  useCreateContact,
  useGetImageUploadURL,
  useUploadImage,
} from "@/fetchers";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { ContactDetailCalendar } from "@/features/contactDetail/ContactDetailCalendar";

type Props = {
  profile?: ContactInput;
};

export const ContactDetail = ({ profile }: Props) => {
  const { trigger: createContact } = useCreateContact();
  const { isMutating: isLoadingCloudflareImages } = useGetImageUploadURL();
  const { isMutating: isLoadingUploadImage } = useUploadImage();

  const router = useRouter();
  const [isShowOptional, setIsShowOptional] = useState(!!profile);

  const formMethod = useForm<ContactInput>({
    mode: "all",
    resolver: zodResolver(contactDetailValidationSchema),
  });
  const { handleSubmit, setValue, trigger } = formMethod;
  const { isValid } = useFormState({ control: formMethod.control });

  const disabledSave =
    !isValid || isLoadingCloudflareImages || isLoadingUploadImage;

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

  useEffect(() => {
    if (profile) {
      Object.entries(profile).forEach(([key, value]) =>
        setValue(key as any, value),
      );
      trigger();
    }
  }, [profile]);

  return (
    <FormProvider {...formMethod}>
      <div className="flex w-full flex-col gap-16 px-20">
        {profile ? (
          <ContactDetailViewHeader />
        ) : (
          <ContactDetailEditHeader
            onSave={handleSave}
            disabledSave={disabledSave}
          />
        )}
        <ContactDetailProfileImage isAllowEdit={!profile} />
        <ContactDetailDefaultFormItems />
        {profile && <ContactDetailCalendar />}
        {isShowOptional ? (
          <ContactDetailOptionalFormItems isAllowEdit={!profile} />
        ) : (
          <ContactDetailShowMore onClick={() => setIsShowOptional(true)} />
        )}
      </div>
    </FormProvider>
  );
};
