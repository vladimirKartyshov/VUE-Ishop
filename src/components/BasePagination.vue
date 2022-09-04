<template>
  <div>
    <ul class="catalog__pagination pagination">
      <li class="pagination__item">
        <a
          class="pagination__link pagination__link--arrow pagination__link--disabled"
          href="#"
          aria-label="Предыдущая страница"
        >
          <svg width="8" height="14" fill="currentColor">
            <use xlink:href="#icon-arrow-left"></use>
          </svg>
        </a>
      </li>
      <li
        class="pagination__item"
        v-for="pageNumber in pages"
        :key="pageNumber"
      >
        <a
          href="#"
          class="pagination__link"
          :class="{'pagination__link--current': pageNumber === page}"
          @click.prevent="paginate(pageNumber)"
        >
          {{ pageNumber }}
        </a>
      </li>
      <li class="pagination__item"> 
        <a
          class="pagination__link pagination__link--arrow"
          href="#"
          aria-label="Следующая страница"
          @click="changePage(currentPage)"
        >
          {{ currentPage }}
          <svg width="8" height="14" fill="currentColor">
            <use xlink:href="#icon-arrow-right"></use>
          </svg>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppBasePagination',
  model: {
    prop: 'page',
    event: 'paginate',
  },

  data() {
    return {
      currentPage: this.page,
    }
  },

  props: {
    page: Number,
    count: Number,
    perPage: Number,
  },

  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage)
    },
  },

  methods: {
    paginate(page) {
      this.$emit('paginate', page)
    },
    changePage() {
      this.currentPage = this.currentPage + 1
    },
  },
}
</script>

<style scoped>
.pagination__link--current {
  color: blueviolet;
}
</style>
