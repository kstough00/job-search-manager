import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import positionReducer from "./reducers/positionReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  positions: positionReducer,
}); // lets us delegate different pieces of state to separate reducer functions

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
