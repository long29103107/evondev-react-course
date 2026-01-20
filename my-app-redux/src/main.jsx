import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App.jsx';
import { Provider } from 'react-redux';
// import store from '@/redux/configureStore.jsx';
import { initTheme } from "./theme";
import store from '@/redux-toolkit/configureStore.jsx';

initTheme();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
