import { API_HOST, SIGN_IN } from "@/constants";
import Image from "next/image";
import React from "react";

const SignIn = () => {
  const handleSignIn = () => {
    // 로그인 요청
    window.location.href = API_HOST + "/v1/social-login/google";
  };

  return (
    <div className="flex h-full flex-col px-[20px]">
      <div className="flex h-full items-center justify-center text-[40px] font-bold leading-[150%] text-[#84F44F]">
        Kamy
      </div>

      <button
        className="mb-[40px] mt-auto flex w-full justify-center rounded-[50px] bg-white py-14 text-[17px] font-medium leading-[22px] text-black"
        onClick={handleSignIn}
      >
        <Image
          src={SIGN_IN.google}
          alt="icon-google"
          width={20}
          height={20}
          unoptimized
          className="mr-10"
        />
        Google로 로그인
      </button>
    </div>
  );
};

export default SignIn;
