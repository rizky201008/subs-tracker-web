import { IoIosAdd } from "react-icons/io";

export default function SubscriptionSummary() {
  return (
    <div className="card shadow-lg w-full max-w-4xl">
      <div className="card-body rounded-lg bg-gradient-to-br from-primary to-secondary flex flex-row justify-between items-center">
        <div className="first">
          <p className="text-lg font-semibold">Monthly Expenses</p>
          <p className="text-3xl font-bold">100000 USD</p>
        </div>
        <div className="second">
          <div className="bg-white p-3 rounded-full shadow-lg">
            <IoIosAdd size={20} className="cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  );
}
