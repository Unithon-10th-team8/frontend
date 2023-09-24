import { useRouter } from "next/router";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const AppLayout = ({ children }: Props) => {
  const { pathname } = useRouter();
  return (
    <main
      className={`relative mx-auto my-0 h-full max-w-[480px] overflow-y-auto overflow-x-hidden bg-[#2b2c30] ${
        pathname === "/signIn" ? "" : "pb-[160px]"
      }`}
    >
      {children}
    </main>
  );
};
