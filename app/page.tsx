import { Container } from "./components/Container";
import SubscriptionList from "./components/SubscriptionList";
import SubscriptionSummary from "./components/SubscriptionSummary";
import TopBar from "./components/TopBar";

export default function Home() {
  return (
    <Container>
      <TopBar />
      <SubscriptionSummary />
      <h2 className="w-full text-start text-lg font-bold max-w-4xl">
        All subscriptions
      </h2>
        <SubscriptionList />
    </Container>
  );
}
