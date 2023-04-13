<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <i class="fa fa-spinner fa-spin flex flex-center" v-show="load">
        <q-circular-progress
          indeterminate
          size="45px"
          :thickness="1"
          color="grey-8"
          track-color="lime"
          class="q-ma-md"
        />
      </i>

      <div class="row justify-around items-center" v-if="!load">
        <q-card
          v-for="(comic, index) in comics"
          :key="index"
          style="width: 300px"
          class="my-card"
        >
          <q-img :src="comic.thumbnail.path+'.'+comic.thumbnail.extension"> </q-img>
          <q-card-section>
            {{ comic.title }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { api } from "../boot/axios";
import { useStore } from "vuex";

export default defineComponent({
  name: "ComicsPage",
  data() {
    return {
      apikey: "a259607932a87320eddcc6417800ca53",
      ts: "1681397974539",
      hash: "ffa8f49a7ad19d9936f7f69be7ac1caa",
      baseUrl: "http://gateway.marvel.com/v1/public/comics",
      load: false,
      comics: []
    };
  },
  setup() {
    return {
      lorem: "Lorem ipsum dolor dolore magna aliqua.",
    };
  },
  methods: {
    loadData() {
      //${this.baseUrl}/${this.apikey}/${ts}/${hash}
      const url = `http://gateway.marvel.com/v1/public/comics?apikey=a259607932a87320eddcc6417800ca53&ts=1681397974539&hash=ffa8f49a7ad19d9936f7f69be7ac1caa`;
      this.load = true; // defined load for true before call to API
      api
        .get(url, {
          /**
           * If exits autentication jwt on header
           * headers: {
           *   jwt: this.$store.state.session.jwt
           * }
           */
        })
        .then((response) => {
          this.comics = response.data.data.results;
          console.log(response.data.data.results);
        })
        .finally(() => {
          this.load = false; // defined load for false after call to API
        });
    },
  },
  mounted: function () {
    this.loadData();
  },
});
</script>
