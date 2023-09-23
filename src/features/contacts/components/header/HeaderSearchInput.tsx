export const HeaderSearchInput = () => {
  return (
    <div className="flex flex-1 items-center">
      <div className="ml-[-16px] mr-[7px]">
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
      </div>
      <input
        placeholder="찾고 싶은 분의 이름을 입력해봐요!"
        className="h-[40px] flex-1 rounded-[12px] border-1 border-gray-700 bg-[#353639] px-16 py-[11px] placeholder:text-[#696969] focus:outline-none"
      />
    </div>
  );
};
