import useCount from "share/store/useCount";

export default function Home() {
  const { increaseCount, count } = useCount();

  return (
    <div className="text-red-500 bg-white">
      <div className="flex">
        <button onClick={increaseCount}>카운트 증가</button>
      </div>
      {count}
    </div>
  );
}
