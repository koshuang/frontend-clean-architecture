import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@app/infrastructure/ui/components/App';
import { Provider } from '@app/infrastructure/ui/components/StoreProvider';

import './index.css';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
