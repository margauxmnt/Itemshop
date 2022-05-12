import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { BasketContextProvider } from './store/basket-context'


ReactDOM.render(
  <BasketContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </BasketContextProvider>,
  document.getElementById("root")
);


