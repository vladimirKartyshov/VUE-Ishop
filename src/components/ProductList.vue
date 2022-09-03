<template>
  <div>
    <ul class="catalog__list">
      <app-product-item
        :product="product"
        v-for="(product, index) in products"
        :key="index"
      ></app-product-item>
    </ul>
  </div>
</template>

<script>
import AppProductItem from './ProductItem.vue'

export default {
  name: 'AppProductList',
  components: {AppProductItem},
  props: {
    products: [],
  },
  data() {
    return {}
  },
}
</script>

<style></style>
