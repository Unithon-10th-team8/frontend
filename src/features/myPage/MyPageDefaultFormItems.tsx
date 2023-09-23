import { Input, InputGroup, InputGroupDivider, TextButton } from "@/components";
import { Controller, useFormContext } from "react-hook-form";
import { Profile } from "@/constants";

export const MyPageDefaultFormItems = () => {
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
        <TextButton
          variant="danger"
          className="w-full !justify-start px-16 py-[15px] !text-[15px] !font-[400]"
          icon={
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.77777 13.5554C6.77777 15.9514 6.77777 17.1502 7.52248 17.8941C8.26634 18.6388 9.46516 18.6388 11.8611 18.6388H12.7083C15.1043 18.6388 16.3031 18.6388 17.047 17.8941C17.7917 17.1502 17.7917 15.9514 17.7917 13.5554V6.77767C17.7917 4.38172 17.7917 3.18291 17.047 2.43904C16.3031 1.69434 15.1043 1.69434 12.7083 1.69434H11.8611C9.46516 1.69434 8.26634 1.69434 7.52248 2.43904C6.77777 3.18291 6.77777 4.38172 6.77777 6.77767"
                stroke="#FD5252"
                stroke-width="1.27083"
                stroke-linecap="round"
              />
              <path
                d="M6.77777 16.5208C4.78086 16.5208 3.78199 16.5208 3.16182 15.9007C2.54166 15.2797 2.54166 14.2816 2.54166 12.2847V8.04861C2.54166 6.05171 2.54166 5.05283 3.16182 4.43267C3.78199 3.8125 4.78086 3.8125 6.77777 3.8125"
                stroke="#FD5252"
                stroke-width="1.27083"
              />
              <path
                d="M5.08334 10.1669H12.7083M12.7083 10.1669L10.5903 12.2849M12.7083 10.1669L10.5903 8.04883"
                stroke="#FD5252"
                strokeWidth="1.27083"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        >
          로그아웃
        </TextButton>
        <InputGroupDivider />
        <TextButton
          variant="danger"
          className="w-full !justify-start px-16 py-[15px] !text-[15px] !font-[400]"
          icon={
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.14235 5.41688C6.14235 4.34957 6.56634 3.32597 7.32105 2.57127C8.07575 1.81657 9.09935 1.39258 10.1667 1.39258C11.234 1.39258 12.2576 1.81657 13.0123 2.57127C13.767 3.32597 14.191 4.34957 14.191 5.41688C14.191 6.4842 13.767 7.50779 13.0123 8.2625C12.2576 9.0172 11.234 9.44119 10.1667 9.44119C9.09935 9.44119 8.07575 9.0172 7.32105 8.2625C6.56634 7.50779 6.14235 6.4842 6.14235 5.41688ZM10.1667 2.66341C9.43639 2.66341 8.73604 2.95351 8.21966 3.46988C7.70328 3.98626 7.41319 4.68662 7.41319 5.41688C7.41319 6.14715 7.70328 6.84751 8.21966 7.36388C8.73604 7.88026 9.43639 8.17036 10.1667 8.17036C10.8969 8.17036 11.5973 7.88026 12.1137 7.36388C12.63 6.84751 12.9201 6.14715 12.9201 5.41688C12.9201 4.68662 12.63 3.98626 12.1137 3.46988C11.5973 2.95351 10.8969 2.66341 10.1667 2.66341ZM12.5177 10.9348C11.743 10.7852 10.9557 10.7106 10.1667 10.712C8.20704 10.712 6.40076 11.1577 5.06299 11.91C3.74472 12.6522 2.75347 13.7756 2.75347 15.1599V15.2464C2.75262 16.2308 2.75177 17.4661 3.83537 18.3489C4.36827 18.7827 5.11467 19.0919 6.12287 19.2952C7.13276 19.5003 8.45019 19.6079 10.1667 19.6079C12.5965 19.6079 14.2418 19.3927 15.3517 18.9801C16.3505 18.6073 16.9419 18.0634 17.2579 17.3771C17.7936 17.0692 18.2512 16.642 18.5951 16.1287C18.9391 15.6154 19.1601 15.0297 19.2412 14.4171C19.3222 13.8046 19.261 13.1816 19.0624 12.5965C18.8638 12.0114 18.533 11.4799 18.0958 11.0433C17.7224 10.6691 17.2788 10.3724 16.7905 10.1702C16.3021 9.96792 15.7786 9.86415 15.25 9.8648C14.1952 9.8648 13.2353 10.2715 12.5177 10.9348ZM5.68485 13.0182C4.54958 13.6561 4.0243 14.439 4.0243 15.1599C4.0243 16.2681 4.05819 16.8917 4.63684 17.3627C4.95031 17.6186 5.47559 17.8685 6.37365 18.0498C7.26916 18.2311 8.4934 18.337 10.1658 18.337C12.35 18.337 13.758 18.1566 14.6654 17.8711C13.8086 17.7461 13.0152 17.3476 12.4033 16.7349C12.0295 16.3614 11.7331 15.9177 11.5312 15.4294C11.3292 14.941 11.2257 14.4176 11.2265 13.8891C11.2265 13.2384 11.3799 12.6242 11.6544 12.0803C11.1612 12.015 10.6642 11.9824 10.1667 11.9829C8.38326 11.9829 6.7998 12.3912 5.68485 13.0182ZM12.4974 13.8891C12.4973 13.3991 12.6281 12.9179 12.8761 12.4953C13.1242 12.0726 13.4805 11.7239 13.9084 11.4849C14.3362 11.246 14.8201 11.1256 15.31 11.1361C15.7999 11.1467 16.2782 11.2878 16.6954 11.5448L12.9057 15.3345C12.6373 14.9002 12.4956 14.3996 12.4965 13.8891H12.4974ZM13.8046 16.2334L17.5943 12.4437C17.9202 12.9714 18.0584 13.5936 17.9866 14.2096C17.9148 14.8256 17.6372 15.3993 17.1987 15.8378C16.7602 16.2763 16.1864 16.554 15.5704 16.6258C14.9544 16.6975 14.3323 16.5593 13.8046 16.2334Z"
                fill="#FD5252"
              />
            </svg>
          }
        >
          회원탈퇴
        </TextButton>
        <InputGroupDivider />
        <TextButton
          variant="secondary"
          className="w-full !justify-start px-16 py-[15px] !text-[15px] !font-[400]"
        >
          내 정보 변경
        </TextButton>
      </InputGroup>
    </>
  );
};
