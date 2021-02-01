import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from "../../store/index";
import Navbar from "../../component/Navbar/Navbar";
import Loader from "../../component/Loader/Loader";
import PrivateRoute from "../../component/PrivateRoute/PrivateRoute";
// import { useSelector } from "react-redux";


const Login = lazy(() => import("../Login/Login"));
const Register = lazy(() => import("../Register/Register"));
const Home = lazy(() => import("../Home/Home"));

const AppComp = () => {

  return (
    <Provider store={store}>
      <div>
        <Router>
          <Suspense fallback={<Loader />}>
            <main className="container-fluid mt-1">
              <Navbar />
              <section className="container-fluid mt-3">
                <Switch>
                  <PrivateRoute path="/" exact component={Home} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  {/* <Route path="/logout" />  */}
                </Switch>
              </section>
            </main>
          </Suspense>
        </Router>
      </div>
    </Provider>
  );
};

export default AppComp;
