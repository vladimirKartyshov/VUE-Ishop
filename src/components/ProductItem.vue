<template>
  <div>
    <li class="catalog__item">
      <a class="catalog__pic" href="#">
        <img :src="product.image" />
      </a>
      <h3 class="catalog__title">
        <a href="#"> {{ product.title }}</a>
      </h3>
      <span class="catalog__price"> {{ product.price }}</span>
      <ul class="colors colors--black">
        <li class="colors__item" v-for="color in product.colors" :key="color">
          <label class="colors__label">
            <input
              class="colors__radio sr-only"
              name="color"
              type="radio"
              value="color"
            />
            <span class="colors__value" :style="{backgroundColor: color}">
            </span>
          </label>
        </li>
      </ul>
    </li>
  </div>
</template>

<script>
export default {
  name: 'AppProductItem',
  data() {
    return {}
  },

  props: ['product'],
}
</script>

<style></style>
