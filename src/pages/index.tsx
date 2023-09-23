import useCount from "@/store/useCount";
import toast from "react-hot-toast";

export default function Home() {
  const { increaseCount, count } = useCount();

  return (
    <div className="text-white">
      <div className="flex">
        <button onClick={increaseCount}>카운트 증가</button>
      </div>
      {count}
      <button onClick={() => toast.success("hello world")}>toast test</button>
    </div>
  );
}
