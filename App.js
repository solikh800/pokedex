import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import navigationThems from './App/navigation/navigationThems';
import store from './App/store/index';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

import StartNavigator from './App/navigation/StartNavigator';

const peristedStore = persistStore(store);

const App = props => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={peristedStore}>
        <NavigationContainer theme={navigationThems}>
          <StartNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
