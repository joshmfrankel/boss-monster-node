var Deck = require('./deck.js');

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
    }
  },
  playCard: function(player) {
    cardToDeck = player.playNextCard();
    player.removeCardFromHand();
    this.deck.addCard(cardToDeck);
    return cardToDeck;
  }
};

module.exports = Game;
