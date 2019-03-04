import { combineReducers } from "redux";
import SquaresReducer from "./SquaresReducer";
import XReducer from "./XReducer";

const rootReducer = combineReducers({
    squares: SquaresReducer,
    xIsNext: XReducer
});

export default rootReducer;