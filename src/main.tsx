import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import App from "./App.tsx";
import "./index.css";
import {ThemeProvider} from "./context/ThemeContext";
import { store } from "./store/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ThemeProvider>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </ThemeProvider>
);
