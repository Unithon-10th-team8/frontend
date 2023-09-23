import { InputGroup, Switch, TextArea } from "@/components";
import { FieldItem } from "@/components/FieldItem";
import classNames from "classnames";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { Profile } from "./validationSchema";

export const ContactDetailOptionalFormItems = () => {
  const { control } = useFormContext<Profile>();
  const { isEnableAlarm } = useWatch<Profile>();

  return (
    <>
      <InputGroup>
        <FieldItem label="연락 알람 설정">
          <Controller
            control={control}
            name="isEnableAlarm"
            render={({ field: { value, onChange } }) => (
              <Switch defaultValue={value} onChange={onChange} />
            )}
          />
        </FieldItem>
        <div
          className={classNames(
            "h-0 w-full p-0 px-16 text-[15px] duration-200",
            {
              "!h-[64px] !py-[15px]": isEnableAlarm,
            },
          )}
        >
          <Controller
            control={control}
            name="alarmMonth"
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="mr-4 w-16 border-b-2 border-[#5E5E5E] bg-transparent text-right focus:outline-none"
              />
            )}
          />{" "}
          개월마다{" "}
          <Controller
            control={control}
            name="alarmDay"
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="mr-4 w-16 border-b-2 border-[#5E5E5E] bg-transparent text-right focus:outline-none"
              />
            )}
          />{" "}
          일에 알람 설정
        </div>
      </InputGroup>
      <TextArea placeholder="기타 메모" />
    </>
  );
};
