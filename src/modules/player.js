var player = {}

player.currentPos = 1

player.setStartingPos = (pos) => {
  player.currentPos = parseInt(pos)
}

player.move = (num) => {
  player.currentPos = player.currentPos + parseInt(num)
  if (player.currentPos > 40) player.currentPos = 1
}

module.exports = player
