import { FormProvider, useForm } from "react-hook-form";
import { MyPageProfileImage } from "./MyPageProfileImage";
import { MyPageDefaultFormItems } from "./MyPageDefaultFormItems";

export const MyPage = () => {
  const formMethod = useForm<any>({
    mode: "all",
    defaultValues: {
      name: "홍길동",
      affiliation: "유니톤",
      rank: "참가자",
    },
  });

  return (
    <FormProvider {...formMethod}>
      <div className="flex w-full flex-col gap-16 px-20">
        <MyPageProfileImage />
        <MyPageDefaultFormItems />
      </div>
    </FormProvider>
  );
};
