<template>
<v-container fluid>
  <v-row justify="end">
    <v-col cols="6">
      <select v-model="selectedDog">
      <option value="" default> Select Dog</option>
        <option v-for="(dogs, name, index) in getDogs" :key="index" :value="name">{{name.toUpperCase()}}</option>
      </select>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12">
      <v-card height="100px" elevation="1">
        {{selectedDog.toUpperCase()}}

        <p class="text-right"> {{getDogImages.length}} </p>
      </v-card>
    </v-col>
    <v-col cols="12" sm="4" v-for="(dogPic, index) in hundredDogs" :key="index">
    <v-card outlined width="350" height="350" class="pa-4">
      <v-img width="100%" height="100%" :src="dogPic"></v-img>
    </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'HomeView',
  data () {
    return {
      selectedDog: 'None Selected'
    }
  },
  computed: {
    ...mapGetters([
      'getDogs',
      'getDogImages'
    ]),
    hundredDogs () {
      return this.getDogImages.slice(300, 400)
    }
  },
  methods: {
    ...mapActions([
      'fetchDogs',
      'fetchDogsImages'
    ])
  },
  mounted () {
    this.fetchDogs()
    this.fetchDogsImages()
  }
}
</script>
