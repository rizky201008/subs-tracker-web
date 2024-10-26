import { Container } from "../components/Container";
import { FormAdd } from "./components/FormAdd";
import TopBar from "./components/TopBar";

export default function AddPage() {
  return (
    <Container>
      <TopBar />
      <FormAdd />
    </Container>
  );
}
