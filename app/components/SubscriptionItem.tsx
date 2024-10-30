export const SubscriptionItem = ({ data }: { data: number }) => {
  return (
    <div className="card bg-[#EFDB91] w-full max-w-4xl shadow-lg">
      <div className="card-body">
        <h2 className="card-title">Netflix</h2>
        <p>100 USD {"(Monthly)"}</p>
      </div>
    </div>
  );
};
