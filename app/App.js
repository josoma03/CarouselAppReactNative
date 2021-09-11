import React from 'react';
import MainPage from "./src";
import { Provider } from 'react-redux';
import store from './src/redux/store/store'

export default function App() {

  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  )
}