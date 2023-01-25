import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from 'serviceWorker';
import App from 'App';
import { store } from 'store';

import 'assets/scss/style.scss';
import config from './config';

export const queryClient = new QueryClient();

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={config.basename}>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
