<template>
  <div>
    <ul class="catalog__list" v-for="(product, index) in products" :key="index">
      <app-product-item :product="product" />
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
