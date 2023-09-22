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

          <h1 class="content__title">
            Заказ оформлен <span>№ {{ $store.state.orderInfo.id }}</span>
          </h1>
        </div>

        <section class="cart">
          <form class="cart__form form" action="#" method="POST">
            <div class="cart__field">
              <p class="cart__message">
                Благодарим за&nbsp;выбор нашего магазина. На&nbsp;Вашу почту
                придет письмо с&nbsp;деталями заказа. Наши менеджеры свяжутся
                с&nbsp;Вами в&nbsp;течение часа для уточнения деталей доставки.
              </p>

              <ul class="dictionary">
                <li class="dictionary__item">
                  <span class="dictionary__key"> Получатель </span>
                  <span class="dictionary__value">
                    {{ $store.state.orderInfo.name }}
                  </span>
                </li>
                <li class="dictionary__item">
                  <span class="dictionary__key"> Адрес доставки </span>
                  <span class="dictionary__value">
                    {{ $store.state.orderInfo.address }}
                  </span>
                </li>
                <li class="dictionary__item">
                  <span class="dictionary__key"> Телефон </span>
                  <span class="dictionary__value">
                    {{ $store.state.orderInfo.phone }}
                  </span>
                </li>
                <li class="dictionary__item">
                  <span class="dictionary__key"> Email </span>
                  <span class="dictionary__value">
                    {{ $store.state.orderInfo.email }}
                  </span>
                </li>
                <li class="dictionary__item">
                  <span class="dictionary__key"> Способ оплаты </span>
                  <span class="dictionary__value"> картой при получении </span>
                </li>
              </ul>
            </div>

            <div class="cart__block">
              <ul class="cart__orders">
                <li class="cart__order">
                  //дальше не выводятся данные корректно
                  <h3>{{ $store.state.orderInfo.basket.id}}</h3>
                  <b>{{ $store.state.orderInfo.totalPrice }}</b>
                  <span>Артикул: {{ $store.state.orderInfo.basket.id }}</span>
                </li>
              </ul>

              <div class="cart__total">
                <p>Доставка: <b>500 ₽</b></p>
                <p>Итого: <b></b> товара на сумму <b>37 970 ₽</b></p>
              </div>
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
export default {
  name: 'AppOrderInfoPage',

  created() {
    if (
      this.$store.state.orderInfo &&
      this.$store.state.orderInfo.id === this.$route.params.id
    ) {
      return
    }

    this.$store.dispatch('loadOrderInfo', this.$route.params.id)
  },
}
</script>

<style scoped></style>
