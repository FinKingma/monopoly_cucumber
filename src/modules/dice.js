var dice = {}

dice.throwDice = () => {
  var dice = Math.floor(Math.random() * 6 + 1)
  return dice
}

module.exports = dice
