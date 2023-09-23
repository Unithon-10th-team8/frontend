import Image from "next/image";
import { CONTACT_IMAGES } from "@/constants";
import { Menu } from "@headlessui/react";
import { DividerSelector } from "@/features/contacts/components/header/selector/DividerSelector";
import { useEffect, useState } from "react";

type Props = {
  items: string[];
  className?: string;
  onChange?: (value: string) => void;
};

export const Selector = ({ items, className = "", onChange }: Props) => {
  const [value, setValue] = useState(items[0]);
  useEffect(() => {
    onChange?.(items[0]);
    setValue(items[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onChange]);

  return (
    <div className={`relative flex items-center px-4 py-2 ${className}`}>
      <Menu>
        <Menu.Button>
          <div className="flex items-center px-4 py-2">
            <span className="mr-12 font-bold">{value}</span>
            <Image
              height={6}
              width={12}
              alt="iconChevronDown"
              src={CONTACT_IMAGES.iconChevronDown}
            />
          </div>
        </Menu.Button>
        <Menu.Items className="absolute top-[40px] z-[10] flex flex-col rounded-8 bg-[#444444] px-[10px]">
          {items.map((item, index) => {
            const isLastItem = index === items.length - 1;
            return (
              <Menu.Item key={index}>
                {({ active, close }) => (
                  <>
                    <button
                      onClick={() => {
                        onChange?.(item);
                        setValue(item || "직장");
                        close();
                      }}
                      className={"w-48 py-8 text-center font-medium"}
                    >
                      {item}
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
