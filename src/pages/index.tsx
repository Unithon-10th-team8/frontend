import useCount from "@/store/useCount";

export default function Home() {
  const { increaseCount, count } = useCount();

  return (
    <>
      <NotificationBelt />
    </>
  );
}
