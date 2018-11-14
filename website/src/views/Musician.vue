<template>
  <div class="text-light">
    <div class="container text-center">
      <div class="columns">
        <div class="column col-12 bg-dark">
          <router-link to="/">
            <h1 class="text-light">Musician</h1>
          </router-link>
        </div>
        <div class="dm-content column col-12 bg-gray text-dark">
          <div class="container">
            <div class="columns">
              <div class="column col-sm-12 col-8 col-mx-auto">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, similique dolore? Earum quidem debitis culpa sunt veniam quos molestias quaerat nostrum veritatis obcaecati laudantium illo alias doloremque, blanditiis mollitia tenetur!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    //
  }
}

</script>

<style lang="scss" scoped>
  h1 {
    margin: 0;
    padding: 0.5em;
  }

  .dm-content {
    padding: 2em 1em;

    p {
      margin: 0;
    }
  }
</style>
