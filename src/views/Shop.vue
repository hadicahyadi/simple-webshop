<template>
  <div class="animated fadeIn">
    <app-spinner v-if="isFetching"></app-spinner>
    <div class="d-flex flex-md-nowrap flex-wrap justify-content-md-between justify-content-center">
      <div
        class="animated fadeIn"
        v-for="product in products" :key="product.id" v-if="!isFetching">
        <product-card
          :title="product.name"
          :product-id="product.id"
          :price="product.salePrice"
          :img="getProductImage(product)">
        </product-card>
      </div>
    </div>
  </div>
</template>
<script>
import { ProductCard, AppSpinner } from '@/components/'
import { mapState } from 'vuex'

export default {
  name: 'shop-page',
  data () {
    return {
      isFetching: false
    }
  },
  computed: {
    ...mapState('product', {
      products: state => state.list
    })
  },
  components: {
    ProductCard,
    AppSpinner
  },
  methods: {
    getProductImage(product) {
      return product.images.find((item) => item.isMain === true).url
    },
    fetchProduct() {
      this.isFetching = true
      this.$store.dispatch('product/fetchAll').then(
        resp => {
          this.isFetching = false
        }
      )
    },
    product(selectedItem) {
      this.$route.go({name: 'Product', params: {id: selectedItem.id}})
    }
  },
  created() {
    this.fetchProduct()
  }
}
</script>
