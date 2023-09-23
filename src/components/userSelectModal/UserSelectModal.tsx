import { ContactItem } from "@/features/contacts/components/list/ContactItem";
import { TContactItem } from "@/features/contacts/type/TContactItem";
import { useGetContacts } from "@/fetchers";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setUser: (user: TContactItem) => void;
};

export const UserSelectModal = ({ isOpen, setIsOpen, setUser }: Props) => {
  const { data } = useGetContacts({});
  function closeModal() {
    setIsOpen(false);
  }

  const handleSetUser = (user: TContactItem) => {
    setUser(user);
    closeModal();
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
                <Dialog.Panel className="shadow-xl w-full max-w-md transform overflow-hidden rounded-[8px] bg-[#1a1b1d] p-[20px] text-left align-middle transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium"
                  >
                    사람 선택
                  </Dialog.Title>
                  {data?.map((contact) => (
                    <ContactItem
                      key={contact.id}
                      {...contact}
                      setUser={handleSetUser}
                      isSelectMode
                      tags={[
                        contact.organization ?? "",
                        contact.position ?? "",
                      ]}
                      imageSrc={contact.profile_image_url}
                    />
                  ))}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
