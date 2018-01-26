var assert = require('chai').assert

module.exports = function () {
  this.Given(/^player’s token is at a (.*)$/, (startingPosition, done) => {
    this.player = require('../../modules/player.js')
    this.player.setStartingPos(startingPosition)
    done()
  })
  this.When(/^player throws (.*)$/, (sumOfDice, done) => {
    this.player.move(sumOfDice)
    done()
  })

  this.Then(/^player’s token moves to a (.*)$/, (newPosition, done) => {
    assert.equal(newPosition, this.player.currentPos, 'player is not on expected pos')
    done()
  })
}
