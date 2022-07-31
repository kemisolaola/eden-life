<template>
<v-container fluid>
  <v-row justify="center">
    <v-col cols="12" md="3">
      <select @change="fetchDogsByBreed" v-model="selectedDog" class="select-field pl-2" >
      <option value="" default> Select Dog</option>
        <option v-for="(dogs, name, index) in getDogs" :key="index" :value="name">{{name.toUpperCase()}}</option>
      </select>
    </v-col>
  </v-row>
  <v-row class="px-sm-10">
    <v-col cols="12" class="px-5">
      <v-card class="pa-5" elevation="1">
        <v-row justify="space-between">
          <v-col>
       <p class="text-h5 text-sm-h4 text-left"> {{selectedDog.toUpperCase()}} </p>
          </v-col>
           <v-col>
       <p class="text-h5  text-sm-h4 text-right"> {{getDogImages.length}} <span class="text-h5">results</span></p>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    </v-row>
    <v-row>
    <v-col cols="3" sm="12" class="mt-16 mx-auto" v-if="isLoading">
       <p class="text-center mt-sm-10"><v-progress-circular indeterminate></v-progress-circular></p>
    </v-col>
    <v-col cols="12" sm="4" v-for="(dogPic, index) in getDogImages" :key="index">
    <v-lazy
        v-model="isActive"
        :options="{
          threshold: .20
        }"
        min-height="200"
        transition="fade-transition"
      >
    <v-card outlined width="350" height="350" class="pa-4">
      <v-img width="100%" height="100%" :src="dogPic"></v-img>
    </v-card>
    </v-lazy>
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
      isActive: false,
      selectedDog: 'hound',
      isLoading: false
    }
  },
  computed: {
    ...mapGetters([
      'getDogs',
      'getDogImages'
    ])
  },
  mounted () {
    this.fetchDogs()
    this.breedList = this.getDogs
    this.fetchDogsImages(this.selectedDog)
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
.select-field{
    background-color: #fff;
    border: 1px solid #aaa;
    border-radius: 4px;
    width: 100%;
    height: 50px;
}
</style>
