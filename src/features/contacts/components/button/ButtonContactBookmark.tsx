import { useGetContacts, useUpdateContactImportance } from "@/fetchers";
import toast from "react-hot-toast";

type Props = {
  isBookmarked: boolean;
  contactId: string;
};

export const ButtonContactBookmark = ({ isBookmarked, contactId }: Props) => {
  const fillColor = isBookmarked ? "#5F95FF" : "#444444";

  const { trigger, isMutating } = useUpdateContactImportance();
  const { mutate } = useGetContacts({});

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    // click event handler

    await toast.promise(trigger({ id: contactId }), {
      loading: "즐겨찾기를 변경하는 중...",
      success: "즐겨찾기가 변경되었습니다!",
      error: "즐겨찾기 변경을 실패했습니다.",
    });

    mutate();
  };

  return (
    <button onClick={handleClick}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.72245 4.72641C8.73603 2.9088 9.24242 2 10 2C10.7576 2 11.264 2.9088 12.2775 4.72641L12.5399 5.19681C12.8279 5.71361 12.9719 5.97201 13.1959 6.14241C13.4199 6.31281 13.6999 6.37601 14.2599 6.50241L14.7687 6.61761C16.7366 7.06322 17.7198 7.28562 17.9542 8.03842C18.1878 8.79042 17.5174 9.57522 16.1759 11.144L15.8287 11.5496C15.4479 11.9952 15.2567 12.2184 15.1711 12.4936C15.0855 12.7696 15.1143 13.0672 15.1719 13.6616L15.2247 14.2032C15.4271 16.2968 15.5287 17.3432 14.9159 17.808C14.3031 18.2737 13.3815 17.8488 11.54 17.0008L11.0624 16.7816C10.5392 16.54 10.2776 16.42 10 16.42C9.72241 16.42 9.46081 16.54 8.93682 16.7816L8.46084 17.0008C6.61848 17.8488 5.6969 18.2728 5.08492 17.8088C4.47133 17.3432 4.57293 16.2968 4.77532 14.2032L4.82812 13.6624C4.88572 13.0672 4.91452 12.7696 4.82812 12.4944C4.74332 12.2184 4.55213 11.9952 4.17134 11.5504L3.82415 11.144C2.48258 9.57602 1.81219 8.79122 2.04579 8.03842C2.28018 7.28562 3.26416 7.06242 5.23211 6.61761L5.7409 6.50241C6.30009 6.37601 6.57928 6.31281 6.80408 6.14241C7.02807 5.97201 7.17207 5.71361 7.46006 5.19681L7.72245 4.72641Z"
          fill={fillColor}
        />
      </svg>
    </button>
  );
};
