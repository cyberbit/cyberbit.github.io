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
    </div>
  </div>
</template>

<script>
import ParticlesJS from './components/ParticlesJS'
import Wordy from './components/Wordy'
import LetterLoop from './components/LetterLoop'

export default {
  components: {
    ParticlesJS,
    Wordy,
    LetterLoop
  },

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
  }
}

</script>

<style lang="scss">
  // Define override variables
  $primary-color: #3995d2;
  $base-font-family: 'Open Sans';

  // Spectre Breakpoints
  $break-xs: 480px;
  $break-sm: 600px;
  $break-md: 840px;
  $break-lg: 960px;
  $break-xl: 1280px;

  @import "../node_modules/spectre.css/src/spectre";
  @import "../node_modules/spectre.css/src/spectre-exp";
  // @import url('https://fonts.googleapis.com/css?family=Lato|Pompiere|Titillium+Web:300,400');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400|Work+Sans:400');

  // Define extended variables
  $site-bg-color: #000;
  $site-bg-color-light: lighten($site-bg-color, 15%);
  $navbar-hover-color: $site-bg-color-light;

  html {
    background: $site-bg-color;
  }

  body {
    background: transparent;
  }

  // Change fonts for headings
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Work Sans';
    font-weight: 300;

    small {
      font-family: 'Open Sans';
      font-weight: 300;
    }
  }

  // Customize links in navbar
  .navbar {
    top: 0;
    left: 0;
    width: 100%;

    background: $site-bg-color;
    // border-bottom: $primary-color solid 3px;
    box-shadow: $site-bg-color 0 -20px 40px 40px;

    .dm-logo {
      height: 3.5rem;
      padding: 1rem;
    }

    .btn.btn-link {
      color: $light-color;
      border-radius: 0;

      &:hover {
        background: $navbar-hover-color;
      }

      &.active {
        background: $primary-color;
      }
    }

    .dm-navbar-title {
      border-left: $primary-color solid 3px;
      width: 190px;
    }
  }

  // Hero block
  .dm-hero {
    position: relative;
    padding: 4em 0;
    overflow: hidden;

    img {
      height: auto;
      min-width: 300px;
      width: 70vw;
      max-width: 800px;
      padding: 0 2em 2em 2em;
    }

    h1 {
      font-size: 4.5em;
      display: inline-block;
      border-bottom: $primary-color 3px solid;
      letter-spacing: 1.5px;

      @media screen and (max-width: $break-lg) {
        font-size: 3.2em;
      }

      @media screen and (max-width: $break-sm) {
        font-size: 2.3em;
      }

      @media screen and (max-width: $break-xs) {
        font-size: 1.8em;
      }
    }

    h3 {
      font-family: 'Open Sans';
      letter-spacing: .1em;
      margin-bottom: 0;
    }

    p {
      font-weight: 300;
    }
  }

  .dm-navbar {
    overflow: hidden;
  }

  .dm-btn-outline-error {
    @include button-outline-variant($error-color);

    background: $site-bg-color;

    &:hover, &:focus {
      background: $error-color;
      color: $light-color;
    }
  }

  .dm-sections {
    h1 {
      margin-bottom: 0;
    }
  }

  .dm-d-viewport {
    height: 100vh;

    .container, .columns {
      height: 100%;
    }

    .columns {
      align-items: center;
    }
  }

  // Transitions
  .ticker {
    &-enter-active {
      transition: all .1s ease;
    }

    &-leave-active {
      transition: all .1s ease;
    }

    &-enter {
      transform: translateY(20px);
      overflow: hidden;
      opacity: 0;
    }

    &-leave-to {
      transform: translateY(-50px);
      overflow: hidden;
      opacity: 0;
    }
  }

  .slide-out {
    &-enter-active {
      transition: all .5s ease;
    }

    &-leave-active {
      transition: all .3s ease;
    }

    &-enter, &-leave-to {
      transform: translateY(-100px);
    }
  }

  .dm-card {
    // background: $site-bg-color-light;
    color: $dark-color;
  }

</style>
