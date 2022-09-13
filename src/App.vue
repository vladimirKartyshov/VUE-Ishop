<template>
  <div id="app">
    <main class="content container">
      <div class="content__top content__top--catalog">
        <h1 class="content__title">Каталог</h1>
        <span class="content__info"> 152 товара </span>
      </div>

      <div class="content__catalog">
        <app-product-filter
          :price-from.sync="filterPriceFrom"
          :price-to.sync="filterPriceTo"
          :category-id.sync="filterCategoryId"
          :start-color.sync="startColor"
        ></app-product-filter>

        <section class="catalog">
          <app-product-list :products="products"></app-product-list>

          <app-base-pagination
            v-model="page"
            :count="countProducts"
            :per-page="productsPerPage"
          ></app-base-pagination>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import AppProductList from './components/ProductList.vue'
import products from './data/products'
import AppBasePagination from './components/BasePagination.vue'
import AppProductFilter from './components/ProductFilter.vue'

export default {
  name: 'App',
  components: {
    AppProductList,
    AppBasePagination,
    AppProductFilter,
  },

  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      startColor: 0,

      // startColors: [],

      page: 1,
      productsPerPage: 6,
    }
  },

  computed: {
    filteredProducts() {
      let filteredProducts = products

      if (this.filterPriceFrom > 0) {
        filteredProducts = filteredProducts.filter(
          (product) => product.price > this.filterPriceFrom
        )
      }
      if (this.filterPriceTo > 0) {
        filteredProducts = filteredProducts.filter(
          (product) => product.price < this.filterPriceTo
        )
      }
      if (this.filterCategoryId > 0) {
        filteredProducts = filteredProducts.filter(
          (product) => product.categoryId === this.filterCategoryId
        )
      }
      if (this.startColor && this.startColor.length) {
        filteredProducts = filteredProducts.filter(
          (product) => product.colors.indexOf(this.startColor) > -1
        )
      }
    //   sortCollor() {
    //   for (let i = 0; i < this.products.length; i++) {
    //     this.startColors.push(this.products[i].color);
    //   }
    //   this.startColors = Array.from(new Set(this.startColors));

    //  }
      
      return filteredProducts
    },
    products() {
      const offset = (this.page - 1) * this.productsPerPage
      return this.filteredProducts.slice(offset, offset + this.productsPerPage)
    },
    countProducts() {
      return this.filteredProducts.length
    },
  },
}
</script>

<style></style>
