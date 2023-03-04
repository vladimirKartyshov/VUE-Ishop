<template>
  <div>
    <main class="content container">
      <main class="content container" v-if="productLoading">
        <app-spinner />
      </main>

      <div class="content__top">
        <ul class="breadcrumbs">
          <li class="breadcrumbs__item">
            <router-link
              tag="button"
              class="breadcrumbs__link"
              :to="{name: 'main'}"
            >
              Каталог
            </router-link>
          </li>
          <li class="breadcrumbs__item">
            <a class="breadcrumbs__link"> Корзина </a>
          </li>
        </ul>

        <h1 class="content__title">Корзина</h1>
        <span class="content__info">
          Кол-во товаров
          {{ $store.state.cartProducts.length }}
        </span>
      </div>

      <section class="cart">
        <form class="cart__form form" action="#" method="POST">
          <div class="cart__field">
            <ul class="cart__list">
              <app-cart-item
                :item="item"
                v-for="item in products"
                :key="item.productId"
              />
            </ul>
          </div>

          <div class="cart__block">
            <p class="cart__desc">
              Мы&nbsp;посчитаем стоимость доставки на&nbsp;следующем этапе
            </p>
            <p class="cart__price">
              Итого: <span>{{ totalPrice | numberFormat }}</span>
            </p>

            <router-link
              tag="button"
              :to="{name: 'order'}"
              class="cart__button button button--primery"
              type="submit"
            >
              Оформить заказ
            </router-link>
          </div>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
import numberFormat from '@/helpers/numberFormat'
import {mapGetters} from 'vuex'
import AppSpinner from '@/components/Spinner.vue'
import AppCartItem from '@/components/CartItem.vue'

export default {
  name: 'AppCartPage',
  components: {AppCartItem, AppSpinner},

  data() {
    return {
      productLoading: false,
    }
  },

  filters: {numberFormat},

  computed: {
    ...mapGetters({
      products: 'cartDetailProducts',
      totalPrice: 'cartTotalPrice',
    }),
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

<style scoped></style>
