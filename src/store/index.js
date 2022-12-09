import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {API_BASE_URL} from '../config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartProducts: [],
  },

  userAccessKey: null,

  cartProductsData: [],

  mutations: {
    addProductToCart(state, {productId, amount}) {
      const item = state.cartProducts.find(
        (item) => item.productId === productId
      )
      if (item) {
        item.amount += amount
      } else {
        state.cartProducts.push({
          productId,
          amount,
        })
      }
    },
    updateCartProductAmount(state, {productId, amount}) {
      const item = state.cartProducts.find(
        (item) => item.productId === productId
      )
      if (item) {
        item.amount = amount
      }
    },
    deletCartProduct(state, productId) {
      state.cartProducts = state.cartProducts.filter(
        (item) => item.productId !== productId
      )
    },
    updateUserAccessKey(state, accessKey) {
      state.userAccessKey = accessKey
    },
    updateCartProductsData(state, itmes) {
      state.cartProductsData = itmes
    },
    syncCartProducts(state) {
      state.cartProducts = state.cartProductsData.map((item) => {
        return {
          productId: item.product.id,
          amount: item.quantity,
        }
      })
    },
  },

  getters: {
    cartDetailProducts(state) {
      return state.cartProducts.map((item) => {
        const product = state.cartProductsData.find(
          (p) => p.product.id === item.productId
        ).product

        return {
          ...item,
          product: {
            ...product,
            image: product.image.file.url
          }
        }
      })
    },
    cartTotalPrice(state, getters) {
      return getters.cartDetailProducts.reduce(
        (acc, item) => item.product.price * item.amount + acc,
        0
      )
    },
  },

  actions: {
    loadCart(context) {
      axios
        .get(API_BASE_URL + '/baskets', {
          params: {
            userAccessKey: context.state.userAccessKey,
          },
        })
        .then((response) => {
          if (!context.state.userAccessKey) {
            localStorage.setItem('userAccessKey', response.data.user.accessKey)
            context.commit('updateUserAccessKey', response.data.user.accessKey)
          }

          context.commit('updateCartProductsData', response.data.itmes)
          context.commit('syncCartProducts')
        })
    },
  },
})
