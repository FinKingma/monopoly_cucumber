var assert = require('chai').assert

module.exports = function () {
  this.Given(/^Laura’s turn$/, (done) => {
    var Game = require('../../src/modules/game.js')
    this.game = new Game(['Laura', 'Bert'])
    done()
  })

  this.Given(/^Laura’s token is at a (.*)$/, (startingPosition, done) => {
    var Player = require('../../src/modules/player.js')
    this.laura = new Player('Laura', startingPosition)
    done()
  })

  this.When(/^Laura throws (.*) & (.*)$/, (dice1, dice2, done) => {
    this.game.executeTurn(dice1, dice2)
    done()
  })

  this.When(/^Laura throws (.*) in total$/, (sumOfDice, done) => {
    this.laura.move(sumOfDice)
    done()
  })

  this.When(/^Laura’s throws double 3 times in a row$/, (done) => {
    var Game = require('../../src/modules/game.js')
    this.game = new Game(['Laura'])
    this.game.executeTurn(1, 1)
    this.game.executeTurn(1, 1)
    this.game.executeTurn(1, 1)
    done()
  })

  this.Then(/^Laura’s token moves to a (.*)$/, (newPosition, done) => {
    assert.equal(newPosition, this.laura.currentPos, 'player is not on expected pos')
    done()
  })

  this.Then(/^Laura gets (.*)$/, (anotherTurn, done) => {
    assert.equal(this.game.currentPlayer === 0, anotherTurn === 'yes', 'player did not get another turn')
    done()
  })

  this.Then(/^Laura goes to jail$/, (done) => {
    assert.equal(this.game.players[0].inJail, true, 'Laura is not in jail')
    done()
  })
}
