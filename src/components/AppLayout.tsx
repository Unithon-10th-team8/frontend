import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const AppLayout = ({ children }: Props) => {
  return (
    <main className="relative mx-auto my-0  h-full max-w-[480px] overflow-y-auto overflow-x-hidden bg-[#2b2c30] pb-[160px]">
      {children}
    </main>
  );
};
