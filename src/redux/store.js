import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Reducer from './reducers';

let store;

store = createStore(Reducer,
    compose(applyMiddleware(thunk))
);


export {store};
