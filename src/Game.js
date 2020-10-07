const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Deck')

class Game {
  constructor() {

  }

  start() {
    this.createRound();
  }

  createRound() {
    let pileOfCards = []
    let newCard;
    prototypeQuestions.forEach(card => {
      newCard = new Card(card.id, card.question, card.answers, card.correctAnswer);
      pileOfCards.push(newCard);
    });
    let deck = new Deck(pileOfCards);
    let round = new Round(deck);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
