var _ = require('underscore');

// Constructor
function Deck() {
  this.suits      = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];
  this.numbers    = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
  this.collection = [];
  this.build().shuffle();
}

Deck.prototype = {
  constructor: Deck,
  shuffle: function() {
    // Fisher–Yates
    var m = this.collection.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = this.collection[m];
      this.collection[m] = this.collection[i];
      this.collection[i] = t;
    }

    return this;
  },
  build: function() {
    var suitIndex, numberIndex;
    for (suitIndex in this.suits) {
      for (numberIndex in this.numbers) {
        this.collection.push(new Card(this.numbers[numberIndex], this.suits[suitIndex]));
      }
    }
    return this;
  },
  addCard: function (card) {
    this.collection.push(card);
  },
  isIdenticalCard: function(card1, card2) {
    return _.isEqual(card1, card2);
  }
};

/**
 * Card Class
 * @param {[type]} suit   [description]
 * @param {[type]} number [description]
 */
function Card(number, suit) {
  this.suit = suit;
  this.number = number;
}

Card.prototype = {
  constructor: Card,
  print: function() {
    return this.number + ' of ' + this.suit;
  }
};

/**
 * Player
 * @param {[type]} name [description]
 */
function Player(name) {
  this.name = name;
  this.hand = []; // a collection of cards
}

Player.prototype = {
  constructor: Player,
  addCardToHand: function(card) {
    this.hand.push(card);
  },
  playNextCard: function () {
    this.showNextCard();
    return this.hand[0];
  },
  removeCardFromHand: function() {
    this.hand.shift(); // Remove from hand and place back in deck
  },
  showNextCard: function() {
    console.log(this.name + ' played the ' + this.hand[0].print());
  }
};

/**
 * Game
 * @param {[type]} players [description]
 */
function Game(players) {
  this.players = players;
  this.deck = new Deck();
  this.deal();
}

Game.prototype = {
  constructor: Game,
  deal: function() { // deal cards 1 to each player alternating players
    var cardIndex, playerIndex = 0;
    var deckCollection = this.deck.collection.slice(0); // Pass array by value to prevent overwriting of elements

    // Deal cards to each player
    for (cardIndex in deckCollection) {
      // Make sure that players recieve 1 card in alternating order
      playerIndex = (playerIndex >= (this.players.length - 1) ? playerIndex = 0 : playerIndex+=1);

      this.players[playerIndex].addCardToHand(deckCollection[cardIndex]);
      this.deck.collection.shift(); // Remove top card from deck
      //console.log('Class Deck: ' + this.deck.collection.length);
      //console.log('Ref Deck: ' + deckCollection.length);
    }
  },
  playCard: function(player) {
    cardToDeck = player.playNextCard();
    player.removeCardFromHand();
    this.deck.addCard(cardToDeck);
  }
};


var player1 = new Player('josh');
var player2 = new Player('megan');
var player3 = new Player('ripley');
var game    = new Game([player1, player2, player3]);

console.log(player1.hand);
console.log(game.deck.collection);
game.playCard(player1);
console.log(player1.hand);
console.log(game.deck.collection);

// console.log(player1);
// console.log(player2);
// console.log(player3);
// console.log(player1.hand.length + player2.hand.length + player3.hand.length);



// quit;
// var temp = new Deck();
// var player1, player2;yer
// temp.build();
// console.log(temp.collection);
// temp.shuffle();
// console.log(temp.collection);
// temp.isIdenticalCard(temp.collection[1], temp.collection[1]);
