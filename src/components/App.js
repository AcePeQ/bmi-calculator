import Header from "./Header";
import Main from "./Main";
import BMICalculator from "./BMICalculator";

export default function App() {
  return (
    <div className="app">
      <Header />

      <Main>
        <BMICalculator />
      </Main>
    </div>
  );
}
