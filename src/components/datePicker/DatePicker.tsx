import { Calendar } from "@/components/calendar/Calendar";
import { Dialog, Transition } from "@headlessui/react";
import { Dayjs } from "dayjs";
import { Fragment } from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setDate: (date: Dayjs) => void;
};

export const DatePicker = ({ isOpen, setIsOpen, setDate }: Props) => {
  function closeModal() {
    setIsOpen(false);
  }

  const handleClickDate = (date: Dayjs) => {
    setDate(date);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="bg-opacity-25 fixed inset-0 bg-black" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="shadow-xl w-full max-w-md transform overflow-hidden rounded-[8px] bg-[#1a1b1d] p-6 px-20 text-left align-middle transition-all">
                  <Calendar
                    onClickDate={handleClickDate}
                    afterClickDate={closeModal}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
