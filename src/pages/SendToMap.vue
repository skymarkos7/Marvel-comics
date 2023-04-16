<template>
  <div style="width: 60%; height: 700px" ref="page"></div>
</template>


<script>
export default {
  data() {
    return {};
  },
  mounted: function () {
    const page = this.$refs.page;
    const iframe = document.createElement("iframe");
    iframe.src = "/pages/index.html";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.onload = () => {
      const pageDocument = iframe.contentDocument;
      const head = pageDocument.querySelector("head");
      const body = pageDocument.querySelector("body");
      const style = document.createElement("link");
      style.rel = "stylesheet";
      style.type = "text/css";
      style.href = "/pages/style.css";
      head.appendChild(style);
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "/pages/script.js";
      body.appendChild(script);
    };
    page.appendChild(iframe);
  },
  methods: {},
};
</script>


