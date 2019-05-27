<template>
  <div class="card" style="width: 18rem;">
    <img :src="img" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">
        <router-link class="text-decoration-none" :to="{name: 'Product', params: {id: productId} }" >
          {{title}}
        </router-link>
      </h5>
      <p class="card-text">{{price | currency}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'product-card',
  props: ['title', 'price', 'img', 'productId']
}
</script>
