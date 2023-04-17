<template>
  <q-banner v-if="warning" inline-actions rounded class="bg-orange text-white">
    1st - first select location | 2nd - second click load location from map |
    3rd - finally click send
  </q-banner>
  <div class="row">
    <div
      @click="data()"
      style="width: 50%; min-width: 300px; height: 600px; margin: 15px"
      ref="page"
    ></div>
    <div style="width: 400px !important">
      <form style="width: 200px" action="">
        <div class="card-container">
          <div class="panel">
            <div>
              <img
                class="sb-title-icon"
                src="https://fonts.gstatic.com/s/i/googlematerialicons/location_pin/v5/24px.svg"
                alt=""
              />
              <span class="sb-title">Address Selection</span>
            </div>
            <q-input v-model="address" placeholder="Address" :dense="dense" />
            <q-input
              v-model="number"
              placeholder="Apt, number, Suite, etc (optional)"
              :dense="dense"
            />
            <q-input v-model="city" placeholder="City" :dense="dense" />
            <div class="half-input-container">
              <q-input
                v-model="state"
                placeholder="state/Province"
                :dense="dense"
              />
              <q-input
                v-model="zipcode"
                placeholder="zip/Postal code"
                :dense="dense"
              />
            </div>
            <q-input v-model="country" placeholder="Country" :dense="dense" />

            <q-btn
              class="btn"
              icon="sync"
              unelevated
              rounded
              color="orange"
              @click="data()"
              label="Load location from map"
            />
            <q-btn
              @click="send()"
              class="btn"
              color="red"
              icon-right="send"
              label="Send to"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      address: "",
      number: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
      warning: false,
    };
  },
  mounted: function () {
    const page = this.$refs.page;
    const iframe = document.createElement("iframe");
    iframe.src = "/pageMap/index.html";
    iframe.id = "myiframe";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.onload = () => {
      const pageDocument = iframe.contentDocument;
      const head = pageDocument.querySelector("head");
      const body = pageDocument.querySelector("body");
      const style = document.createElement("link");
      style.rel = "stylesheet";
      style.type = "text/css";
      style.href = "/pageMap/style.css";
      head.appendChild(style);
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "/pageMap/script.js";
      body.appendChild(script);
    };
    page.appendChild(iframe);
  },
  methods: {
    data() {
      // console.log(this.datas);
      // var nome = new URLSearchParams(window.location.search).get("nome");
      // console.log(nome);

      var mensagem =
        document.getElementById("myiframe").contentWindow.response.results;
      this.address = mensagem[0].address_components[1].long_name;
      this.number = mensagem[0].address_components[0].long_name;
      this.city = mensagem[0].address_components[2].long_name;
      this.state = mensagem[0].address_components[3].long_name;
      this.zipcode = mensagem[0].address_components[5].long_name;
      this.country = mensagem[0].address_components[4].long_name;

      console.log(mensagem); // Saída: "Olá, mundo!"
    },
    send(e) {
      if (this.address) {
        console.log("tem");
      } else {
        this.warning = true;
      }
    },
  },
};
</script>




<style scoped>
.sb-title {
  position: relative;
  top: -12px;
  font-family: Roboto, sans-serif;
  font-weight: 500;
}

.sb-title-icon {
  position: relative;
  top: -5px;
}

.card-container {
  display: flex;
  height: 30%;
  width: 600px;
}

.panel {
  background: white;
  width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.half-input-container {
  display: flex;
  justify-content: space-between;
}

.half-input {
  max-width: 120px;
}

.map {
  width: 300px;
}

h2 {
  margin: 0;
  font-family: Roboto, sans-serif;
}

input {
  height: 30px;
}

input {
  border: 0;
  border-bottom: 1px solid black;
  font-size: 14px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
}
.btn {
  margin-top: 20px;
  max-width: 300px;
  padding: 10px;
}

input:focus::placeholder {
  color: white;
}
</style>


