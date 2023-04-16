<template>
  <button @click="data()">cammom data</button>
  <div class="row">
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
            <q-input v-model="ph" placeholder="Address" :dense="dense" />
            <q-input
              v-model="ph"
              placeholder="Apt, Suite, etc (optional)"
              :dense="dense"
            />
            <q-input v-model="ph" placeholder="City" :dense="dense" />
            <div class="half-input-container">
              <q-input
                v-model="ph"
                placeholder="state/Province"
                :dense="dense"
              />
              <q-input
                v-model="ph"
                placeholder="zip/Postal code"
                :dense="dense"
              />
            </div>
            <q-input v-model="ph" placeholder="Country" :dense="dense" />
            <button style="margin-top: 20px" class="button-cta">Send to</button>
          </div>
          <div class="map" id="gmp-map"></div>
        </div>
      </form>
    </div>

    <div style="width: 50%; min-width: 300px; height: 600px" ref="page"></div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      datas: "",
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
      console.log(mensagem); // Saída: "Olá, mundo!"
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

input:focus::placeholder {
  color: white;
}

.button-cta {
  height: 40px;
  width: 40%;
  background: #3367d6;
  color: white;
  font-size: 15px;
  text-transform: uppercase;
  font-family: Roboto, sans-serif;
  border: 0;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.48);
  cursor: pointer;
}
</style>


