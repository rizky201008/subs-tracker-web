"use client";
import { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { Loading } from "./Loading";

export default function SubscriptionSummary() {
  const [loading, setLoading] = useState(false);
  const handleAdd = async () => {};
  const getTotalExpense = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false );
    }, 3000);
  };

  useEffect(() => {
    getTotalExpense();
  }, []);

  return (
    <div className="card shadow-lg w-full max-w-4xl">
      <div className="card-body rounded-lg bg-gradient-to-br from-primary to-secondary flex flex-row justify-between items-center">
        <div className="first">
          <p className="text-lg font-semibold">Monthly Expenses</p>
          {loading ? (
            <Loading size={"md"} type={2} />
          ) : (
            <p className="text-3xl font-bold">100000 USD</p>
          )}
        </div>
        <div className="second">
          <div
            className="bg-white p-3 rounded-full shadow-lg cursor-pointer"
            onClick={handleAdd}
          >
            <IoIosAdd size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
