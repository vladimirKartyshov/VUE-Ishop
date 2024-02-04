<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">Каталог</h1>
      <span class="content__info"> 152 товара </span>
    </div>

    <div class="content__top content__top--catalog">
      <h1>Выбор кол-ва товаров на странице</h1>
      <button class="butt" @click.prevent="loadProducts9()">9</button>
      <button class="butt" @click.prevent="loadProducts18()">18</button>
      <button class="butt" @click.prevent="loadProducts27()">27</button>
    </div>

    <div class="content__catalog">
      <app-product-filter
        :price-from.sync="filterPriceFrom"
        :price-to.sync="filterPriceTo"
        :category-id.sync="filterCategoryId"
        :start-color.sync="startColor"
      ></app-product-filter>

      <section class="catalog">
        <div v-if="productsLoading">
          <app-spinner />
          <h3 class="textloadcolor">Загрузка товаров....</h3>
        </div>
        <div class="textloadcolor" v-if="productsLoadingFailed">
          Произошла ошибка при загрузке!!!
          <button class="trybtn" @click.prevent="loadProducts">
            Try again
          </button>
        </div>

        <app-product-list :products="products"></app-product-list>

        <app-base-pagination
          v-model="page"
          :count="countProducts"
          :per-page="productsPerPage"
        ></app-base-pagination>
      </section>
    </div>
  </main>
</template>

<script>
import AppProductList from '@/components/ProductList.vue'
import AppBasePagination from '@/components/BasePagination.vue'
import AppProductFilter from '@/components/ProductFilter.vue'
import AppSpinner from '@/components/Spinner.vue'
import axios from 'axios'
import {API_BASE_URL} from '../config'

export default {
  name: 'AppMainPage',
  components: {
    AppProductList,
    AppBasePagination,
    AppProductFilter,
    AppSpinner,
  },

  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      startColor: 0,

      page: 1,
      productsPerPage: 6,
      productsPerPage9: 9,
      productsPerPage18: 18,
      productsPerPage27: 27,

      productsData: null,

      productsLoading: false,
      productsLoadingFailed: false,
    }
  },

  computed: {
    products() {
      return this.productsData
        ? this.productsData.data.items.map((product) => {
            return {
              ...product,
              image: product.image.file.url,
            }
          })
        : []
    },
    countProducts() {
      return this.productsData ? this.productsData.data.pagination.total : 0
    },
  },

  methods: {
    loadProducts() {
      this.productsLoading = true
      this.productsLoadingFailed = false
      clearTimeout(this.loadProductsTimer)
      this.loadProductsTimer = setTimeout(() => {
        axios
          .get(API_BASE_URL + '/products', {
            params: {
              page: this.page,
              limit: this.productsPerPage,
              categoryId: this.filterCategoryId,
              minPrice: this.filterPriceFrom,
              maxPrice: this.filterPriceTo,
              colorId: this.startColor,
            },
          })
          .then((response) => (this.productsData = response))
          .catch(() => (this.productsLoadingFailed = true))
          .then(() => (this.productsLoading = false))
      }, 1000)
    },
    loadProducts9() {
      this.productsLoading = true
      this.productsLoadingFailed = false
      clearTimeout(this.loadProductsTimer)
      this.loadProductsTimer = setTimeout(() => {
        axios
          .get(API_BASE_URL + '/products', {
            params: {
              page: this.page,
              limit: this.productsPerPage9,
              categoryId: this.filterCategoryId,
              minPrice: this.filterPriceFrom,
              maxPrice: this.filterPriceTo,
              colorId: this.startColor,
            },
          })
          .then((response) => (this.productsData = response))
          .catch(() => (this.productsLoadingFailed = true))
          .then(() => (this.productsLoading = false))
      }, 1000)
    },
    loadProducts18() {
      this.productsLoading = true
      this.productsLoadingFailed = false
      clearTimeout(this.loadProductsTimer)
      this.loadProductsTimer = setTimeout(() => {
        axios
          .get(API_BASE_URL + '/products', {
            params: {
              page: this.page,
              limit: this.productsPerPage18,
              categoryId: this.filterCategoryId,
              minPrice: this.filterPriceFrom,
              maxPrice: this.filterPriceTo,
              colorId: this.startColor,
            },
          })
          .then((response) => (this.productsData = response))
          .catch(() => (this.productsLoadingFailed = true))
          .then(() => (this.productsLoading = false))
      }, 1000)
    },
    loadProducts27() {
      this.productsLoading = true
      this.productsLoadingFailed = false
      clearTimeout(this.loadProductsTimer)
      this.loadProductsTimer = setTimeout(() => {
        axios
          .get(API_BASE_URL + '/products', {
            params: {
              page: this.page,
              limit: this.productsPerPage27,
              categoryId: this.filterCategoryId,
              minPrice: this.filterPriceFrom,
              maxPrice: this.filterPriceTo,
              colorId: this.startColor,
            },
          })
          .then((response) => (this.productsData = response))
          .catch(() => (this.productsLoadingFailed = true))
          .then(() => (this.productsLoading = false))
      }, 1000)
    },
  },

  created() {
    this.loadProducts()
  },

  watch: {
    page() {
      this.loadProducts()
    },
    filterPriceFrom() {
      this.loadProducts()
    },
    filterPriceTo() {
      this.loadProducts()
    },
    filterCategoryId() {
      this.loadProducts()
    },
    startColor() {
      this.loadProducts()
    },
  },
}
</script>

<style scoped>
.trybtn {
  background-color: #9eff00;
  border: 1px solid #9eff00;
  font-family: 'PressStart';
  color: #222;
  font-size: 20px;
  margin-left: 70px;
  height: 45px;
  cursor: pointer;
}

.textloadcolor {
  color: #018df7;
}

.butt {
  height: 40px;
  width: 40px;
  color: #fff;
  background-color: #222;
  margin-left: 4px;
}
</style>
