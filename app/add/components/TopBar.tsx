"use client";
import { useRouter } from 'next/navigation'
import { FaArrowLeft } from "react-icons/fa";

export default function TopBar() {
  let router = useRouter();
  return (
    <div className="bg-white shadow-lg rounded-lg p-2 md:z-10 w-full max-w-4xl flex flex-col gap-3 flex-grow-0">
      <div className="flex flex-row justify-start items-center w-full">
        <button className="btn btn-ghost rounded-full" onClick={router.back}>
          <FaArrowLeft />
        </button>
        <h1 className="text-lg font-bold">Add new subcription</h1>
      </div>
    </div>
  );
}
