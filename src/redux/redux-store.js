import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"; 
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import bestFriendsReducer from './bestFriends-reducer';
import usersReducer from './usersReducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    bestFriends: bestFriendsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;


export default store;