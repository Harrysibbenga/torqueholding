export const responsive = {
  computed: {
    laptopRes() {
      switch (this.$vuetify.breakpoint.name) {
        case 'md':
          return true
        case 'lg':
          return true
        case 'xl':
          return true
        default:
          return false
      }
    },
  },
}
