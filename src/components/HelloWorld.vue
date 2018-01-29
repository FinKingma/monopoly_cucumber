<template>
  <div>
    <div id="dice" v-on:click="rollDice">
      current player: {{ game.players[game.currentPlayer].name }}
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" stroke-width="2"><g stroke-width="2" transform="translate(0, 0)"><polyline data-cap="butt" fill="none" stroke="#444444" stroke-width="2" stroke-miterlimit="10" points="47,61 47,17 3,17 " stroke-linejoin="miter" stroke-linecap="butt"></polyline> <line data-cap="butt" fill="none" stroke="#444444" stroke-width="2" stroke-miterlimit="10" x1="47" y1="17" x2="61" y2="3" stroke-linejoin="miter" stroke-linecap="butt"></line> <polygon fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="47,61 61,47 61,3 17,3 3,17 3,61 " stroke-linejoin="miter"></polygon> <circle data-color="color-2" fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" cx="25" cy="39" r="2" stroke-linejoin="miter"></circle> <circle data-color="color-2" fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" cx="15" cy="29" r="2" stroke-linejoin="miter"></circle> <circle data-color="color-2" fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" cx="35" cy="29" r="2" stroke-linejoin="miter"></circle> <circle data-color="color-2" fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" cx="15" cy="49" r="2" stroke-linejoin="miter"></circle> <circle data-color="color-2" fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" cx="35" cy="49" r="2" stroke-linejoin="miter"></circle> <circle data-color="color-2" data-stroke="none" fill="#444444" cx="25" cy="39" r="2" stroke-linejoin="miter" stroke-linecap="square"></circle> <circle data-color="color-2" data-stroke="none" fill="#444444" cx="15" cy="29" r="2" stroke-linejoin="miter" stroke-linecap="square"></circle> <circle data-color="color-2" data-stroke="none" fill="#444444" cx="35" cy="29" r="2" stroke-linejoin="miter" stroke-linecap="square"></circle> <circle data-color="color-2" data-stroke="none" fill="#444444" cx="15" cy="49" r="2" stroke-linejoin="miter" stroke-linecap="square"></circle> <circle data-color="color-2" data-stroke="none" fill="#444444" cx="35" cy="49" r="2" stroke-linejoin="miter" stroke-linecap="square"></circle></g></svg>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" stroke-width="2"><g stroke-width="2" transform="translate(0, 0)"><polyline data-cap="butt" fill="none" stroke="#444444" stroke-width="2" stroke-miterlimit="10" points="47,61 47,17 3,17 " stroke-linejoin="miter" stroke-linecap="butt"></polyline> <line data-cap="butt" fill="none" stroke="#444444" stroke-width="2" stroke-miterlimit="10" x1="47" y1="17" x2="61" y2="3" stroke-linejoin="miter" stroke-linecap="butt"></line> <polygon fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="47,61 61,47 61,3 17,3 3,17 3,61 " stroke-linejoin="miter"></polygon> <circle data-color="color-2" fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" cx="25" cy="39" r="2" stroke-linejoin="miter"></circle> <circle data-color="color-2" fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" cx="15" cy="29" r="2" stroke-linejoin="miter"></circle> <circle data-color="color-2" fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" cx="35" cy="29" r="2" stroke-linejoin="miter"></circle> <circle data-color="color-2" fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" cx="15" cy="49" r="2" stroke-linejoin="miter"></circle> <circle data-color="color-2" fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" cx="35" cy="49" r="2" stroke-linejoin="miter"></circle> <circle data-color="color-2" data-stroke="none" fill="#444444" cx="25" cy="39" r="2" stroke-linejoin="miter" stroke-linecap="square"></circle> <circle data-color="color-2" data-stroke="none" fill="#444444" cx="15" cy="29" r="2" stroke-linejoin="miter" stroke-linecap="square"></circle> <circle data-color="color-2" data-stroke="none" fill="#444444" cx="35" cy="29" r="2" stroke-linejoin="miter" stroke-linecap="square"></circle> <circle data-color="color-2" data-stroke="none" fill="#444444" cx="15" cy="49" r="2" stroke-linejoin="miter" stroke-linecap="square"></circle> <circle data-color="color-2" data-stroke="none" fill="#444444" cx="35" cy="49" r="2" stroke-linejoin="miter" stroke-linecap="square"></circle></g></svg>
      <i>CLICK TO ROLL dice</i>
    </div>
    <Board></Board>
  </div>
</template>

<script>
import Board from './Board.vue'
import Game from '@/modules/game'
export default {
  name: 'Monopoly',
  components: {
    Board
  },
  data () {
    return {
      game: new Game(['Laura', 'Bert'])
    }
  },
  mounted () {
    // this.game = new Game(['Laura', 'Bert'])
    this.positionPlayerElement(this.game.players)
  },
  methods: {
    rollDice () {
      this.game.throw()
      this.positionPlayerElement(this.game.players)
    },
    positionPlayerElement (players) {
      for (var p = 0; p < players.length; p++) {
        const color = this.setPlayerColor(p)
        const margin = this.defineMargin(players, p)
        const playerHTML = this.createHTML(color, margin, p)

        this.replacePlayerOnHTML(players, p, playerHTML)
      }
    },
    setPlayerColor (number) {
      switch (number) {
        case 0:
          return ['crimson', 'crimson', 'coral']
        case 1:
          return ['cornflowerblue', 'cornflowerblue', 'lightblue']
        default:
          return ['black', 'black', 'black']
      }
    },
    defineMargin (players, p) {
      let margin = 0
      for (var i = p; i >= 0; i--) {
        if (p !== i && players[p].currentPos === players[i].currentPos) margin += 10
      }
      return margin
    },
    createHTML (color, margin, p) {
      const playerHTML = `<div id=player${p} class=player style='margin:${margin}px 0px 0px ${margin}px;z-index:${p + 1}'><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48"><g transform="translate(0, 0)"><ellipse fill=${color[0]} cx="24" cy="40" rx="22" ry="6"></ellipse> <circle fill=${color[1]} cx="24" cy="7" r="5"></circle> <path fill=${color[2]} d="M20.9967,14C18.2371,14,16,16.24792,16,19.00163v7.80591 c0,0.54812,0.41714,1.15932,0.93277,1.36557L19,29l0.9095,10.00443C19.9595,39.55426,20.453,40,20.997,40h6.006 c0.5506,0,1.0374-0.44484,1.0875-0.99557L29,29l2.0508-0.68359C31.575,28.14166,32,27.55005,32,26.99315v-7.99812 C32,16.23635,29.7584,14,27.0033,14H20.9967z"></path></g></svg>
</div>`
      return playerHTML
    },
    replacePlayerOnHTML (players, p, playerHTML) {
      const posSelector = '#pos' + players[p].currentPos
      if (document.getElementById(`player${p}`)) {
        var element = document.getElementById(`player${p}`)
        element.outerHTML = ''
      }
      document.querySelector(posSelector).innerHTML = playerHTML + document.querySelector(posSelector).innerHTML
    }
  }
}
</script>

<style src="../assets/style.css">
