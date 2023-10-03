import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { ConfigProvider, theme } from "antd";
import Auth from "./store/slices/Auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        components: {
          Card: {
            headerFontSize: 20,
            extraColor: "rgb(255, 255, 255)",
          },
        },
      }}
    >
      <BrowserRouter>
        <React.StrictMode>
          <Auth>
            <App />
          </Auth>
        </React.StrictMode>
      </BrowserRouter>
    </ConfigProvider>
  </Provider>
);
