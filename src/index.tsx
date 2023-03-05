import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './modules/app/infrastructure/ui/components/App';
import { Provider } from './modules/app/infrastructure/ui/components/StoreProvider';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
