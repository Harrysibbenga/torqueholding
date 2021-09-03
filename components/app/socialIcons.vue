<template>
<div>

  <v-row justify="end" v-if="!small">
  <a v-for="(item,i) in social" :key="i" :href="item.link" target="_blank">
    <v-icon
      color="white"
      class="px-1"
      large
    >
      {{ item.icon }}
    </v-icon>
  </a>
  </v-row>

  <v-row v-else>
  <a v-for="(item,i) in social" :key="i" :href="item.link" target="_blank">
    <v-icon
      color="white"
      class="px-1"
    >
      {{ item.icon }}
    </v-icon>
  </a>
  </v-row>
  </div>
</template>

<script>
export default {
  props: {
    small: {
      type: Boolean,
      default:false
    }
  },
  data: () => ({
    social: [
      {
        icon: 'mdi-twitter',
        link: 'https://twitter.com/torqueuk'
      },
      {
        icon: 'mdi-facebook',
        link: 'https://www.facebook.com/torqueUK'
      },
      {
        icon: 'mdi-instagram',
        link: 'https://www.instagram.com/torqueuk'
      },
      {
        icon: 'mdi-linkedin',
        link: 'https://www.linkedin.com/company/torque-motorsport'
      }
    ]
  })
}
</script>
