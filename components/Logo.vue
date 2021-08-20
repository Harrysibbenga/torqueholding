<template>
  <v-img
    :src="require('../assets/images/Torque_white_logo.png')"
    alt="Torque Motorsport logo"
    :max-width="width"
    :max-height="height"
  ></v-img>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
  },
}
</script>
