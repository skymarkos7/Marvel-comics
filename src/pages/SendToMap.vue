<template>
  <div>
    <div ref="map" style="height: 400px"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SendToMap",
  data() {
    return {
      map: null,
      marker: null,
    };
  },
  mounted: function () {
    // Crie o mapa do Google Maps
    this.map = new google.maps.Map(this.$refs.map, {
      center: { lat: -33.8688, lng: 151.2093 },
      zoom: 13
    });

    // Adicione um marcador ao mapa
    this.marker = new google.maps.Marker({
      position: { lat: -33.8688, lng: 151.2093 },
      map: this.map
    });

    // Adicione um evento de clique ao marcador
    this.marker.addListener("click", () => {
      // Obtenha o endereço do marcador
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ location: this.marker.getPosition() }, (results, status) => {
        if (status === "OK") {
          if (results[0]) {
            // Exiba o endereço em um alerta
            alert(results[0].formatted_address);
          }
        } else {
          console.log("Geocode failed: " + status);
        }
      });
    });
  },
});
</script>
