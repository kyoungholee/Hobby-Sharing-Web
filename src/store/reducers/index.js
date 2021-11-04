import {combineReducers} from "redux";
import LoginReducer from './login';
import HomeReducer from "./home";

const RootReducer = combineReducers({
    LoginReducer,
    HomeReducer

})

export default RootReducer;


// 내가 만든 리듀서들을 root리듀서에 한곳에 모은것이다.!!!