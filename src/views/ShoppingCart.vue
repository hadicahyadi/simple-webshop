<template>
  <div class="animated fadeIn">
    <div class="border rounded bg-white p-5">
      <h2>Your Cart</h2>
      <div v-if="items.length">
        <ul>
          <li
            v-for="product in items"
            :key="product.productId">
            {{ product.name }} - {{ product.price | currency }} x {{ product.quantity }}
          </li>
        </ul>
        <p>Total: {{ total | currency }}</p>
        <hr />
        <button
          type="button"
          class="btn btn-primary"
          @click="checkout">
          Checkout
        </button>
      </div>
      <div v-if="!items.length && !checkouted">
        <span>Cart is empty, lets add some product !</span>
      </div>
      <span class="ml-4 text-primary" v-show="checkouted">Success !</span>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'shopping-cart',
  data() {
    return {
      checkouted: false
    }
  },
  computed: {
    ...mapState('cart', [
      'items'
    ]),
    ...mapGetters('cart', {
      total: 'getTotalPrice'
    })
  },
  methods: {
    checkout() {
      this.$store.dispatch('cart/checkout').then(
        resp => this.checkouted = true
      )
    }
  }
}
</script>
