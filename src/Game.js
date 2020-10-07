const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Deck')

class Game {
  constructor() {
    this.currentRound = {};
  }

  start() {
    let pileOfCards = [];
    let newCard;
    prototypeQuestions.forEach(card => {
      newCard = new Card(card.id, card.question, card.answers, card.correctAnswer);
      pileOfCards.push(newCard);
    });
    let deck = new Deck(pileOfCards);
    this.currentRound = new Round(deck);
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
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
