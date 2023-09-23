import Image from "next/image";
import { CONTACT_IMAGES } from "@/constants";
import { Menu } from "@headlessui/react";
import { HEADER_CATEGORY_LIST } from "@/features/contacts/constants/headerCategoryList";
import { DividerSelector } from "@/features/contacts/components/header/selector/DividerSelector";

export const HeaderCategorySelector = () => {
  return (
    <div className="p-x-[4px] p-y-[2px] relative flex items-center">
      <Menu>
        <Menu.Button>
          <div className="p-x-[4px] p-y-[2px] flex items-center">
            <span className="mr-[12px] text-[20px] font-bold">전체</span>
            <Image
              height={6}
              width={12}
              alt="iconChevronDown"
              src={CONTACT_IMAGES.iconChevronDown}
            />
          </div>
        </Menu.Button>
        <Menu.Items className="absolute top-[40px] z-[10] flex flex-col rounded-[8px] bg-[#444444] px-[10px]">
          {HEADER_CATEGORY_LIST.map(({ label, value }, index) => {
            const isLastItem = index === HEADER_CATEGORY_LIST.length - 1;
            return (
              <Menu.Item key={index}>
                {({ active }) => (
                  <>
                    <span
                      className={"w-[48px] py-[8px] text-center font-medium"}
                    >
                      {label}
                    </span>
                    {!isLastItem && <DividerSelector />}
                  </>
                )}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Menu>
    </div>
  );
};
