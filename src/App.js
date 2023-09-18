import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Routers from "./components/Routers";
import "./index.css";

function App() {
  return (
    <>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Routers />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
