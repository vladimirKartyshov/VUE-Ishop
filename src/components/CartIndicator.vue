<template>
  <div>
    <div>
      <main v-if="productLoading">
        <app-spinner class="loader--small" />
      </main>
      <router-link
        class="header__cart"
        :to="{name: 'cart'}"
        aria-label="Корзина с товарами"
      >
        <svg width="30" height="21" fill="currentColor">
          <use xlink:href="#icon-cart"></use>
        </svg>
        <span class="header__count" aria-label="Количество товаров"
          >{{ $store.state.cartProducts.length }}
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
import AppSpinner from '@/components/Spinner.vue'

export default {
  name: 'AppCartIndicator',
  components: {AppSpinner},

  data() {
    return {
      productLoading: false,
    }
  },

  watch: {
    '$store.state.productLoading': {
      handler() {
        this.productLoading = this.$store.state.productLoading
      },
      immediate: true,
    },
  },
}
</script>

<style scoped>
.loader--small {
  width: 30px;
  height: 30px;
  background-color: #000;
}
</style>
