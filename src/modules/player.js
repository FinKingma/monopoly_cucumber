function Player (name, startingPos = 1) {
  this.name = name
  this.currentPos = parseInt(startingPos)
  this.inJail = false
  this.move = (num) => {
    this.currentPos = this.currentPos + parseInt(num)
    if (this.currentPos > 40) this.currentPos -= 40
  }
}

module.exports = Player
