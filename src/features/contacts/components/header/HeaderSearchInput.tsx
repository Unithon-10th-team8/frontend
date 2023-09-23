import { Dispatch, SetStateAction } from "react";

type Props = {
  setSearchQuery: Dispatch<SetStateAction<string>>;
  setIsSearchMode: Dispatch<SetStateAction<boolean>>;
};

export const HeaderSearchInput = ({
  setSearchQuery,
  setIsSearchMode,
}: Props) => {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex flex-1 animate-fade-in items-center">
      <button
        className="ml-[-16px] mr-[7px]"
        onClick={() => setIsSearchMode(false)}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 3.5L7 10L13 16.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <input
        placeholder="찾고 싶은 분의 이름을 입력해봐요!"
        className="h-[40px] flex-1 rounded-12 border-1 border-gray-700 bg-[#353639] px-16 py-[11px] placeholder:text-[#696969] focus:outline-none"
        onChange={handleChangeInput}
      />
    </div>
  );
};
