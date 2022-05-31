import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Businesses from "./components/Businesses";
import Payment from "./components/Payment";
import Commerce from "./components/Commerce";
import Customer from "./components/Customer";
import DarkCard from "./components/DarkCard";
import Apis from "./components/Apis";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Hero />
      <Customer />
      <Businesses />
      <Payment />
      <Commerce />
      <DarkCard />
      <Apis />
    </main>
  );
}

export default App;
