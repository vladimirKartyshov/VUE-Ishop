<template>
  <!DOCTYPE html>
  <html lang="ru">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link href="css/style.min.css" rel="stylesheet" />
      <title>Корзина</title>
    </head>

    <body>
      <main class="content container">
        <div class="content__top">
          <ul class="breadcrumbs">
            <li class="breadcrumbs__item">
              <a class="breadcrumbs__link" href="index.html"> Каталог </a>
            </li>
            <li class="breadcrumbs__item">
              <a class="breadcrumbs__link" href="cart.html"> Корзина </a>
            </li>
            <li class="breadcrumbs__item">
              <a class="breadcrumbs__link"> Оформление заказа </a>
            </li>
          </ul>

          <h1 class="content__title">Корзина</h1>
          <span class="content__info">
            {{ $store.state.cartProducts.length }}
            товара
          </span>
        </div>

        <section class="cart">
          <form
            class="cart__form form"
            action="#"
            method="POST"
            @submit.prevent="order"
          >
            <div class="cart__field">
              <div class="cart__data">
                <app-base-form-text
                  v-model="formData.name"
                  :error="formError.name"
                  title="ФИО"
                  placeholder="Введите ваше полное имя"
                />

                <app-base-form-text
                  v-model="formData.address"
                  :error="formError.address"
                  type="text"
                  title="Адрес доставки"
                  placeholder="Введите ваш адрес"
                />

                <app-base-form-text
                  v-model="formData.phone"
                  :error="formError.phone"
                  type="tel"
                  title="Телефон"
                  placeholder="Введите ваш телефон"
                />

                <app-base-form-text
                  v-model="formData.email"
                  :error="formError.email"
                  type="email"
                  title="Email"
                  placeholder="Введи ваш Email"
                />

                <app-base-form-text-area
                  v-model="formData.comment"
                  :error="formError.comment"
                  title="Комментарий к заказу"
                  placeholder="Ваши пожелания"
                />
              </div>

              <div class="cart__options">
                <h3 class="cart__title">Доставка</h3>
                <ul class="cart__options options">
                  <li class="options__item">
                    <label class="options__label">
                      <input
                        class="options__radio sr-only"
                        type="radio"
                        name="delivery"
                        value="0"
                        checked=""
                      />
                      <span class="options__value">
                        Самовывоз <b>бесплатно</b>
                      </span>
                    </label>
                  </li>
                  <li class="options__item">
                    <label class="options__label">
                      <input
                        class="options__radio sr-only"
                        type="radio"
                        name="delivery"
                        value="500"
                      />
                      <span class="options__value">
                        Курьером <b>500 ₽</b>
                      </span>
                    </label>
                  </li>
                </ul>

                <h3 class="cart__title">Оплата</h3>
                <ul class="cart__options options">
                  <li class="options__item">
                    <label class="options__label">
                      <input
                        class="options__radio sr-only"
                        type="radio"
                        name="pay"
                        value="card"
                      />
                      <span class="options__value"> Картой при получении </span>
                    </label>
                  </li>
                  <li class="options__item">
                    <label class="options__label">
                      <input
                        class="options__radio sr-only"
                        type="radio"
                        name="pay"
                        value="cash"
                      />
                      <span class="options__value">
                        Наличными при получении
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            <div class="cart__block">
              <ul class="cart__orders">
                <li
                  class="cart__order"
                  v-for="item in products"
                  :key="item.productId"
                >
                  <h3>{{ item.product.title }}</h3>
                  <b>{{ item.product.price }}</b>
                  <span>Артикул {{ item.productId }}</span>
                </li>
              </ul>

              <div class="cart__total">
                <p>Доставка: <b>500 ₽</b></p>
                <p>
                  Итого: <b>{{ products.length }}</b> товара на
                  сумму <b>{{ totalPrice }}</b>
                </p>
              </div>

              <button class="cart__button button button--primery" type="submit">
                Оформить заказ
              </button>
            </div>
            <div class="cart__error form__error-block" v-if="formErrorMessage">
              <h4>Заявка не отправлена!</h4>
              <p>
                {{ formErrorMessage }}
              </p>
            </div>
          </form>
        </section>
      </main>

      <footer class="footer">
        <div class="footer__wrapper container">
          <ul class="footer__links">
            <li>
              <a class="footer__link" href="#"> Каталог </a>
            </li>
            <li>
              <a class="footer__link" href="tel:88006009009">
                8 800 600 90 09
              </a>
            </li>
            <li>
              <a class="footer__link" href="mailto:hi@technozavrrr.com">
                hi@technozavrrr.com
              </a>
            </li>
            <li>
              <a class="footer__link" href="#"> Распродажа </a>
            </li>
            <li>
              <a class="footer__link footer__link--medium" href="#">
                Заказать звонок
              </a>
            </li>
          </ul>

          <ul class="footer__social social">
            <li class="social__item">
              <a class="social__link" href="#" aria-label="Вконтакте">
                <svg width="20" height="11" fill="currentColor">
                  <use xlink:href="#icon-vk"></use>
                </svg>
              </a>
            </li>
            <li class="social__item">
              <a class="social__link" href="#" aria-label="Инстаграм">
                <svg width="17" height="17" fill="currentColor">
                  <use xlink:href="#icon-insta"></use>
                </svg>
              </a>
            </li>
            <li class="social__item">
              <a class="social__link" href="#" aria-label="Facebook">
                <svg width="17" height="17" fill="currentColor">
                  <use xlink:href="#icon-facebook"></use>
                </svg>
              </a>
            </li>
            <li class="social__item">
              <a class="social__link" href="#" aria-label="Twitter">
                <svg width="17" height="14" fill="currentColor">
                  <use xlink:href="#icon-twitter"></use>
                </svg>
              </a>
            </li>
            <li class="social__item">
              <a class="social__link" href="#" aria-label="Telegram">
                <svg width="19" height="17" fill="currentColor">
                  <use xlink:href="#icon-telegram"></use>
                </svg>
              </a>
            </li>
          </ul>

          <p class="footer__desc">
            Все права на&nbsp;материалы, находящиеся на&nbsp;сайте, охраняются
            в&nbsp;соответствии с&nbsp;законодательством&nbsp;РФ, в&nbsp;том
            числе об&nbsp;авторском праве и&nbsp;смежных правах.
          </p>

          <ul class="footer__data">
            <li>
              <a
                class="footer__link"
                href="#"
                target="_blank"
                rel="noopener"
                type="application/pdf"
              >
                Политика конфиденциальности
              </a>
            </li>
            <li>
              <a
                class="footer__link"
                href="#"
                target="_blank"
                rel="noopener"
                type="application/pdf"
              >
                Публичная оферта
              </a>
            </li>
          </ul>

          <span class="footer__copyright"> © 2020 Технозавррр </span>
        </div>
      </footer>
    </body>
  </html>
</template>

<script>
import AppBaseFormText from '@/components/BaseFormText.vue'
import AppBaseFormTextArea from '@/components/BaseFormTextArea.vue'
import {mapGetters} from 'vuex'
import axios from 'axios'
import {API_BASE_URL} from '@/config'

export default {
  name: 'AppOrderPage',

  components: {AppBaseFormText, AppBaseFormTextArea},

  data() {
    return {
      formData: {},
      formError: {},
      formErrorMessage: '',
    }
  },

  methods: {
    order() {
      this.formError = {}
      this.formErrorMessage = ''

      axios
        .post(
          API_BASE_URL + '/orders',
          {
            ...this.formData,
          },
          {
            params: {
              userAccessKey: this.$store.state.userAccessKey,
            },
          }
        )
        .then((response) => {
          this.$store.commit('resetCart')
          this.$store.commit('updateOrderInfo', response.data)
          this.$router.push({name: 'orderInfo', params: {id: response.data.id}})
        })
        .catch((error) => {
          this.formError = error.response.data.error.request || {}
          this.formErrorMessage = error.response.data.error.message
        })
    },
  },

  computed: {
    ...mapGetters({
      products: 'cartDetailProducts',
      totalPrice: 'cartTotalPrice',
    }),
  },
}
</script>

<style></style>
