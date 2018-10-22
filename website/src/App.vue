<template>
  <div class="container text-light">
    <div class="columns">
      <div class="column col-mx-auto">
        <header class="navbar fixed">
          <section class="navbar-section">
          </section>
          <section class="navbar-center">
            <a href="/"><img src="@/assets/logo1-white.svg" class="dm-logo d-block"></a>
            <h2 class="dm-navbar-title m-0" v-scroll-spy-active="{selector: 'span', class: 'dm-show'}">
              <span>About</span>
              <span>Experience</span>
              <span>Education</span>
              <span>Skills</span>
              <span>Interests</span>
              <span>Awards</span>
            </h2>
          </section>
          <section class="navbar-section">
            <!-- <a @click="tab = 'about'" class="btn btn-link" :class="{ active: tab === 'about' }">About</a> -->
            <!-- <a @click="tab = 'experience'" class="btn btn-link" :class="{ active: tab === 'experience' }">Experience</a> -->
          </section>
        </header>
      </div>
    </div>
    <div class="dm-hero text-center">
      <ParticlesJS></ParticlesJS>
      <img src="@/assets/logo1-white.svg" class="centered">
      <h1 class="pb-2 mb-2">daniel marcolesco</h1>
      <h3>developer, musician, human.</h3>
    </div>
    <div class="columns">
      <div class="column col-sm-12 col-8 col-mx-auto" v-scroll-spy="{data: 'section'}">
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
      section: 0
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
    border-bottom: $light-color solid 1px;

    .dm-logo {
      height: 4rem;
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
      span {
        display: none;
      }

      span.dm-show {
        display: inline;
      }
    }
  }

  // Hero block
  .dm-hero {
    position: relative;
    padding: 4em;

    img {
      height: 100%;
      width: 100%;
      max-width: 500px;
      padding: 2em;
    }

    h1 {
      font-size: 2.5rem;
      display: inline-block;
      border-bottom: $gray-color-dark 1px solid;
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

</style>
