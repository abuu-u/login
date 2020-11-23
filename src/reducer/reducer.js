import {combineReducers} from "redux";
import {reducer as login} from "./login/login.js";
import NameSpace from "./name-space.js";


export default combineReducers({
  [NameSpace.LOGIN]: login,
});