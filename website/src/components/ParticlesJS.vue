<template>
  <div id="particles-js"></div>
</template>

<script>
export default {
  name: 'ParticlesJS',

  mounted () {
    require('particles.js')

    this.$nextTick(() => {
      this.initParticlesJS()
    })
  },

  methods: {
    initParticlesJS () {
      /* eslint-disable */
      particlesJS('particles-js', {
        particles: {
          number: {
            value: 100
          },
          opacity: {
            value: 0.3
          },
          size: {
            value: 3,
            random: true
          },
          line_linked: {
            enable: true,
            distance: 150,
            opacity: 0.3
          }
        },
        interactivity: {
          events: {
            onhover: {
              // mode: 'bubble'
            }
          },
          modes: {
            grab: {
              distance: 175
            },
            bubble: {
              distance: 300,
              size: 30,
              duration: 10
            }
          }
        }
      })
    }
  }
}
</script>

<style lang="scss">
  #particles-js {
    position: absolute;
    top: -50px;
    right: 50px;
    bottom: 0;
    left: -50px;
    width: calc(100% + 100px);
    height: calc(100% + 50px);
  }
</style>
