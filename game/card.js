function Card(suit, number) {
  this.suit = suit;
  this.number = number;
}

Card.prototype = {
  constructor: Card
};

var card = new Card();
console.log(card);
