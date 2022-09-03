<template>
  <div id="app">
    <section class="catalog">
      <app-product-list :products="products"></app-product-list>
      <app-base-pagination
        v-model="page"
        :count="countProducts"
        :per-page="productsPerPage"
      ></app-base-pagination>
    </section>
  </div>
</template>

<script>
import AppProductList from './components/ProductList.vue'
import products from './data/products'
import AppBasePagination from './components/BasePagination.vue'

export default {
  name: 'App',
  components: {
    AppProductList,
    AppBasePagination,
  },

  data() {
    return {
      page: 1,
      productsPerPage: 6,
    }
  },

  computed: {
    products() {
      const offset = (this.page - 1) * this.productsPerPage
      return products.slice(offset, offset + this.productsPerPage)
    },
    countProducts() {
      return products.length
    },
  },
}
</script>

<style></style>
