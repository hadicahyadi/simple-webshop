<template>
  <div class="app">
    <header class="mb-3 container">
      <div class="app-header shadow-sm">
        <img src="static/img/sw-logo-stacked.png" class="mx-auto d-block w-25 img-fluid py-5" />
      </div>
      <div class="float-right app-nav">
        <router-link to="/shop" class="link mr-4">Shop</router-link>
        <router-link class="cart btn btn-sm btn-outline-secondary" to="/cart">
          <i class="fa fa-shopping-cart"></i>&nbsp;
          <span class="badge badge-secondary">{{items.length}}</span>
        </router-link>
      </div>
    </header>
    <div class="app-body">
      <main>
        <div class="container">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'full',
  computed: {
    ...mapState('cart', [
      'items'
    ])
  }
}
</script>
