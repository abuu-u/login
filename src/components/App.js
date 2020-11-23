import { Route, Router, Switch } from "react-router-dom";
import { AppRoute } from "../const";
import PrivateRoute from "./PrivateRoute";
import history from "../history";
import { useSelector } from "react-redux";
import { getRole } from "../reducer/login/selectors";
import Login from "./Login";
import MainLayout from "../layouts/MainLayout";

function App() {
  const role = useSelector(getRole);

  return (
    <Router history={history} >
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainLayout/>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <MainLayout>
            <Login />
          </MainLayout>
        </Route>
        <PrivateRoute
          path={`/:role`}
          role={role}
          render={(match) => {
            return (
              <MainLayout>
                <p>{match.params.role}</p>
              </MainLayout>
            );
          }}
        />
      </Switch>
    </Router>
  );
}

App.propTypes = {};

export default App;
