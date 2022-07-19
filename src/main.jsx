import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.css";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import { store } from "./app/store";
let persistor = persistStore(store);
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
     <React.StrictMode>
          <Provider store={store}>
               <BrowserRouter>
                    <PersistGate loading={"null"} persistor={persistor}>
                         <App />
                    </PersistGate>
               </BrowserRouter>
          </Provider>
     </React.StrictMode>,
);
