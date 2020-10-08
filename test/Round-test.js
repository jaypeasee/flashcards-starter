const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', () => {
  let card1;
  let card2;
  let card3;
  let card4;
  let card5;
  let deck1;
  let deck2;
  let round1;
  let round2;

  beforeEach(() => {
    card1 = new Card(1, 'Who\'s Harry Potter\'s godfather?', ['Dumbledore', 'Sirius', 'Malfoy'], 'Sirius');

    card2 = new Card(2, 'What position in Quidditch does Harry Play?', ['seeker', 'beater', 'chaser'], 'seeker');

    card3 = new Card(3, 'Who\'s the Hogwarts Headmaster?', ['Voldemort', 'Dumbledore', 'Fudge'], 'Dumbledore');

    card4 = new Card(4, 'What\'s the town outside of Hogwarts?', ['Diagon Alley', 'Privet Drive', 'Hogsmeade'], 'Hogsmeade');

    card5 = new Card(5, 'Who told Harry he was a wizard?', ['Hagrid', 'Dudley', 'Snape'], 'Hagrid');

    deck1 = new Deck([card1, card2, card3]);
    deck2 = new Deck([card4, card5]);
    round1 = new Round(deck1);
    round2 = new Round(deck2);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round1).to.be.an.instanceof(Round);
  });

  it('should be able to have a deck', () => {
    expect(round1.deck.cards).to.deep.equal(deck1.cards);
  });

  it('should be able to have a different deck', () => {
    expect(round2.deck.cards).to.deep.equal(deck2.cards);
  });

  it('should be able to return the top card in the deck', () => {
    expect(round1.returnCurrentCard()).to.equal(card1);
  });

  it('should be able to return a different top card', () => {
    expect(round2.returnCurrentCard()).to.equal(card4);
  });

  it('should start out with no turns taken ', () => {
    expect(round1.turns).to.equal(0);
  });

  it('should start out with no incorrect guesses', () => {
    expect(round1.incorrectGuesses).to.deep.equal([]);
  });

  it('should be able to take a turn', () => {
    round1.takeTurn('Hogwarts');

    expect(round1.turns).to.equal(1);
  });

  it('should be able to take multiple turns', () => {
    round1.takeTurn('Hogwarts');
    round1.takeTurn('The Burrow');
    round1.takeTurn('Diagon Alley');

    expect(round1.turns).to.equal(3);
  });

  it('should remove the current card when a turn is taken', () => {
    round1.takeTurn('Hogwarts');

    expect(round1.deck.cards[0]).to.equal(card2);
  });

  it('should evaluate if the guess is correct', () => {
    expect(round1.takeTurn('Sirius')).to.equal(`correct!`);
  });

  it('should be able to evaluate if the guess is incorrect', () => {
    expect(round1.takeTurn('Snape')).to.equal(`incorrect!`);
  });

  it('should collect cards of incorrect guesses', () => {
    round1.takeTurn('Snape');
    round1.takeTurn('Lupin');
    round1.takeTurn('Ron');

    expect(round1.incorrectGuesses.length).is.deep.equal(3);
  });

  it('should store the ids of cards in the incorrect guess collection', () => {
    round2.takeTurn('Snape');

    expect(round2.incorrectGuesses[0]).to.equal(4)
  });

  it('should calculate the user\'s score', () => {
    round1.takeTurn('Sirius');
    round1.takeTurn('seeker');
    round1.takeTurn('Voldemort');

    expect(round1.calculatePercentCorrect()).is.equal(66);
  });

  it('should calculate a different score', () => {
    round2.takeTurn('Privet Drive');
    round2.takeTurn('Hagrid');

    expect(round2.calculatePercentCorrect()).is.equal(50);
  });
});
