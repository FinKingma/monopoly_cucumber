var dice = {}

dice.throwDice = () => {
  var dice1 = Math.round(Math.random() * 6 + 1)
  var dice2 = Math.round(Math.random() * 6 + 1)
  return dice1 + dice2
}

module.exports = dice
