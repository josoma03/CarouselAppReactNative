# Carousel App

Autor: Jhonattan Solarte Martinez
App: Carousel React Native, Redux, Redux-persist

Installation

1. Clone repository:
    https://github.com/josoma03/CarouselAppReactNative.git
2. From the terminal, enter the folder: 'app
    cd app
3. Install the project dependencies
    yarn install
    npx pod-install
    

Configuration

    The config.js file allows you to configure the number of cards to display in the carousel, by default there are 3, this file is located in src/config/config.js.
    
Deploy on Android

    Execute the following command
    yarn android

Deploy on ios

    Execute the following command
    yarn ios


Requirements:

- Build a carousel.
- By default display 3 blocks at once.
- Navigation is made with next and previous buttons.
- Next button should be disabled, if the user is at the very end of the carousel.
- Previous button should be disabled, if the user is at the very beginning of the carousel. - Clicking on next/previous buttons shows next/prev 3 carousel blocks accordingly.
- The source of carousel block is endpoint on server that return following JSON:
  [{title: "First Block", image: [url1]},{title: "Second Block", image: [url2]}]
- To persist the last position of the carousel, so when the app closes (is not running in memory) and opens again we need to start the carousel in that stored position  


#Showcase
iOS


https://user-images.githubusercontent.com/8276103/132967118-9eba25e7-0c22-4742-b659-2c6d700098fc.mp4


