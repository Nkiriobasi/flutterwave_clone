import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Businesses from "./components/Businesses";
import Payment from "./components/Payment";
import Commerce from "./components/Commerce";

function App() {
  return (
    <main className="App">
      {/* <Navbar /> */}
      <Hero />
      <Businesses />
      <Payment />
      <Commerce />
    </main>
  );
}

export default App;
