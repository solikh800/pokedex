import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {pokemonReducer} from './reducers/dataPokemonReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // blacklist: [], // navigation will not be persisted
};

const rootReducer = combineReducers({
  pokemonReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
