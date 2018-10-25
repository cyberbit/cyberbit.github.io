<template>
  <div class="container text-light">
    <div class="columns">
      <div class="column col-mx-auto">
        <transition name="slide-out">
          <header class="navbar dm-navbar fixed" v-show="section !== null">
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
            <section class="navbar-section">
              <!-- <a @click="tab = 'about'" class="btn btn-link" :class="{ active: tab === 'about' }">About</a> -->
              <!-- <a @click="tab = 'experience'" class="btn btn-link" :class="{ active: tab === 'experience' }">Experience</a> -->
            </section>
          </header>
        </transition>
      </div>
    </div>
    <div class="dm-hero text-center">
      <ParticlesJS></ParticlesJS>
      <img src="@/assets/logo1-white.svg" class="centered">
      <h1 class="pb-2 mb-2">daniel marcolesco</h1>
      <h3>developer, musician, human.</h3>
    </div>
    <div class="columns">
      <div class="column col-sm-12 col-8 col-mx-auto" v-scroll-spy="{data: 'section', allowNoActive: true}">
        <div v-if="!tab || tab === 'about'">
          <h1>About</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat consequuntur minus natus asperiores, dignissimos officiis facere, ducimus rerum, deleniti hic ipsum labore voluptatibus quae! Voluptate eligendi exercitationem qui provident.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat consequuntur minus natus asperiores, dignissimos officiis facere, ducimus rerum, deleniti hic ipsum labore voluptatibus quae! Voluptate eligendi exercitationem qui provident.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat consequuntur minus natus asperiores, dignissimos officiis facere, ducimus rerum, deleniti hic ipsum labore voluptatibus quae! Voluptate eligendi exercitationem qui provident.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat consequuntur minus natus asperiores, dignissimos officiis facere, ducimus rerum, deleniti hic ipsum labore voluptatibus quae! Voluptate eligendi exercitationem qui provident.</p>
        </div>
        <div v-if="!tab || tab === 'experience'">
          <h1>Experience</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat consequuntur minus natus asperiores, dignissimos officiis facere, ducimus rerum, deleniti hic ipsum labore voluptatibus quae! Voluptate eligendi exercitationem qui provident.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat consequuntur minus natus asperiores, dignissimos officiis facere, ducimus rerum, deleniti hic ipsum labore voluptatibus quae! Voluptate eligendi exercitationem qui provident.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat consequuntur minus natus asperiores, dignissimos officiis facere, ducimus rerum, deleniti hic ipsum labore voluptatibus quae! Voluptate eligendi exercitationem qui provident.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat consequuntur minus natus asperiores, dignissimos officiis facere, ducimus rerum, deleniti hic ipsum labore voluptatibus quae! Voluptate eligendi exercitationem qui provident.</p>
        </div>
        <div v-if="!tab || tab === 'education'">
          <h1>Education</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat consequuntur minus natus asperiores, dignissimos officiis facere, ducimus rerum, deleniti hic ipsum labore voluptatibus quae! Voluptate eligendi exercitationem qui provident.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat consequuntur minus natus asperiores, dignissimos officiis facere, ducimus rerum, deleniti hic ipsum labore voluptatibus quae! Voluptate eligendi exercitationem qui provident.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat consequuntur minus natus asperiores, dignissimos officiis facere, ducimus rerum, deleniti hic ipsum labore voluptatibus quae! Voluptate eligendi exercitationem qui provident.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat consequuntur minus natus asperiores, dignissimos officiis facere, ducimus rerum, deleniti hic ipsum labore voluptatibus quae! Voluptate eligendi exercitationem qui provident.</p>
        </div>
        <div v-if="!tab || tab === 'skills'">
          <h1>Skills</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat consequuntur minus natus asperiores, dignissimos officiis facere, ducimus rerum, deleniti hic ipsum labore voluptatibus quae! Voluptate eligendi exercitationem qui provident.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat consequuntur minus natus asperiores, dignissimos officiis facere, ducimus rerum, deleniti hic ipsum labore voluptatibus quae! Voluptate eligendi exercitationem qui provident.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat consequuntur minus natus asperiores, dignissimos officiis facere, ducimus rerum, deleniti hic ipsum labore voluptatibus quae! Voluptate eligendi exercitationem qui provident.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat consequuntur minus natus asperiores, dignissimos officiis facere, ducimus rerum, deleniti hic ipsum labore voluptatibus quae! Voluptate eligendi exercitationem qui provident.</p>
        </div>
        <div v-if="!tab || tab === 'interests'">
          <h1>Interests</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat consequuntur minus natus asperiores, dignissimos officiis facere, ducimus rerum, deleniti hic ipsum labore voluptatibus quae! Voluptate eligendi exercitationem qui provident.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat consequuntur minus natus asperiores, dignissimos officiis facere, ducimus rerum, deleniti hic ipsum labore voluptatibus quae! Voluptate eligendi exercitationem qui provident.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat consequuntur minus natus asperiores, dignissimos officiis facere, ducimus rerum, deleniti hic ipsum labore voluptatibus quae! Voluptate eligendi exercitationem qui provident.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat consequuntur minus natus asperiores, dignissimos officiis facere, ducimus rerum, deleniti hic ipsum labore voluptatibus quae! Voluptate eligendi exercitationem qui provident.</p>
        </div>
        <div v-if="!tab || tab === 'awards'">
          <h1>Awards</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat consequuntur minus natus asperiores, dignissimos officiis facere, ducimus rerum, deleniti hic ipsum labore voluptatibus quae! Voluptate eligendi exercitationem qui provident.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat consequuntur minus natus asperiores, dignissimos officiis facere, ducimus rerum, deleniti hic ipsum labore voluptatibus quae! Voluptate eligendi exercitationem qui provident.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat consequuntur minus natus asperiores, dignissimos officiis facere, ducimus rerum, deleniti hic ipsum labore voluptatibus quae! Voluptate eligendi exercitationem qui provident.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat consequuntur minus natus asperiores, dignissimos officiis facere, ducimus rerum, deleniti hic ipsum labore voluptatibus quae! Voluptate eligendi exercitationem qui provident.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ParticlesJS from './components/ParticlesJS'

export default {
  components: {
    ParticlesJS
  },

  data () {
    return {
      tab: false,
      section: null,
      sectionTitles: [
        'About',
        'Experience',
        'Education',
        'Skills',
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

  @import "../node_modules/spectre.css/src/spectre";
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
      height: 100%;
      width: 100%;
      max-width: 500px;
      padding: 2em;
    }

    h1 {
      font-size: 2.5rem;
      display: inline-block;
      border-bottom: $primary-color 3px solid;
      letter-spacing: 1.5px;
    }

    h3 {
      font-family: 'Open Sans';
      letter-spacing: .1em;
    }

    p {
      font-weight: 300;
    }
  }

  .dm-navbar {
    overflow: hidden;
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

</style>
