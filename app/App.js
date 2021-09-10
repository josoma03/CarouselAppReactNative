import React from 'react';
import { Carousel } from "./src/pages/Carousel";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/redux/reducers'
import ReduxThunk from 'redux-thunk'

export default function App() {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
  return (
    <Provider store={store}>
      <Carousel />
    </Provider>
  )
}