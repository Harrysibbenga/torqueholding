<template>
  <div>

    <v-app-bar
      color="transparent"
      :elevation="0"
      dark
      height="180"
      v-if="mobileRes"
    >
    <v-row align="center" class="flex-column">

        <nuxt-link to="/">
          <Logo :width="imgDim.width" :height="imgDim.height"/>
        </nuxt-link>

        <app-social-icons class="my-5 pt-3" :small="true"></app-social-icons>

    </v-row>
    </v-app-bar>

     <v-app-bar
      absolute
      color="transparent"
      :elevation="0"
      class="px-10"
      height="150"
      dark
      v-else
    >
        <nuxt-link to="/">
          <Logo :width="imgDim.width" :height="imgDim.height"/>
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
      if(this.mobileRes) {
        let dim = {
          width: 180,
          height: 100,
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
