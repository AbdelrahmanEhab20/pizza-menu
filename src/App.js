import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import { pizzaData } from "./data/pizzasData";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu pizzaData={pizzaData} />
      <Footer />
    </div>
  );
}

export default App;
