import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";

import store from "../../store/index";
import Routes from "../../routes/Routes";

const AppComp = () => {
  return (
    <Provider store={store}>
      <div>
        <Router>
        <Navbar />
          <Routes />
        </Router>
      </div>
    </Provider>
  );
};

export default AppComp;
