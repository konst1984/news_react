import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import BaseLayout from "./layouts/BaseLayout";
import { store } from "./appStore";
import './index.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ThemeProvider>
      <React.StrictMode>
        <Provider store={store}>
          <BaseLayout />
        </Provider>
      </React.StrictMode>
    </ThemeProvider>
);