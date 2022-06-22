import React from 'react';
import {Provider} from 'react-redux';
import {ActivityIndicator} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';
import {Feed} from './src/screens/Feed';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<ActivityIndicator size={'large'} color={'#000'} />}
        persistor={persistor}>
        <Feed />
      </PersistGate>
    </Provider>
  );
};

export default App;
