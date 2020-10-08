const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game();
  })

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should keep track of the round', function() {
    game.start();

    expect(game.currentRound).to.be.an.instanceof(Round);
  });
});
