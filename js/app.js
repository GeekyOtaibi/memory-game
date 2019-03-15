const symbols = [
  "fa-diamond",
  "fa-paper-plane-o",
  "fa-anchor",
  "fa-bolt",
  "fa-cube",
  "fa-leaf",
  "fa-bicycle",
  "fa-bomb"
];
const allCards = symbols.concat(symbols);
let shuffledCards;

printShuffledCards(); //* printShuffledCards() will be excuted once the JS file loaded

var timer = new easytimer.Timer();
timer.start();
timer.addEventListener("secondsUpdated", function(e) {
  $(".timer-content").html(timer.getTimeValues().toString());
});

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function printShuffledCards() {
  shuffledCards = shuffle(allCards);
  let html_to_insert = "";
  for (let card of shuffledCards) {
    html_to_insert += `<li class="card">
        <i class="fa ${card}"></i>
    </li>`;
  }
  $(".deck").html(html_to_insert);
  startGame();
}

function incorrectAnimation(card) {
  card
    .removeClass("show open")
    .addClass("incorrect")
    .delay(1500)
    .queue(function() {
      $(this).removeClass("incorrect");
      $(this).dequeue(); //! .dequeue() need to be addressed otherwise thisfunction will excute once.
    });
}

function startGame() {
  let holder, selectedCard;
  let movesCount = 0;
  let cardsRemained = 16;
  let starsCount = 3;

  $(".card").click(function() {
    selectedCard = $(this);
    selectedCard.addClass("show open");
    if (holder) {
      //? if the first card in each move does not assigned, then continoue *else(line 84) assign first card to be holded for the next card.
      movesCount++;
      $(".moves").html(movesCount);
      if (
        selectedCard.children("i").hasClass(holder.children("i").attr("class"))
      ) {
        //? if selected card's child has class of same of holded card then they are matched, *else(line 71) show incorrect match
        holder.removeClass("show open").addClass("match");
        selectedCard.removeClass("show open").addClass("match");
        cardsRemained = cardsRemained - 2;
      } else {
        //? show incorrect match
        incorrectAnimation(selectedCard);
        incorrectAnimation(holder);
      }
      holder.removeClass("disabled");
      holder = null; //* after comparing the cards, holder need to be null to hold new card for the next move.
      if (movesCount == 16 || movesCount == 21) {
        //? condition of decrease number of stars.
        starsCount--;
        $(".fa-star")
          .first()
          .addClass("fa-star-o")
          .removeClass("fa-star");
      }
      if (cardsRemained == 0) {
        //? condition for finishing the game.
        let message = `congratulation!\nScore:\nMoves: ${movesCount}\nTime: ${timer
          .getTimeValues()
          .toString()}\nStars: ${starsCount}\nTo restart please select Ok.`;
        //? if user select okey it will restart overwise only stop the timer
        if (window.confirm(message)) {
          location.reload();
        } else {
          timer.stop();
          $(".card").addClass('disabled');
        }
      }
    } else {
      //? assign first card to be holded for the next card.
      holder = $(this);
      holder.addClass('disabled');
    }
  });
}
