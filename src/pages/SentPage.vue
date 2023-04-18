<template>
  <div class="q-pa-md row">
    <q-card
      v-for="(key, index) in localKeys"
      :key="index"
      style="margin: 20px"
      class="mycard"
    >
      <q-card-section>
        <div class="text-body1">
          Sent code #{{ key }}
          <q-icon name="schedule_send" size="1.5rem" />
        </div>

        <div class="text-subtitle2"></div>
      </q-card-section>

      <q-tabs v-model="tab" class="text-teal">
        <q-tab label="Address" :name="key" />
        <q-tab label="Comics id" :name="key + 1" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel :name="key">
          {{ locale[localKeys.indexOf(key)] }}
        </q-tab-panel>

        <q-tab-panel :name="key + 1">
          {{ sentData[2][localKeys.indexOf(key)] }}
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SentPage",
  data() {
    return {
      localKeys: [],
      sentData: [],
      locale: [],
      comics: [],
      tab: "address",
    };
  },
  mounted: function () {
    this.locale = [];
    var x = [];
    if (sessionStorage.getItem("comics") && sessionStorage.getItem("locale")) {
      var sent =
        sessionStorage.getItem("comics") +
        "|" +
        sessionStorage.getItem("locale");

      localStorage.setItem(Date.now(), sent);
      sessionStorage.clear();
    }

    const localKeys = Object.keys(localStorage); //get all keys
    this.localKeys = localKeys; // save keys

    localKeys.forEach((key) => {
      const value = localStorage.getItem(key);
      var valuesplit = value.split("|");
      this.locale.push(valuesplit[1]);
      this.comics.push(valuesplit[0]);
      this.sentData = [this.localKeys, this.locale, this.comics];

      this.sentData[
        ((this.sentData["keys"] = [this.localKeys]),
        (this.sentData["locale"] = [this.locale]),
        (this.sentData["comics"] = [this.comics]))
      ];
      x = [this.locale.join(",   ")];
    });
  },
});
</script>











<style scoped>
.mycard {
  width: 100%;
  max-width: 300px;
}
</style>
