import { ContactInput } from "@/api";
import { InputGroup, Switch, TextArea } from "@/components";
import { FieldItem } from "@/components/FieldItem";
import { removeNull } from "@/utils";
import classNames from "classnames";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

export const ContactDetailOptionalFormItems = () => {
  const { control } = useFormContext<ContactInput>();
  const [isEnableAlarm, setIsEnableAlarm] = useState(false);

  return (
    <>
      <InputGroup>
        <FieldItem label="연락 알람 설정">
          <Switch
            defaultValue={isEnableAlarm}
            onChange={(checked) => setIsEnableAlarm(checked)}
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
            name="repeat_interval"
            render={({ field: { value, onChange, ...field } }) => (
              <input
                {...field}
                onChange={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");

                  onChange(e);
                }}
                value={removeNull(value)}
                type="text"
                className="mr-4 w-16 border-b-2 border-[#5E5E5E] bg-transparent text-right focus:outline-none"
              />
            )}
          />{" "}
          개월마다 알람 설정
        </div>
      </InputGroup>
      <TextArea placeholder="기타 메모" />
    </>
  );
};
