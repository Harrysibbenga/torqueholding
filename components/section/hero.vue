<template>
  <div>
    <v-carousel v-model="slide" delimiter-icon="mdi-minus" vertical-delimiters cycle height="100vh">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
    >

      <v-img

        width="100%"
        height="100%"
        :src="require('@/assets/images/' + item.src)"
        :alt="item.alt"
      >
        <v-row class="fill-height" :align="item.align" :justify="item.justify">
          <v-col cols="6" class="offset-1" :class="item.padding">
            <h1 class="text-h2 text-md-h1 my-16 font-weight-bold">{{item.title}}</h1>
            <div class="text-h4 black sub-text">
              {{item.text}}
            </div>
          </v-col>
        </v-row>
      </v-img>
    </v-carousel-item>
  </v-carousel>
  </div>
</template>

<script>
export default {
  data: () => ({
    slide: 0,
    items: [
      {
        src: '1.jpg',
        alt: '',
        text: 'Based in Motorsport Valley, Silverstone',
        title: 'Worldwide coverage from Silverstone',
        align:'start',
        justify: 'start',
        padding: 'mt-16'
      },
      {
        src: '4.jpg',
        alt: '',
        text: 'Founded in 2008',
        title: 'Over a decade of motorsport experience',
        align:'center',
        justify: 'start',
      },
      {
        src: '3.jpg',
        alt: '',
        text: 'From club racing to F1',
        title: 'Unique client mix',
        align:'center',
        justify: 'start',
      },
    ]
  })
}
</script>

<style>
  .sub-text{
    width: fit-content;
  }
</style>
