import { TextArea } from "@/components";
import { CONTACT_IMAGES } from "@/constants";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const 카테고리 = ["경조사", "미팅", "식사", "계약"];

const AddPage = () => {
  const { back } = useRouter();
  return (
    <div className="flex h-full flex-col px-[20px]">
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
      <div className="mb-[14px] mr-10 flex w-full items-center justify-between rounded-[12px] bg-[#353639] p-[15px]">
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
      </div>
      {/* 고객 */}
      <div className="my-[16px] text-[15px] font-medium">고객</div>
      <button
        className="rounded-12 bg-surface px-16 py-[15px] text-left text-[15px] text-[#696969] focus:outline-none"
        placeholder="기타 메모"
        onClick={() => {}}
      >
        고객 추가
      </button>
      {/* 카테고리 */}
      <div className="my-[16px] text-[15px] font-medium">카테고리</div>
      <div className="flex flex-row">
        {카테고리.map((item) => (
          <div
            className="mr-10 flex w-fit cursor-pointer items-center rounded-[24px] bg-[#353639] px-12  py-4"
            key={item}
          >
            {item}
          </div>
        ))}
      </div>

      {/* 메모 */}
      <div className="my-[16px] text-[15px] font-medium">메모</div>
      <TextArea placeholder="기타 메모" />

      {/* 완료하기 */}
      <button className="mb-[80px] rounded-12 bg-surface py-[15px] text-center text-[15px] text-[#fff] focus:outline-none">
        완료하기
      </button>
    </div>
  );
};

export default AddPage;
