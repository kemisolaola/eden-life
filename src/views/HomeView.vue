<template>
<v-container fluid>
  <v-row justify="center">
    <v-col cols="3">
      <select @change="fetchDogsByBreed" v-model="selectedDog" class="select-field pl-2" >
      <option value="" default> Select Dog</option>
        <option v-for="(dogs, name, index) in getDogs" :key="index" :value="name">{{name.toUpperCase()}}</option>
      </select>
    </v-col>
  </v-row>
  <v-row class="px-10">
    <v-col cols="12" class="px-5">
      <v-card class="pa-5" elevation="1">
        <v-row justify="space-between">
          <v-col>
       <p class="text-h4 text-left"> {{selectedDog.toUpperCase()}} </p>
          </v-col>
           <v-col>
       <p class="text-h4 text-right"> {{getDogImages.length}} <span class="text-h5">results</span></p>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12" sm="4" v-for="(dogPic, index) in getDogImages" :key="index">
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
      selectedDog: 'hound'
    }
  },
  mounted () {
    this.fetchDogs()
    this.fetchDogsImages(this.selectedDog)
  },
  computed: {
    ...mapGetters([
      'getDogs',
      'getDogImages'
    ])
  },
  methods: {
    ...mapActions([
      'fetchDogs',
      'fetchDogsImages'
    ]),
    fetchDogsByBreed () {
      this.fetchDogsImages(this.selectedDog)
    }
  }
}
</script>

<style>
.select-field {
    background-color: #fff;
    border: 1px solid #aaa;
    border-radius: 4px;
    width: 300px;
    height: 50px;
}
</style>
