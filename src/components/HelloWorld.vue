<template>
  <div>
    <div id="dice" v-on:click="rollDice"></div>
    <Board></Board>
  </div>
</template>

<script>
import Board from './Board.vue'
import { throwDice } from '@/modules/dice'
import player from '@/modules/player'
export default {
  name: 'Monopoly',
  components: {
    Board
  },
  mounted () {
    player.setStartingPos(1)
    this.playerElement = this.$refs.player
    this.positionPlayerElement(player.currentPos)
  },
  methods: {
    rollDice () {
      player.move(throwDice())
      this.positionPlayerElement(player.currentPos)
    },
    positionPlayerElement (pos) {
      const playerHTML = '<div id=player></div>'

      const posSelector = '#pos' + player.currentPos
      if (document.getElementById('player')) {
        var element = document.getElementById('player')
        element.outerHTML = ''
      }

      document.querySelector(posSelector).innerHTML = playerHTML + document.querySelector(posSelector).innerHTML
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/style.css">
