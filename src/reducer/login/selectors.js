import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.LOGIN;

const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

const getRole = (state) => {
  return state[NAME_SPACE].role;
};

export {getAuthorizationStatus, getRole};