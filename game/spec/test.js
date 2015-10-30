/**
 * Testing
 */
function Test(game) {
  this.game = game;
  this.assert = require('assert');
  this.shouldHave52CardsPerDeck();
  this.shouldProperlyPlayCardFromPlayer();
}

Test.prototype = {
  constructor: Test,
  shouldHave52CardsPerDeck: function() {
    var total = 0, playerIndex = 0;
    for (playerIndex in this.game.players) {
      total += this.game.players[playerIndex].hand.length;
    }
    this.assert.equal(total, 52, 'should have 52 cards per deck');
  },
  shouldProperlyPlayCardFromPlayer: function () {
    this.assert.equal(this.game.deck.collection, 0, 'deck should be empty');
    this.assert.equal(this.game.players[0].hand.length, Math.floor(52 / this.game.players.length), 'player should have proper number of cards');

    // Play first card
    var card = this.game.playCard(this.game.players[0]);
    this.assert.equal(this.game.players[0].hand.length, Math.floor(52 / this.game.players.length) - 1, 'player should one less card');
    this.assert.equal(this.game.deck.collection.length, 1, 'deck should contain first card');

    this.assert.equal(card, this.game.deck.collection[0], 'the proper players card should have been played');
  }
};

// new Test(game);
module.exports = Test;
