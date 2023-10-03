import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Routers from "./components/Routers";
import "./index.css";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const { pathname } = useLocation();
  switch (pathname) {
    case "/login":
      return <Login />;
    case "/register":
      return <Register />;
    default:
      return (
        <>
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
        </>
      );
  }
}

export default App;
