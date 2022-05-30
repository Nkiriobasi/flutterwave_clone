import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Businesses from "./components/Businesses";
import Payment from "./components/Payment";
import Commerce from "./components/Commerce";
import Customer from "./components/Customer";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Hero />
      <Customer />
      <Businesses />
      <Payment />
      <Commerce />
    </main>
  );
}

export default App;
