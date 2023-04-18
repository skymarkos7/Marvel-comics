<template>
  <div class="q-pa-md" style="max-width: 350px">
    <div class="q-gutter-md">
      <i class="fa fa-spinner fa-spin flex flex-center" v-show="load">
        <LoadComponent />
      </i>
      <q-input
        @keyup.enter="searching"
        v-model="character"
        filled
        placeholder="search by character"
      >
        <template v-slot:append>
          <q-icon @click="searching()" name="person" />
          <q-icon @click="searching()" left name="search" />
        </template>
      </q-input>
    </div>
    <div
      v-for="(comic, index) in data"
      :key="index"
      style="width: 250px; height: 380px; margin: 10px; margin-bottom: 50px"
      class="cointainer row"
    >
      <q-card style="width: 250px; height: 350px" class="cardcomics">
        <q-img
          class="imgcomics"
          style="width: 100%; height: 100%"
          :src="comic.thumbnail.path + '.' + comic.thumbnail.extension"
        >
        </q-img>
        <q-card-section
          ><b class="text-h6"> {{ comic.name }}</b>
          <a
            target="_blanck"
            style="margin-left: 10px; text-decoration: none; color: black"
            class="text-body1"
            :href="comic.urls[0].url"
            >see more</a
          >
          <q-icon left name="visibility" />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { api } from "../boot/axios";
import LoadComponent from "src/components/LoadComponent.vue";
export default {
  name: "SearchPage",
  components: { LoadComponent },
  data() {
    return {
      character: "",
      apikey: "a259607932a87320eddcc6417800ca53",
      ts: "1681397974539",
      hash: "ffa8f49a7ad19d9936f7f69be7ac1caa",
      data: [],
      load: false,
    };
  },
  methods: {
    searching() {
      const url = `http://gateway.marvel.com/v1/public/characters?apikey=${this.apikey}&ts=${this.ts}&hash=${this.hash}&nameStartsWith=${this.character}`;
      this.load = true; // defined load for true before call to API
      api
        .get(url, {})
        .then((response) => {
          this.data = response.data.data.results;
        })
        .finally(() => {
          this.load = false; // defined load for false after call to API
        });
    },
  },
};
</script>
