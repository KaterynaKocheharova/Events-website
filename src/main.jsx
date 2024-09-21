import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { store, persistor } from "./redux/store.js";

import "modern-normalize";
import App from "./App.jsx";
import "./index.css";
import { PersistGate } from "redux-persist/es/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter>
        <ChakraProvider>
          <App />
          <Toaster />
        </ChakraProvider>
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
