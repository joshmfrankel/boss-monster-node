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

module.exports = Player;
