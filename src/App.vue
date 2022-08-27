<template>
  <div id="app">
    <section class="catalog">
      <app-product-list :products="products" />

      <ul class="catalog__pagination pagination">
        <li class="pagination__item">
          <a
            class="pagination__link pagination__link--arrow pagination__link--disabled"
            aria-label="Предыдущая страница"
          >
            <svg width="8" height="14" fill="currentColor">
              <use xlink:href="#icon-arrow-left"></use>
            </svg>
          </a>
        </li>
        <li class="pagination__item">
          <a class="pagination__link pagination__link--current"> 1 </a>
        </li>
        <li class="pagination__item">
          <a class="pagination__link" href="#"> 2 </a>
        </li>
        <li class="pagination__item">
          <a class="pagination__link" href="#"> 3 </a>
        </li>
        <li class="pagination__item">
          <a class="pagination__link" href="#"> 4 </a>
        </li>
        <li class="pagination__item">
          <a class="pagination__link" href="#"> ... </a>
        </li>
        <li class="pagination__item">
          <a class="pagination__link" href="#"> 10 </a>
        </li>
        <li class="pagination__item">
          <a
            class="pagination__link pagination__link--arrow"
            href="#"
            aria-label="Следующая страница"
          >
            <svg width="8" height="14" fill="currentColor">
              <use xlink:href="#icon-arrow-right"></use>
            </svg>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import AppProductList from './components/ProductList.vue'
import products from './data/products'

export default {
  name: 'App',
  components: {
    AppProductList,
  },
  data() {
    return {
      products,
    }
  },
}
</script>

<style></style>
