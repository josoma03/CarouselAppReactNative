import React from 'react';
import CarouselPage from "./src/pages/CarouselPage";
import { Provider } from 'react-redux';
import store from './src/redux/store/store'

export default function App() {

  return (
    <Provider store={store}>
      <CarouselPage />
    </Provider>
  )
}