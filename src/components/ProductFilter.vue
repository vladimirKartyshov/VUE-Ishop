<template>
  <div>
    <aside class="filter">
      <h2 class="filter__title">Фильтры</h2>

      <form
        class="filter__form form"
        action="#"
        method="get"
        @submit.prevent="submit"
      >
        <fieldset class="form__block">
          <legend class="form__legend">Цена</legend>
          <label class="form__label form__label--price">
            <input
              class="form__input"
              type="text"
              name="min-price"
              v-model.number="currentPriceFrom"
            />
            <span class="form__value">От</span>
          </label>
          <label class="form__label form__label--price">
            <input
              class="form__input"
              type="text"
              name="max-price"
              v-model.number="currentPriceTo"
            />
            <span class="form__value">До</span>
          </label>
        </fieldset>

        <fieldset class="form__block">
          <legend class="form__legend">Категория</legend>
          <label class="form__label form__label--select">
            <select
              class="form__select"
              type="text"
              name="category"
              v-model.number="currentCategoryId"
            >
              <option value="0">Все категории</option>
              <option
                :value="category.id"
                v-for="category in categories"
                :key="category.id"
              >
                {{ category.title }}
              </option>
            </select>
          </label>
        </fieldset>

        <fieldset class="form__block">
          <legend class="form__legend">Цвет</legend>

          <ul class="colors">
            <li
              class="colors__item"
              v-for="(color, index) in colors"
              :key="index"
            >
              <label class="colors__label">
                <input
                  v-model="currentColor"
                  class="colors__radio sr-only"
                  type="radio"
                  name="color"
                  value="#73B6EA"
                  checked=""
                />
                <span class="colors__value" :style="{backgroundColor: color}">
                </span>
              </label>
            </li>
          </ul>
        </fieldset>

        <fieldset class="form__block">
          <legend class="form__legend">Объемб в ГБ</legend>
          <ul class="check-list">
            <li
              class="check-list__item"
              v-for="description in dataSizes"
              :key="description.id"
            >
              <label class="check-list__label">
                <input
                  class="check-list__check sr-only"
                  type="checkbox"
                  name="volume"
                  value="8"
                  checked=""
                />
                <span class="check-list__desc">
                  {{ description.size }}
                  <span>{{ description.quantity }}</span>
                </span>
              </label>
            </li>
          </ul>
        </fieldset>

        <button class="filter__submit button button--primery" type="submit">
          Применить
        </button>
        <button
          class="filter__reset button button--second"
          type="button"
          @click.prevent="reset"
        >
          Сбросить
        </button>
      </form>
    </aside>
  </div>
</template>

<script>
import categories from '@/data/categories'

export default {
  name: 'AppProductFilterer',
  props: ['priceFrom', 'priceTo', 'categoryId', 'startColor'],

  data() {
    return {
      currentPriceFrom: 0,
      currentPriceTo: 0,
      currentCategoryId: 0,
      currentColor: 0,

      colors: [
        '#73b6ea',
        '#ffbe15',
        '#939393',
        '#8be000',
        '#ff6b00',
        '#fff',
        '#000',
      ],
      dataSizes: [
        {
          id: 1,
          size: 8,
          quantity: '(313)',
        },
        {
          id: 2,
          size: 16,
          quantity: '(505)',
        },
        {
          id: 3,
          size: 32,
          quantity: '(620)',
        },
        {
          id: 4,
          size: 64,
          quantity: '(711)',
        },
        {
          id: 5,
          size: 128,
          quantity: '(113)',
        },
        {
          id: 6,
          size: 256,
          quantity: '(891)',
        },
      ],
    }
  },

  computed: {
    categories() {
      return categories
    },
  },

  watch: {
    priceFrom(value) {
      this.currentPriceFrom = value
    },
    priceTo(value) {
      this.currentPriceTo = value
    },
    categoryId(value) {
      this.currentCategoryId = value
    },
    startColor(value) {
      this.currentColor = value
    },
  },

  methods: {
    // filteredColors() {
    //   return this.colors.filter((color) => {
    //     return color.indexOf(this.colors)
    //   })
    //},

    submit() {
      this.$emit('update:priceFrom', this.currentPriceFrom)
      this.$emit('update:priceTo', this.currentPriceTo)
      this.$emit('update:categoryId', this.currentCategoryId)
      this.$emit('update:startColor', this.currentColor)
    },
    reset() {
      this.$emit('update:priceFrom', 0)
      this.$emit('update:priceTo', 0)
      this.$emit('update:categoryId', 0)
      this.$emit('update:startColor', 0)
    },
  },
}
</script>

<style scoped></style>
