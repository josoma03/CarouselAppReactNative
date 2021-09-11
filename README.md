# Carousel App

Requirements:
- Build a carousel.
- By default display 3 blocks at once.
- Navigation is made with next and previous buttons.
- Next button should be disabled, if the user is at the very end of the carousel.
- Previous button should be disabled, if the user is at the very beginning of the carousel. - Clicking on next/previous buttons shows next/prev 3 carousel blocks accordingly.
- The source of carousel block is endpoint on server that return following JSON:
  [{title: "First Block", image: [url1]},{title: "Second Block", image: [url2]}]
- To persist the last position of the carousel, so when the app closes (is not running in memory) and opens again we need to start the carousel in that stored position  
