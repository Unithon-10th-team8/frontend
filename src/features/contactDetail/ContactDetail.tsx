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
  useDeleteContact,
  useGetImageUploadURL,
  useUpdateContact,
  useUploadImage,
} from "@/fetchers";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { ContactDetailCalendar } from "@/features/contactDetail/ContactDetailCalendar";
import { InputGroup, TextButton } from "@/components";
import dayjs from "dayjs";

type Props = {
  profile?: ContactInput;
};

export const ContactDetail = ({ profile }: Props) => {
  const { trigger: createContact } = useCreateContact();
  const { trigger: updateContact } = useUpdateContact();
  const { trigger: deleteContact } = useDeleteContact();
  const { isMutating: isLoadingCloudflareImages } = useGetImageUploadURL();
  const { isMutating: isLoadingUploadImage } = useUploadImage();

  const router = useRouter();
  const { contactId } = router.query;
  const [isShowOptional, setIsShowOptional] = useState(!!profile);
  const [isEditMode, setIsEditMode] = useState(false);

  const formMethod = useForm<ContactInput>({
    mode: "all",
    resolver: zodResolver(contactDetailValidationSchema),
  });
  const { handleSubmit, setValue, trigger, reset } = formMethod;
  const { isValid } = useFormState({ control: formMethod.control });

  const disabledSave =
    !isValid || isLoadingCloudflareImages || isLoadingUploadImage;

  const handleSave = handleSubmit(async (values) => {
    values.repeat_base_date = dayjs().toISOString();
    try {
      const fetcherPromise =
        isEditMode && contactId
          ? updateContact({ id: contactId as string, contact: values })
          : createContact(values);

      await toast.promise(fetcherPromise, {
        loading: "연락처를 저장하는 중...",
        success: "연락처가 저장되었습니다!",
        error: "연락처 저장을 실패했습니다.",
      });
      if (isEditMode) {
        setIsEditMode(false);
      }
      if (!isEditMode || !contactId) {
        router.push("/contacts");
      }
    } catch (e) {}
  });

  const handleCancel = () => {
    if (isEditMode && profile) {
      setIsEditMode(false);
      reset(profile);
    } else {
      router.push("/contacts");
    }
  };

  const handleDelete = async () => {
    if (profile && contactId) {
      await toast.promise(deleteContact(contactId as string), {
        loading: "연락처를 삭제하는 중...",
        success: "연락처를 삭제했습니다.",
        error: "연락처 삭제를 실패했습니다.",
      });
      router.push("/contacts");
    }
  };

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
        {profile && !isEditMode ? (
          <ContactDetailViewHeader
            onClickEdit={() => setIsEditMode((state) => !state)}
          />
        ) : (
          <ContactDetailEditHeader
            onSave={handleSave}
            onCancel={handleCancel}
            disabledSave={disabledSave}
          />
        )}
        <ContactDetailProfileImage isAllowEdit={!profile || isEditMode} />
        <ContactDetailDefaultFormItems isAllowEdit={!profile || isEditMode} />
        {profile && !isEditMode && <ContactDetailCalendar />}
        {isShowOptional || profile ? (
          <ContactDetailOptionalFormItems
            isAllowEdit={!profile || isEditMode}
          />
        ) : (
          <ContactDetailShowMore onClick={() => setIsShowOptional(true)} />
        )}
        {profile && (
          <InputGroup>
            <TextButton
              onClick={handleDelete}
              variant="danger"
              className="w-full px-16 py-[15px] !text-[15px] !font-[400]"
            >
              연락처 삭제
            </TextButton>
          </InputGroup>
        )}
      </div>
    </FormProvider>
  );
};
