import { useRef } from "react";
import { useDispatch } from "react-redux";
import { AppRoute } from "../const";
import history from "../history";
import { Operation } from "../reducer/login/login";
import "./login.css";

function Login() {
  const dispatch = useDispatch();
  const login = useRef();
  const password = useRef();

  return (
    <div className="form-container">
      <form
        className="form"
        onSubmit={(evt) => {
          evt.preventDefault();
          dispatch(Operation.login({ login: login.current.value, password: password.current.value }))
            .then(() => history.push(AppRoute.ROOT));
        }}
      >
        <label className="form__label" for="login">
          Name
          <input
            className="form__input input"
            type="text"
            id="login"
            name="login"
            ref={login}
          />
        </label>
        <label className="form__label" for="password">
          Password
          <input
            className="form__input input"
            type="password"
            id="password"
            name="password"
            ref={password} />
        </label>
        <button className="form__input button" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;