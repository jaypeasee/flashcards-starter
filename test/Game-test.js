const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

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

  it('should start the game by creating cards', function() {
    game.start();
  })
});
