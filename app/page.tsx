import SubscriptionList from "./components/SubscriptionList";
import SubscriptionSummary from "./components/SubscriptionSummary";
import TopBar from "./components/TopBar";

export default function Home() {
  const listData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="flex flex-col w-full px-6 md:px-12 py-6 items-center flex-grow-0 gap-3">
      <TopBar />
      <SubscriptionSummary />
      <h2 className="w-full text-start text-lg font-bold max-w-4xl">
        All subscriptions
      </h2>
      {listData && listData.map((item, key) => <SubscriptionList key={key} />)}
    </div>
  );
}
