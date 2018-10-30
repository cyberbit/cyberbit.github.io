<template>
  <div id="wordy">
    <form @submit.prevent="add">
      <div class="form-group" :class="{'has-error': !valid()}">
        <input type="text" class="form-input" placeholder="type here" v-model="input" @keyup.space="add">
      </div>
      <div class="form-group">
        levenshtein is {{ distance }}
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary">Go</button>
        <button type="button" class="btn dm-btn-outline-error" @click="reset">Reset</button>
      </div>
    </form>

    <ul>
      <li v-for="word in words" :key="word.id">{{ word.value }}</li>
    </ul>
  </div>
</template>

<script>
import _ from 'lodash'
import levenshtein from 'js-levenshtein'

export default {
  name: 'LetterLoop',

  data () {
    return {
      words: [],
      input: '',
      lastID: 0,
      chunk: 10,
      distance: 0
    }
  },

  computed: {
    // trim input
    inputTrimmed: function () {
      return _.trim(this.input)
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

      this.distance = levenshtein('kitten', 'sitting')

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
