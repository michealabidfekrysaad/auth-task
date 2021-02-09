import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import * as lazyLoading from "../routes/LazyLoading";
import Loader from "../component/Loader/Loader";
import PrivateRoute from "../routes/typesRoutes/PrivateRoute";
import PublicRoute from "../routes/typesRoutes/PublicRoute";

const Routes = () => {

  return (
    <Suspense fallback={<Loader />}>
      <main className="container-fluid mt-1">
        <section className="container-fluid mt-3">
          <Switch>
            <PrivateRoute path="/" exact component={lazyLoading.Home} />
            <PublicRoute path="/login" component={lazyLoading.Login} />
            <PublicRoute path="/register" component={lazyLoading.Register} />
          </Switch>
        </section>
      </main>
    </Suspense>
  );
};

export default Routes;
