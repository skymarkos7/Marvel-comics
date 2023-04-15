<template>
  <q-page style="background-color: rgb(245, 245, 245)" class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <i class="fa fa-spinner fa-spin flex flex-center" v-show="load">
        <LoadComponent />
      </i>

      <div class="row justify-around items-center" v-if="!load">
        <q-dialog v-model="modal" full-width>
          <q-card>
            <q-card-section>
              <div class="text-h6">MORE DETAILS</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <i class="fa fa-spinner fa-spin flex flex-center" v-show="load">
                <LoadComponent />
              </i>

              <div class="containerDetails row">
                <div style="width:300px; margin-right: 40px;" class="imgDetails">
                  <q-img

                    :src="
                      detailsComics.thumbnail.path +
                      '.' +
                      detailsComics.thumbnail.extension
                    "
                  >
                  </q-img>
                </div>

                <div style="border:1px red solid; width:60%; min-width: 300px; ">
                  <p class="text-h5">{{ detailsComics.title }}</p>
                  <p><b>OnSale Date:</b> {{ date }}</p>

                  <div class="creators row">
                    <div
                      v-for="(datail, index) in detailsComics.creators.items"
                      :key="index"
                      style="width:50%"
                    >
                    <p class="text-h6">{{ datail.role }}:<br>
                      <span class="text-subtitle1">{{ datail.name }}</span>
                    </p>

                    </div>

                  </div>

                  <p class="text-h5" style="margin-top:50px"><b>printPrice:</b> {{ detailsComics.prices[0].price }}</p>
                </div>
              </div>
            </q-card-section>

            <q-card-actions align="right" class="bg-white text-teal">
              <q-btn flat label="OK" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>

        <div
          v-for="(comic, index) in comics"
          :key="index"
          style="width: 250px; height: 380px; margin-bottom: 45px"
          class="cointainer"
        >
          <q-card
            style="width: 250px; height: 350px"
            @click="fullWidth(comic.id, true)"
            class="my-card"
          >
            <q-img
              style="width: 100%; height: 100%; float: "
              :src="comic.thumbnail.path + '.' + comic.thumbnail.extension"
            >
            </q-img>
            <q-card-section>
              {{ comic.title }}
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { api } from "../boot/axios";
import LoadComponent from "src/components/LoadComponent.vue";
import { ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "ComicsPage",
  components: {
    LoadComponent,
  },
  data() {
    return {
      apikey: "a259607932a87320eddcc6417800ca53",
      ts: "1681397974539",
      hash: "ffa8f49a7ad19d9936f7f69be7ac1caa",
      load: false,
      comics: [],
      modal: false,
      idComic: "",
      detailsComics: [],
      date: "",
    };
  },
  setup() {
    return {
      lorem: "Lorem ipsum dolor dolore magna aliqua.",
    };
  },
  methods: {
    loadData() {
      const url = `http://gateway.marvel.com/v1/public/comics?apikey=${this.apikey}&ts=${this.ts}&hash=${this.hash}`;
      this.load = true; // defined load for true before call to API
      api
        .get(url, {
          /**
           * If exits autentication jwt here on header
           * headers: {
           *   jwt: this.$store.state.session.jwt or "hsha165z54764z546574z65z4z543z"
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
    fullWidth(id) {
      this.modal = true;
      this.idComic = id;
      console.log(id);

      const url = `http://gateway.marvel.com/v1/public/comics/${id}?apikey=${this.apikey}&ts=${this.ts}&hash=${this.hash}`;
      this.load = true; // defined load for true before call to API
      api
        .get(url, {})
        .then((response) => {
          this.detailsComics = response.data.data.results[0];
          console.log(response.data.data.results[0]);

          /**
           * Formact to date
           */
          const date = new Date(response.data.data.results[0].dates[0].date);
          const options = { month: "long", day: "numeric", year: "numeric" };
          this.date = date.toLocaleDateString("en-US", options);
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



