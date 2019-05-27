<template>
  <div class="animated fadeIn">
    <div class="border rounded bg-white p-5">
      <app-spinner v-if="isFetching"></app-spinner>
      <div class="row" v-if="!isFetching">
        <div class="col-md-6">
          <product-images
            :images="item.images">
          </product-images>
        </div>
        <div class="col-md-6">
          <h2 class="font-weight-light">{{item.name}}</h2>
          <h3 class="mt-3 font-weight-light text-muted">
            {{item.salePrice | currency}}
          </h3>
          <hr />
          <div class="clearfix">
            <div class="form-group row">
              <label class="col-sm-1 col-form-label text-muted">Qty</label>
              <div class="col-sm-3">
                <input
                  type="number"
                  class="form-control"
                  min="1"
                  v-model="quantity" />
              </div>
              <div class="col">
                <button
                  type="button"
                  class="float-right btn btn-outline-primary"
                  @click="addToCart({item, quantity})">
                  Add to chart
                </button>
              </div>
            </div>
          </div>
          <p class="text-muted text-monospace mt-4">
            {{item.shortDescription}}
          </p>
          <p>
            {{item.longDescription}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { AppSpinner, ProductImages } from '@/components/'

export default {
  name: 'product',
  data() {
    return {
      productId: this.$route.params.id,
      isFetching: false,
      quantity: 1
    }
  },
  computed: {
    ...mapState('product', {
      item: state => state.byId
    })
  },
  components: {
    AppSpinner,
    ProductImages
  },
  methods: {
    ...mapActions('cart', [
      'addToCart'
    ]),
    fetchProduct() {
      this.isFetching = true
      this.$store.dispatch('product/fetchById', this.productId).then(
        resp => this.isFetching = false
      )
    }
  },
  created() {
    this.fetchProduct()
  }
}
</script>
