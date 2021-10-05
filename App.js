import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import navigationThems from './App/navigation/navigationThems';
import store from './App/store/index';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

import StartNavigator from './App/navigation/StartNavigator';
import Detailes from './App/screens/Detailes';

const peristedStore = persistStore(store);

const App = props => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={peristedStore}>
        <NavigationContainer theme={navigationThems}>
          <StartNavigator />
          {/* <Detailes /> */}
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
