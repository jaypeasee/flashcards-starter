const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let card1;
  let card2;
  let turn1;
  let turn2;
  let turn3;

  beforeEach(() => {
    card1 = new Card(1, 'Who\'s the Hogwarts Headmaster?', ['Voldemort', 'Harry Potter', 'Dumbledore'], 'Dumbledore');

    card2 = new Card(2, 'Who\'s Harry\'s least favorite professor', ['Dumbledore', 'Snape', 'McGonagall'], 'Snape');

    turn1 = new Turn('Dumbledore', card1);
    turn2 = new Turn('Voldemort', card1);
    turn3 = new Turn('Snape', card2);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn1).to.be.an.instanceof(Turn);
  });

  it('should keep a guess', () => {
    expect(turn1.guess).to.equal('Dumbledore');
  });

  it('should be able to keep a different guess', () => {
    expect(turn2.guess).to.equal('Voldemort');
  });

  it('should keep a guess as a string', () => {
    const turn = new Turn(7);

    expect(turn.guess).to.equal('7');
  });

  it('should use a card', () => {
    expect(turn1.card).to.equal(card1);
  });

  it('should be able to use a different card', () => {

    expect(turn3.card).to.equal(card2);
  });

  it('should be able to return the guess', () => {
    expect(turn1.returnGuess()).to.equal('Dumbledore');
  });

  it('should be able to return a different guess', () => {
    expect(turn2.returnGuess()).to.equal('Voldemort');
  });

  it('should be able to return the card', () => {
    expect(turn1.returnCard()).to.equal(card1);
  });

  it('should be able to return a different card', () => {
    expect(turn3.returnCard()).to.equal(card2);
  });

  it('should evaluate true if the guess is correct', () => {
    expect(turn1.evaluateGuess()).to.equal(true);
  });

  it('should evaluate false if the guess is incorrect', () => {
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should give feedback if a guess is correct', () => {
    expect(turn1.giveFeedback()).to.equal('correct!');
  });

  it('should give feedback if a guess is incorrect', () => {
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });
});
