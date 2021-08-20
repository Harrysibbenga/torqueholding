<template>
  <v-app dark>
    <v-img src="" height="100vh">
      <v-row class="fill-height mx-auto" style="max-width: 700px">
        <h1
          v-if="error.statusCode === 404"
          class="
            align-self-end
            pb-16
            text-center
            mx-auto
            text-h4
            font-weight-bold
            white--text
          "
        >
          Oh no !!! {{ pageNotFound }}
          <br />
          <NuxtLink class="secondary--text" to="/"> Lets go back home</NuxtLink>
        </h1>
        <h1
          v-else
          class="
            align-self-end
            pb-16
            text-center
            mx-auto
            text-h4
            font-weight-bold
            white--text
          "
        >
          Oh no !!! {{ otherError }}
          <br />
          <NuxtLink class="secondary--text" to="/"> Lets go back home</NuxtLink>
        </h1>
      </v-row>
    </v-img>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
