import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

// ReactDOM.render(<App />, document.getElementById('root'));


ReactDOM.render(
      <CookiesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CookiesProvider>,
      document.getElementById("root")
    );
registerServiceWorker();


