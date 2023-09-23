import Image from "next/image";
import { CONTACT_IMAGES } from "@/constants";
import { Menu } from "@headlessui/react";
import { HEADER_CATEGORY_LIST } from "@/features/contacts/constants/headerCategoryList";
import { DividerSelector } from "@/features/contacts/components/header/selector/DividerSelector";

type Props = {
  className?: string;
  setCategory: (category: string) => void;
  category: string;
};

export const HeaderCategorySelector = ({
  className = "",
  setCategory,
  category,
}: Props) => {
  return (
    <div className={`relative flex items-center px-4 py-2 ${className}`}>
      <Menu>
        <Menu.Button>
          <div className="flex items-center px-4 py-2">
            <span className="mr-12 text-20 font-bold">
              {category ?? "전체"}
            </span>
            <Image
              height={6}
              width={12}
              alt="iconChevronDown"
              src={CONTACT_IMAGES.iconChevronDown}
            />
          </div>
        </Menu.Button>
        <Menu.Items className="absolute top-[40px] z-[10] flex flex-col rounded-8 bg-[#444444] px-[10px]">
          {HEADER_CATEGORY_LIST.map(({ label, value }, index) => {
            const isLastItem = index === HEADER_CATEGORY_LIST.length - 1;
            return (
              <Menu.Item key={index}>
                {({ active, close }) => (
                  <>
                    <button
                      className={"w-48 py-8 text-center font-medium"}
                      onClick={() => {
                        setCategory(label);
                        close();
                      }}
                    >
                      {label}
                    </button>
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
