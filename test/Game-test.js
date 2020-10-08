const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const data = require('../src/data');

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
    const prototypeQuestions = data.prototypeData;
    game.start();

    expect(game.currentRound.deck.cards).is.deep.equal(prototypeQuestions);

    game.currentRound.deck.cards.forEach((card, index) => {
      expect(game.currentRound.deck.cards[index]).to.be.an.instanceof(Card)
    });

    expect(game.currentRound.deck).to.be.an.instanceof(Deck);
    expect(game.currentRound).to.be.an.instanceof(Round);
  });
});
