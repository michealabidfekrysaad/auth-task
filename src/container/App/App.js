import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import history from '../../utils/history';


import store from "../../store/index";
import Routes from "../../routes/Routes";


const AppComp = () => {
  return (
    <Provider store={store}>
      <div>
        <Router history={history}>
        <Navbar />
          <Routes />
        </Router>
      </div>
    </Provider>
  );
};

export default AppComp;
