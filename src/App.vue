<template>
  <div>
    <!-- <app-main-page v-if="currentPage === 'main'" />
    <app-product-page v-else-if="currentPage === 'product'" />
    <app-not-found-page v-else /> -->

    <component
      :is="currentPageComponent"
      :page-params="currentPageParams"
      @gotoPage="(pageName, pageParams) => gotoPage(pageName, pageParams)"
    />
  </div>
</template>

<script>
import AppMainPage from './pages/MainPage.vue'
import AppProductPage from './pages/ProductPage.vue'
import AppNotFoundPage from './pages/NotFoundPage.vue'

const routes = {
  main: 'AppMainPage',
  product: 'AppProductPage',
}

export default {
  name: 'App',
  components: {AppMainPage, AppProductPage, AppNotFoundPage},

  data() {
    return {
      currentPage: 'main',
      currentPageParams: {},
    }
  },

  methods: {
    gotoPage(pageName, pageParams) {
      this.currentPage = pageName
      this.currentPageParams = pageParams || {}
    },
  },

  computed: {
    currentPageComponent() {
      return routes[this.currentPage] || 'NotFoundPage'
    },
  },
}
</script>

<style></style>
