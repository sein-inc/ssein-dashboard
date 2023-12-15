import { applyMiddleware, combineReducers, compose, createStore, } from 'redux';
import PostsReducer from './reducers/PostsReducer';
import thunk from 'redux-thunk';
import { AuthReducer } from './reducers/AuthReducer';
import todoReducers from './reducers/Reducers';

// Redux toolkit imports
import { apiSlice } from './api/apiSlice';
import authSlice from './states/authSlice';


const middleware = applyMiddleware(thunk, apiSlice.middleware);

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    posts: PostsReducer,
    auth: AuthReducer,
    todoReducers,
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
});

export const store = createStore(reducers, composeEnhancers(middleware));
