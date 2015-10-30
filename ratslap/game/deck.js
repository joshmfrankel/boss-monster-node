var Card = require('./card.js');
var _    = require('underscore');

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

module.exports = Deck;
