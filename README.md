# Memory Game Project

## Disclaimer
The project design is downloaded from Udacity front-end course.
This repo has changes made to the code for interaction and responsiveness which is the purpose of this lesseon.

## Requirments
* jQuery required to be mentioned in the HTML or in JavaScript's file if you will use it in Node.js
* the project may not support lagacy browsers.

## Getting Started
You can download the game by clone the repo or download it as zip file by clicking on green button "Clone or Download".
After that, to start the game simply open Index.html with your browser of choice.

## Development

### Global variables
* Array __allCards__: all possible cards with their pairs.
* Array __shuffledCards__: all possible cards with their pairs after it shuffled.

### Javascript Functions
__these functions will be found in js/app.js__

* __printShuffledCards()__
this function print the cards to the html after allCards array been shuffled.

* __incorrectAnimation(Object card)__
this function change the css class of the card to show incorrect choice animation.
this function wrote with jQuery synax.

* __startGame()__
this function is where the rules are coded. this function has 5 variables need to be listed.
- Object __holder__: first selected card in each move.
- Object __selectedCard__: second selected card in each move.
- Integer __movesCount__: number of moves where each two card is counted as one move.
- Integer __cardRemained__: number of cards remained to be matched in the game.
- Integer __starsCount__: number of stars before complete the game where it will decrease if reached certain number of moves.