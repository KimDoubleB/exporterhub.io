import { combineReducers } from "redux";
import exporterReducer from "./exporterReducer";
import categoryReducer from "./categoryReducer";
import tokenReducer from "./tokenReducer";
import loginReducer from "./loginReducer";
// import userReducer from "./userReducer";
import unforkReducer from "./unforkReducer";

export default combineReducers({
  exporterReducer,
  categoryReducer,
  tokenReducer,
  loginReducer,
  // userReducer,
  unforkReducer,
});
