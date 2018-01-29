var throwDice = require('./dice').throwDice
var Player = require('./player')

function Game (names) {
  this.players = []
  for (var name of names) {
    this.players.push(new Player(name))
  }

  this.currentPlayer = 0
  this.turn = 0

  this.throw = () => {
    var dice1 = throwDice()
    var dice2 = throwDice()
    this.executeTurn(dice1, dice2)
  }

  this.executeTurn = (dice1, dice2) => {
    this.players[this.currentPlayer].move(dice1 + dice2)
    if (dice1 !== dice2) {
      this.turn = 0
      this.currentPlayer++
    } else {
      this.turn++
      if (this.turn >= 3) {
        this.players[this.currentPlayer].inJail = true
      }
    }
    if (this.currentPlayer >= this.players.length) this.currentPlayer = 0
  }
}

module.exports = Game
