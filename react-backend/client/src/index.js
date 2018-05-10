import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(<App />, document.getElementById('root'));


ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      document.getElementById("root")
    );
registerServiceWorker();

