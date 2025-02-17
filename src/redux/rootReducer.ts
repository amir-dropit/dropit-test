import { combineReducers } from "@reduxjs/toolkit";

import { cartReducer } from "../modules/cart";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export { rootReducer };
