import { FormProvider, useForm } from "react-hook-form";
import { MyPageProfileImage } from "./MyPageProfileImage";
import { MyPageDefaultFormItems } from "./MyPageDefaultFormItems";
import { UserOutput, useGetUserMe } from "@/fetchers/user";
import { useEffect } from "react";

export const MyPage = () => {
  const { data: user } = useGetUserMe();
  const formMethod = useForm<UserOutput>({
    mode: "all",
  });
  const { setValue, trigger } = formMethod;

  useEffect(() => {
    if (user) {
      Object.entries(user).forEach(([key, value]) =>
        setValue(key as any, value),
      );
      trigger();
    }
  }, [user]);

  return (
    <FormProvider {...formMethod}>
      <div className="w-full border-b-1 border-[#353639] px-20 pb-16 pt-32">
        <h1 className="animate-title text-[32px] font-bold">내 소개</h1>
      </div>
      <div className="flex w-full flex-col gap-16 px-20">
        <MyPageProfileImage />
        <MyPageDefaultFormItems />
      </div>
    </FormProvider>
  );
};
