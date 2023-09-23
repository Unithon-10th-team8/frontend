import { TextArea } from "@/components";
import { DatePicker } from "@/components/datePicker/DatePicker";
import { UserSelectModal } from "@/components/userSelectModal/UserSelectModal";
import { CONTACT_IMAGES } from "@/constants";
import { TContactItem } from "@/features/contacts/type/TContactItem";
import { useCreateCalendar } from "@/fetchers";
import classNames from "classnames";
import dayjs from "dayjs";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const 카테고리 = ["경조사", "미팅", "식사", "계약"];

const AddPage = () => {
  const { back } = useRouter();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<TContactItem>({
    id: "0",
    name: "",
    tags: [],
  });
  const { trigger, isMutating, error } = useCreateCalendar();

  const [isStartDateModalOpen, setIsStartDateModalOpen] = useState(false);
  const [isEndDateModalOpen, setIsEndDateModalOpen] = useState(false);

  const [formValues, setFormValues] = useState({
    title: "",
    startDate: "",
    endDate: "",
    tags: [] as string[],
    memo: "",
  });

  const handleSubmit = () => {
    const apiFormValues = {
      name: formValues.title,
      start_dt: dayjs(formValues.startDate).toISOString(),
      end_dt: dayjs(formValues.endDate).toISOString(),
      is_all_day: true,
      // remind_interval: 10,
      is_important: true,

      content: formValues.memo,
      // is_complete: true,
      // completed_at: "2023-09-23T14:23:32.341165Z",
      // is_repeat: true,
      tags: formValues.tags,
      recurring_input: {
        start_dt: "2023-09-23T17:01:52.781655Z",
        end_dt: "2023-09-23T17:01:52.781691Z",
        interval: 6,
        frequency: "일",
      },
    };
    trigger({
      contactId: user.id,
      calendar: apiFormValues as any,
    });
  };

  return (
    <div className="flex flex-col px-[20px]">
      {/* 네비게이션바 */}
      <div className="flex h-48 items-center justify-between py-[14px]">
        <Image
          src={CONTACT_IMAGES.iconChevronLeft}
          alt="iconChevronLeft"
          onClick={back}
          width={20}
          height={20}
        />
      </div>
      {/* 일정 제목 */}
      <input
        className="mb-16 mt-8 bg-transparent text-[20px] font-bold placeholder-[#565656]"
        placeholder="일정 제목"
        onChange={(e) => {
          setFormValues({
            ...formValues,
            title: e.target.value,
          });
        }}
      />
      <div className="flex">
        <div className="mr-10 flex w-fit cursor-pointer items-center  rounded-[24px] border-1 border-solid border-[#84F44F] bg-[#353639] px-12 py-4">
          <div className={`mr-4 h-[9px] w-[9px] rounded-[50%] bg-[#84F44F] `} />
          주요
        </div>
        <div className="flex w-fit cursor-pointer items-center rounded-[24px]  border-1 border-solid border-[#5F95FF] bg-[#353639] px-12  py-4">
          <div className={`mr-4 h-[9px] w-[9px] rounded-[50%] bg-[#5F95FF] `} />
          일반
        </div>
      </div>
      {/* 날짜 */}
      <div className="my-[16px] text-[15px] font-medium">날짜</div>
      <button
        className="bg-surface mb-8 rounded-12 px-16 py-[15px] text-left text-[15px] text-[#696969] focus:outline-none"
        onClick={() => setIsStartDateModalOpen(true)}
      >
        {formValues.startDate
          ? dayjs(formValues.startDate).format("YYYY-MM-DD")
          : "시작 날짜 선택"}
      </button>
      <DatePicker
        isOpen={isStartDateModalOpen}
        setIsOpen={setIsStartDateModalOpen}
        setDate={(date) => {
          setFormValues({
            ...formValues,
            startDate: date.toISOString(),
          });
        }}
      />
      <button
        className="bg-surface rounded-12 px-16 py-[15px] text-left text-[15px] text-[#696969] focus:outline-none"
        onClick={() => setIsEndDateModalOpen(true)}
      >
        {formValues.endDate
          ? dayjs(formValues.endDate).format("YYYY-MM-DD")
          : "종료 날짜 선택"}
      </button>
      <DatePicker
        isOpen={isEndDateModalOpen}
        setIsOpen={setIsEndDateModalOpen}
        setDate={(date) => {
          setFormValues({
            ...formValues,
            endDate: date.toISOString(),
          });
        }}
      />
      {/* <div className="mb-[14px] mr-10 flex w-full items-center justify-between rounded-[12px] bg-[#353639] p-[15px]">
        <input className="mb-16 mt-8 w-[60px] border-b-[2px] border-[#5E5E5E] bg-transparent text-right text-[23px] font-bold" />
        년
        <input className="mb-16 mt-8 w-[30px] border-b-[2px] border-[#5E5E5E] bg-transparent text-right text-[23px] font-bold" />
        월
        <input className="mb-16 mt-8 w-[30px] border-b-[2px] border-[#5E5E5E] bg-transparent text-right text-[23px] font-bold" />
        일
        <input className="mb-16 mt-8 w-[30px] border-b-[2px] border-[#5E5E5E] bg-transparent text-right text-[23px] font-bold" />
        시
        <input className="mb-16 mt-8 w-[30px] border-b-[2px] border-[#5E5E5E] bg-transparent text-right text-[23px] font-bold" />
        분
      </div>
      <div className="mr-10 flex w-full items-center justify-between rounded-[12px] bg-[#353639] p-[15px]">
        <input className="mb-16 mt-8 w-[60px] border-b-[2px] border-[#5E5E5E] bg-transparent text-right text-[23px] font-bold" />
        년
        <input className="mb-16 mt-8 w-[30px] border-b-[2px] border-[#5E5E5E] bg-transparent text-right text-[23px] font-bold" />
        월
        <input className="mb-16 mt-8 w-[30px] border-b-[2px] border-[#5E5E5E] bg-transparent text-right text-[23px] font-bold" />
        일
        <input className="mb-16 mt-8 w-[30px] border-b-[2px] border-[#5E5E5E] bg-transparent text-right text-[23px] font-bold" />
        시
        <input className="mb-16 mt-8 w-[30px] border-b-[2px] border-[#5E5E5E] bg-transparent text-right text-[23px] font-bold" />
        분
      </div> */}
      {/* 고객 */}
      <div className="my-[16px] text-[15px] font-medium">고객</div>
      <button
        className="bg-surface rounded-12 px-16 py-[15px] text-left text-[15px] text-[#696969] focus:outline-none"
        placeholder="기타 메모"
        onClick={() => setOpen(true)}
      >
        {user.id !== "0" ? user.name : "고객 선택"}
      </button>
      <UserSelectModal isOpen={open} setIsOpen={setOpen} setUser={setUser} />
      {/* 카테고리 */}
      <div className="my-[16px] text-[15px] font-medium">카테고리</div>
      <div className="flex flex-row">
        {카테고리.map((item) => (
          <div
            className={classNames(
              "mr-10 flex w-fit cursor-pointer items-center rounded-[24px] bg-[#353639] px-12  py-4",
              {
                "border-1 border-solid border-[#84F44F]":
                  formValues.tags.includes(item),
              },
            )}
            key={item}
            onClick={() => {
              if (formValues.tags.includes(item)) {
                setFormValues({
                  ...formValues,
                  tags: formValues.tags.filter((tag) => tag !== item),
                });
                return;
              }

              setFormValues({
                ...formValues,
                tags: [...formValues.tags, item] as string[],
              });
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* 메모 */}
      <div className="my-[16px] text-[15px] font-medium">메모</div>
      <TextArea
        placeholder="기타 메모"
        onChange={(e) => {
          setFormValues({
            ...formValues,
            memo: e.target.value,
          });
        }}
      />

      {/* 완료하기 */}
      <button
        className="bg-surface mb-[80px] mt-[40px] rounded-12 py-[15px] text-center text-[15px] text-[#fff] focus:outline-none"
        onClick={handleSubmit}
      >
        완료하기
      </button>
    </div>
  );
};

export default AddPage;
