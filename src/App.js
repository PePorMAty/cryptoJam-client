import { useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Routers from "./components/Routers";
import "./index.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";

function App() {
  const { pathname } = useLocation();
  const { isAuthenticated } = useSelector((state) => state.auth);

  switch (pathname) {
    case "/login":
      return <Login />;
    case "/register":
      return <Register />;
    default:
      return (
        <>
          {isAuthenticated ? (
            <>
              <div className="App">
                <header>header</header>
                <main>isAuthenticated</main>
              </div>
              <footer>footer</footer>
            </>
          ) : (
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
          )}
        </>
      );
  }
}

export default App;
