<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Comics Marvel </q-toolbar-title>

        <a
          class="link"
          target="_blanck"
          href="https://www.linkedin.com/in/skymarkos7/"
          ><div>Marcos Lourenço</div></a
        >
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> options </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Comics",
    caption: "Comics Marvel",
    icon: "menu_book",
    link: "#",
    target: "_self",
  },
  {
    title: "Search",
    caption: "Search comics",
    icon: "search",
    link: "#/search",
    target: "_self",
  },
  {
    title: "Sent ",
    caption: "Sent comics saved",
    icon: "send",
    link: "#/sent",
    target: "_self",
  },
  {
    title: "Github",
    caption: "Repository",
    icon: "code",
    link: "https://github.com/skymarkos7/Marvel-comics",
    target: "_self",
  },
];

export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      dado: "ssss",
    };
  },

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style scoped>
.link {
  text-decoration: none;
  color: white;
}
</style>
