<template>
  <div>
    <div id="dice" v-on:click="rollDice">
      <i>PRESS TO ROLL dice</i>
      <table>
        <tr>
          <th>
            name
          </th>
          <th>
            currentPos
          </th>
        </tr>
        <tr>
          <td>
            {{ game.players[0].name }}
          </td>
          <td>
            {{ game.players[0].currentPos }}
          </td>
        </tr>
        <tr>
          <td>
            {{ game.players[1].name }}
          </td>
          <td>
            {{ game.players[1].currentPos }}
          </td>
        </tr>
      </table>
      current player: {{ game.players[game.currentPlayer].name }}
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
        const color = p === 0 ? 'red' : 'blue'
        const playerHTML = `<div id=player${p} class=player style='background-color:${color};'></div>`

        const posSelector = '#pos' + players[p].currentPos
        if (document.getElementById(`player${p}`)) {
          var element = document.getElementById(`player${p}`)
          element.outerHTML = ''
        }
        document.querySelector(posSelector).innerHTML = playerHTML + document.querySelector(posSelector).innerHTML
      }
    }
  }
}
</script>

<style src="../assets/style.css">
