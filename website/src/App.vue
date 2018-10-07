<template>
  <div class="container text-light">
    <div class="columns">
      <div class="column col-sm-12 col-8 col-mx-auto">
        <header class="navbar">
          <section class="navbar-section">
          </section>
          <section class="navbar-center">
            <a href="/" class="navbar-brand text-light"><img src="@/assets/cb-glitch-crop.jpg" class="img-fit-contain"></a>
          </section>
          <section class="navbar-section">
            <a @click="tab = 'about'" class="btn btn-link" :class="{ active: tab === 'about' }">About</a>
            <a @click="tab = 'experience'" class="btn btn-link" :class="{ active: tab === 'experience' }">Experience</a>
          </section>
        </header>
      </div>
    </div>
    <div class="columns bg-primary">
      <div class="column col-sm-12 col-8 col-mx-auto">
        <div v-if="!tab || tab === 'about'">
          <h1>About</h1>
        </div>
        <div v-if="!tab || tab === 'experience'">
          <h1>Experience</h1>
        </div>
        <div v-if="!tab || tab === 'education'">
          <h1>Education</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      tab: false
    }
  }
}

</script>

<style lang="scss">
  // Define override variables
  $primary-color: #3995d2;

  @import "../node_modules/spectre.css/src/spectre";

  // Define extended variables
  $site-bg-color: #000;
  $site-bg-color-light: lighten($site-bg-color, 15%);
  $navbar-hover-color: $site-bg-color-light;

  html, body {
    background: $site-bg-color;
  }

  // Customize links in navbar
  .navbar {
    .navbar-brand img {
      height: 1.8rem;
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
  }

</style>
