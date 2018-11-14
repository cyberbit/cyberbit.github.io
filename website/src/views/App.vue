<template>
  <div class="text-light">
    <div class="columns">
      <div class="column col-mx-auto">
        <transition name="slide-out">
          <!-- <header class="navbar dm-navbar fixed" v-show="section !== null">
            <section class="navbar-section"></section>
            <section class="navbar-center">
              <a href="/">
                <img src="@/assets/logo1-white.svg" class="dm-logo d-block">
              </a>
              <h3 class="dm-navbar-title text-center m-0">
                <transition name="ticker" mode="out-in">
                  <div :key="section">{{ sectionTitles[section] }}</div>
                </transition>
              </h3>
            </section>
            <section class="navbar-section"></section>
          </header> -->
        </transition>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import '../styles/main.scss'

export default {
  data () {
    return {
      page: 'home',
      section: null,
      sectionTitles: [
        'About',
        'Experience',
        'Education',
        'Skills',
        'Portfolio',
        'Interests',
        'Awards'
      ]
    }
  },

  mounted () {
    //
  }
}

</script>

<style lang="scss"></style>
