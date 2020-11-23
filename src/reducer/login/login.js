import {LOCAL_STORAGE_LOGIN_TOKEN, LOCAL_STORAGE_USER_ROLE } from "../../const";

const initialState = {
  role: null,
};

const ActionType = {
  LOAD_ROLE: `LOAD_ROLE`,
};

const ActionCreator = {
  loadRole: (role) => {
    return {
      type: ActionType.LOAD_ROLE,
      payload: role,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_ROLE:
      return {...state, role: action.payload};
    default:
      return state;
  }
};

const Operation = {
  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      login: authData.login,
      pass: authData.password,
    })
      .then((res) => {
        localStorage.setItem(LOCAL_STORAGE_LOGIN_TOKEN, res.data.token);
        localStorage.setItem(LOCAL_STORAGE_USER_ROLE, res.data.user.status);
        dispatch(ActionCreator.loadRole(res.data.user.status));
      })
      .catch((err) => {
        throw err;
      });
  },
  logout: () => (dispatch, getState, api) => {
    localStorage.removeItem(LOCAL_STORAGE_LOGIN_TOKEN);
    localStorage.removeItem(LOCAL_STORAGE_USER_ROLE);
    dispatch(ActionCreator.loadRole(null));
  }
};

export {
  ActionCreator,
  ActionType,
  reducer,
  Operation,
};