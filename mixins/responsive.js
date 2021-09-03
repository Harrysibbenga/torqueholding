export const responsive = {
  computed: {
    mobileRes() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return true
        case 'sm':
          return true
        default:
          return false
      }
    },
  },
}
