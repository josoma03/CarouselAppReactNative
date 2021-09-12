import React from 'react';
import MainPage from "./src";
import { Provider } from 'react-redux';
import reduxStore from './src/redux/store/store'
import { PersistGate } from 'redux-persist/integration/react'

export default function App() {
  //Redux Persist takes your Redux state object and saves it to persisted storage. Then on app launch it retrieves this persisted state and saves it back to redux.
  const { store, persistor } = reduxStore()
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainPage />
      </PersistGate>
    </Provider>
  )
}