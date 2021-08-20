<template>
  <div>
    <v-app-bar
      absolute
      color="transparent"
      class="px-md-10"
      :elevation="0"
      dark
      height="90"
      min-width="240"
    >
      <nuxt-link to="/">
        <Logo :width="imgDim.width" :height="imgDim.height" class="mt-16"/>
      </nuxt-link>

      <v-spacer />

      <app-social-icons></app-social-icons>
    </v-app-bar>
  </div>
</template>

<script>
import {responsive} from '@/mixins/responsive.js'
export default {
  mixins: [responsive],
  computed: {
    imgDim() {
      if(!this.laptopRes) {
        let dim = {
          width: 100,
          height: 50,
        }
        return dim
      } else {
        let dim = {
          width: 200,
          height: 100,
        }
        return dim
      }
    }
  }
}
</script>
