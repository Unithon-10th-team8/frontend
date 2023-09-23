import { ContactInput } from "@/api";
import { Input, InputGroup, InputGroupDivider, Selector } from "@/components";
import { FieldItem } from "@/components/FieldItem";
import { removeNull } from "@/utils";
import { Controller, useFormContext } from "react-hook-form";

export const ContactDetailDefaultFormItems = () => {
  const { control } = useFormContext<ContactInput>();

  return (
    <>
      <Controller
        control={control}
        name="name"
        render={({ field: { value, ...field } }) => (
          <Input {...field} value={value} placeholder="이름" />
        )}
      />
      <InputGroup>
        <Controller
          control={control}
          name="organization"
          render={({ field: { value, ...field } }) => (
            <Input
              {...field}
              value={removeNull(value)}
              variant="start"
              placeholder="소속"
            />
          )}
        />
        <InputGroupDivider />
        <Controller
          control={control}
          name="position"
          render={({ field: { value, ...field } }) => (
            <Input
              {...field}
              value={removeNull(value)}
              variant="end"
              placeholder="직급"
            />
          )}
        />
      </InputGroup>
      <InputGroup>
        <Controller
          control={control}
          name="phone"
          render={({ field: { value, ...field } }) => (
            <Input
              {...field}
              value={removeNull(value)}
              variant="start"
              placeholder="연락처"
            />
          )}
        />
        <InputGroupDivider />
        <Controller
          control={control}
          name="email"
          render={({ field: { value, ...field } }) => (
            <Input
              {...field}
              value={removeNull(value)}
              variant="end"
              placeholder="이메일"
            />
          )}
        />
      </InputGroup>
      <Controller
        control={control}
        name="category"
        render={({ field }) => (
          <FieldItem label="분류">
            <Selector
              onChange={field.onChange}
              items={["직장", "거래처", "고객", "기타"]}
            />
          </FieldItem>
        )}
      />
    </>
  );
};
