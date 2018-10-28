<template>
  <div id="wordy">
    <form @submit.prevent="add">
      <div class="form-group" :class="{'has-error': !valid()}">
        <input type="text" class="form-input" placeholder="type here" v-model="input" @keyup.space="add">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary">Go</button>
        <button type="button" class="btn dm-btn-outline-error" @click="reset">Reset</button>
      </div>
      <div class="form-group">
        <input class="slider tooltip" type="range" min="5" max="50" oninput="this.setAttribute('value', this.value)" v-model="chunk">
      </div>
    </form>

    <div class="columns">
      <div class="column col-4" v-for="(wordChunk, index) in wordsChunked" :key="index">
        <h1>chunk {{ index }}</h1>
        <ul v-for="word in wordChunk" :key="word.id">
          <li>{{ word.value }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'Wordy',

  data () {
    return {
      words: [],
      input: '',
      lastID: 0,
      chunk: 10
    }
  },

  computed: {
    // trim input
    inputTrimmed: function () {
      return _.trim(this.input)
    },

    // chunk words
    wordsChunked: function () {
      return _.chunk(this.words, this.chunk)
    }
  },

  methods: {
    // add a word to the list
    add () {
      if (this.valid()) {
        this.words.push({
          id: this.lastID++,
          value: this.inputTrimmed
        })

        this.clear()
      } else {
        alert('not unique')
      }
    },

    // check that the input is valid
    valid () {
      let unique = _.findIndex(this.words, {value: this.inputTrimmed}) < 0
      let notEmpty = this.inputTrimmed.length

      return unique && notEmpty
    },

    // clear input
    clear () {
      this.input = ''
    },

    // reset word database
    reset () {
      this.words = []
    }
  }
}
</script>

<style lang="scss">

</style>
