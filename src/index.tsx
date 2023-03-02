import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./modules/app/infrastructure/ui/components/App";
import { Provider } from './modules/app/infrastructure/ui/components/StoreProvider';

ReactDOM.render(
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
