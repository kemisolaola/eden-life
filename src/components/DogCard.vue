<template>
    <v-row>
    <v-col cols="3" sm="12" class="mt-16 mx-auto" v-if="isLoading">
       <p class="text-center mt-sm-10"><v-progress-circular indeterminate></v-progress-circular></p>
    </v-col>
    <v-col cols="12" sm="4" v-for="(dogPic, index) in getDogImages" :key="index">
    <v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
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
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'HomeView',
  data () {
    return {
      isActive: false,
      selectedDog: 'hound',
      breedList: JSON.parse(localStorage.getItem('DOGGO_LIST')),
      isLoading: false
    }
  },
  mounted () {
    this.isLoading = true
    if (!localStorage.getItem('DOGGO_LIST')) {
      this.isLoading = false
      this.fetchDogs()
      this.isLoading = false
      this.breedList = this.getDogs
    }
    this.isLoading = false
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
