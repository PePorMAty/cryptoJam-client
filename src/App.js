import { useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Routers from "./components/Routers";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import AuthorizedApp from "./pages/authorizedPages/AuthorizedApp";

import "./index.css";

function App() {
  const { pathname } = useLocation();
  const { isAuthenticated } = useSelector((state) => state.auth);

  switch (pathname) {
    case "/login":
      if (isAuthenticated) {
        return <AuthorizedApp />;
      } else {
        return <Login />;
      }

    case "/register":
      if (isAuthenticated) {
        return <AuthorizedApp />;
      } else {
        return <Register />;
      }
    default:
      return (
        <>
          {isAuthenticated ? (
            <AuthorizedApp />
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
