import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Auth from "./store/slices/Auth";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <ConfigProvider
          theme={{
            components: {
              Radio: {
                buttonBg: "#1c1c1c",
                buttonColor: "rgba(255, 255, 255, 0.88)",
                buttonSolidCheckedBg:
                  "linear-gradient(101deg, #1F8EBE -5.36%, #440495 29.46%, #440495 56.03%, #B102CD 81.92%)",
                buttonSolidCheckedHoverBg:
                  "linear-gradient(101deg, #1F8EBE -5.36%, #440495 29.46%, #440495 56.03%, #B102CD 81.92%)",
              },
            },
          }}
        >
          <Auth>
            <App />
          </Auth>
        </ConfigProvider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
