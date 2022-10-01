<template>
  <div>
    <router-link
      class="header__cart"
      :to="{name: 'cart'}"
      aria-label="Корзина с товарами"
    >
      <svg width="30" height="21" fill="currentColor">
        <use xlink:href="#icon-cart"></use>
      </svg>
      <span class="header__count" aria-label="Количество товаров">{{
        $store.state.cartProducts.length
      }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'AppCartIndicator',
}
</script>

<style scoped></style>
