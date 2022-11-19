<template>
  <div>
    <li class="catalog__item">
      <router-link
        class="catalog__pic"
        :to="{name: 'product', params: {id: product.id}}"
      >
        <img :src="product.image" />
      </router-link>
      <h3 class="catalog__title">
        <a href="#"> {{ product.title }}</a>
      </h3>
      <span class="catalog__price"> {{ product.price | numberFormat }} р</span>
      <ul class="colors colors--black">
        <li
          class="colors__item"
          v-for="(color, idx) in product.colors"
          :key="idx"
        >
          <label class="colors__label">
            <input
              class="colors__radio sr-only"
              name="color"
              type="radio"
              :value="color.code"
              :id="color.id"
            />
            <span class="colors__value" :style="{backgroundColor: color.code}">
            </span>
          </label>
        </li>
      </ul>
    </li>
  </div>
</template>

<script>
import numberFormat from '@/helpers/numberFormat'

export default {
  name: 'AppProductItem',

  props: ['product'],

  data() {
    return {}
  },

  filters: {
    numberFormat,
  },
}
</script>

<style></style>
