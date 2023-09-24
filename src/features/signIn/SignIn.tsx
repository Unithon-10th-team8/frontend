import { API_HOST, ETC, NOTIFICATION_IMAGES, SIGN_IN } from "@/constants";
import Image from "next/image";
import React from "react";

const Logos = [
  NOTIFICATION_IMAGES.birthday,
  NOTIFICATION_IMAGES.contract,
  NOTIFICATION_IMAGES.meal,
  NOTIFICATION_IMAGES.obituary,
  NOTIFICATION_IMAGES.meeting,
];
const InfiniteScrollingLogos = [...Logos, ...Logos];

const SignIn = () => {
  const handleSignIn = () => {
    // 로그인 요청
    window.location.href = API_HOST + "/v1/social-login/google";
  };

  return (
    <div className="flex h-full flex-col px-[20px]">
      <div className="flex h-full flex-col items-center justify-center">
        <Image
          src={ETC.KAMY}
          alt="logo"
          width={244}
          height={140}
          unoptimized
          className="mb-6"
        />
        <div className="mb-[80px] text-[20px] text-[#B3B3B3]">
          영업사원 인맥 관리 서비스
        </div>
        <div className="flex w-full flex-row overflow-hidden">
          <div className="animate-rolling flex h-[140px] w-[900px] items-center [transform:translate(-8px)]  ">
            {InfiniteScrollingLogos.map((imageName) => (
              <div
                key={`image__${imageName}}`}
                className="h-[160px] w-[160px] flex-shrink-0"
              >
                <Image
                  src={imageName}
                  alt="imageName"
                  width={160}
                  height={160}
                />
              </div>
            ))}
          </div>
        </div>
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
