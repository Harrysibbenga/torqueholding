<template>
  <v-footer class="white--text primary pa-0">
    <v-container fluid class="pa-0">
      <v-row no-gutters>
        <v-col cols="12" class="white">
          <section-map></section-map>
        </v-col>
        <v-col cols="12">
          <section-location></section-location>
        </v-col>
        <v-col id="contact" cols="12" class="white py-16">
          <section-contact
          ></section-contact>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row>
        <span class="mx-auto pa-5 mt-3"
          >&copy; Torque Motorsport Limited {{ new Date().getFullYear() }}</span
        >
      </v-row>
    </v-container>
  </v-footer>
</template>
