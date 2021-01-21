/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.2.0";
import "assets/demo/demo.css";
import "assets/css/esthy-plume-navbar.css";
import "assets/css/esthy-plume-main.css";
import "assets/css/esthy-plume-editor-style.css";
import "assets/css/esthy-plume-about-style.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "assets/css/esthy-plume-text-editor-style.css";

import "./variables/main";

import App from "layouts/App";
import configureStore from "store/configureStore";
import { Provider } from "react-redux";

const hist = createBrowserHistory();
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
