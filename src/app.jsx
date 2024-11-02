import { useEffect } from "react";
import Header from "~/components/Header";
import { getTheme, setTheme } from "~/utils/theme";
import Button from "~/components/ui/Button";

function App() {
  useEffect(() => {
    setTheme(getTheme());
  }, []);
  return (
    <div>
      <Header />
      {/* <Ranking /> */}
      <Button color="success" size="lg">
        primary button
      </Button>
      <Button variant="danger">Danger button</Button>
      <Button variant="success">Success button</Button>
      <Button variant="warning">Warning button</Button>
      <Button variant="info">Info button</Button>
      <Button variant="neutral">neutral button</Button>
      <Button variant="secondary">secondary button</Button>
      <Button variant="accent">btn-accent button</Button>

      <button className="btn btn-info">Accent</button>
    </div>
  );
}

export default App;
