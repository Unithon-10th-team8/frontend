import { Input, InputGroup, InputGroupDivider } from "@/components";
import { Controller, useFormContext } from "react-hook-form";
import { Profile } from "./validationSchema";

export const ContactDetailDefaultFormItems = () => {
  const { control } = useFormContext<Profile>();

  return (
    <>
      <Controller
        control={control}
        name="name"
        render={({ field }) => <Input {...field} placeholder="이름" />}
      />
      <InputGroup>
        <Controller
          control={control}
          name="affiliation"
          render={({ field }) => (
            <Input {...field} variant="start" placeholder="소속" />
          )}
        />
        <InputGroupDivider />
        <Controller
          control={control}
          name="rank"
          render={({ field }) => (
            <Input {...field} variant="end" placeholder="직급" />
          )}
        />
      </InputGroup>
      <InputGroup>
        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <Input {...field} variant="start" placeholder="연락처" />
          )}
        />
        <InputGroupDivider />
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input {...field} variant="end" placeholder="이메일" />
          )}
        />
      </InputGroup>
    </>
  );
};
