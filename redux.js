import { combineReducers, createStore } from "redux";
const content = (state = { selected: "" }, action) => {
  switch (action.type) {
    case "SETITEM":
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};

const store = createStore(combineReducers({ content }));
export default store;
