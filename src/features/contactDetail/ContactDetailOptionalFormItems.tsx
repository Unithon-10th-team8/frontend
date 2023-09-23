import { ContactInput } from "@/api";
import { InputGroup, Selector, Switch, TextArea } from "@/components";
import { FieldItem } from "@/components/FieldItem";
import classNames from "classnames";
import { useState } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

type Props = {
  isAllowEdit?: boolean;
};

export const ContactDetailOptionalFormItems = ({ isAllowEdit }: Props) => {
  const { control, setValue } = useFormContext<ContactInput>();
  const [isEnableAlarm, setIsEnableAlarm] = useState(false);
  const { repeat_interval } = useWatch<ContactInput>();

  return (
    <>
      {(isAllowEdit || repeat_interval) && (
        <InputGroup>
          <FieldItem label="연락 알람 설정">
            {isAllowEdit && (
              <Switch
                defaultValue={isEnableAlarm}
                onChange={(checked) => {
                  setIsEnableAlarm(checked);
                  if (!checked) {
                    setValue("repeat_interval", undefined);
                  }
                }}
              />
            )}
          </FieldItem>
          <div
            className={classNames(
              "flex h-0 w-full items-center justify-start p-0 px-16 text-[15px] duration-200",
              isEnableAlarm || !isAllowEdit
                ? "!h-[64px] !pb-[15px] opacity-100"
                : "opacity-0",
            )}
          >
            <Controller
              control={control}
              name="repeat_interval"
              render={({ field: { value, onChange } }) =>
                isAllowEdit ? (
                  <Selector
                    className={classNames(
                      isEnableAlarm || !isAllowEdit
                        ? "opacity-100"
                        : "opacity-0",
                    )}
                    items={["1", "3", "6", "12"]}
                    onChange={onChange}
                  />
                ) : (
                  <span className="mx-8 flex h-[30px] items-center justify-center">
                    {value}
                  </span>
                )
              }
            />{" "}
            개월마다 알람 설정
          </div>
        </InputGroup>
      )}
      <TextArea placeholder="기타 메모" />
    </>
  );
};
