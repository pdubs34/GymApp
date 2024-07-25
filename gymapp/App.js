import React from 'react';
import { Provider } from 'react-redux';
import StackNavigator from './navigation/StackNavigator';
import store from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}
