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

module.exports = Card;
