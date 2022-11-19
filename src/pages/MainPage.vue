<template>
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
        <div v-if="productsLoading">
          <div class="spinner-container">
            <div class="spinner"></div>
          </div>
          <h3 class="textloadcolor">Загрузка товаров....</h3>
        </div>
        <div v-if="productsLoadingFailed">
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
import axios from 'axios'
import {API_BASE_URL} from '../config'

export default {
  name: 'AppMainPage',
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

      page: 1,
      productsPerPage: 6,

      productsData: null,

      productsLoading: false,
      productsLoadingFailed: false,
    }
  },

  computed: {
    // filteredProducts() {
    //   let filteredProducts = products

    //   if (this.filterPriceFrom > 0) {
    //     filteredProducts = filteredProducts.filter(
    //       (product) => product.price > this.filterPriceFrom
    //     )
    //   }
    //   if (this.filterPriceTo > 0) {
    //     filteredProducts = filteredProducts.filter(
    //       (product) => product.price < this.filterPriceTo
    //     )
    //   }
    //   if (this.filterCategoryId > 0) {
    //     filteredProducts = filteredProducts.filter(
    //       (product) => product.categoryId === this.filterCategoryId
    //     )
    //   }
    //   if (this.startColor && this.startColor.length) {
    //     filteredProducts = filteredProducts.filter(
    //       (product) => product.colors.indexOf(this.startColor) > -1
    //     )
    //   }

    //   return filteredProducts
    // },

    products() {
      //код для вывода из локальных данных
      // const offset = (this.page - 1) * this.productsPerPage
      // return this.filteredProducts.slice(offset, offset + this.productsPerPage)

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
      // return this.filteredProducts.length

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
      }, 2000)
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
.spinner-container {
  width: 100%;
  height: 100%;
  z-index: 99999;
  text-align: center;
  background-color: #ffffff;
  position: fixed;
}
.spinner {
  margin: auto;
  border: 6px solid #dbf2ff;

  width: 62px;
  height: 62px;
  display: inline-block;
  position: absolute;
  top: -5%;
  left: 20%;
  border-radius: 50%;
  border-right: 6px solid #018df7;
  text-align: center;
  animation-name: spin;
  animation-duration: 900ms;
  animation-iteration-count: infinite;
  /*animation-timing-function: linear; /*linear spin */
  animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67);
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  50% {width:24px;height:24px} /*shrinking effect
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  /* 50% {width:24px;height:24px} shrinking effect */
  100% {
    -webkit-transform: rotate(360deg);
  }
}

.textloadcolor {
  color: #018df7;
}
</style>
