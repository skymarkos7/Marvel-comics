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

        <q-toolbar-title>
          Comics Marvel
        </q-toolbar-title>

        <a class="link" target="_blanck" href="https://www.linkedin.com/in/skymarkos7/"><div>Marcos Lourenço</div></a>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Navegue
        </q-item-label>

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
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Comics',
    caption: 'Comics Marvel',
    icon: 'menu_book',
    link: '#/ComicsPage',
    target:"_self"

  },
  {
    title: 'Share',
    caption: 'Shared with friends',
    icon: 'record_voice_over',
    link: '#',
    target:"_self"
  },
  {
    title: 'Favorites',
    caption: 'The best comics',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
    target:"_self"
  },
  {
    title: 'Search',
    caption: 'Search comics',
    icon: 'search',
    link: '#',
    target:"_self"
  },
  {
    title: 'Github',
    caption: 'Repository',
    icon: 'code',
    link: 'https://github.com/skymarkos7/Marvel-comics',
    target:"_self"
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style scoped>
.link{
  text-decoration: none;
  color: white;
}
</style>
