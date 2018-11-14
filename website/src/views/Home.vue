<template>
  <div class="text-light">
    <div class="dm-hero dm-d-viewport text-center">
      <div class="container">
        <div class="columns">
          <div class="col-12">
            <img src="@/assets/logo1-white.svg" class="centered">
            <h1 class="pb-2 mb-2">daniel marcolesco</h1>
            <h3>developer, musician, human.</h3>
          </div>
        </div>
      </div>
      <ParticlesJS/>
    </div>
    <div class="container dm-sections text-center">
      <router-link to="/developer">
        <div class="columns bg-primary">
          <div class="column">
            <div class="dm-d-viewport">
              <div class="container">
                <div class="columns">
                  <div class="column">
                    <h1>Developer</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </router-link>
      <router-link to="/musician">
        <div class="columns bg-dark">
          <div class="column">
            <div class="dm-d-viewport">
              <div class="container">
                <div class="columns">
                  <div class="column">
                    <h1>Musician</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </router-link>
      <router-link to="/human">
        <div class="columns bg-success">
          <div class="column">
            <div class="dm-d-viewport">
              <div class="container">
                <div class="columns">
                  <div class="column">
                    <h1>Human</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import ParticlesJS from '../components/ParticlesJS'

export default {
  components: {
    ParticlesJS
  },

  mounted () {
    //
  }
}

</script>

<style lang="scss"></style>
