<template>
  <div class="product-images">
    <div class="border">
      <img class="mw-100" :src="currentImg" />
    </div>
    <div class="mt-4 thumbnails">
      <img
        class="border w-25 mr-2"
        :class="{ 'border-primary': image.url === currentImg }"
        v-for="(image, index) in images" :key="index"
        :src="image.url"
        @click="setMain(image)" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'product-images',
  props: ['images'],
  data() {
    return {
      list: this.images,
      currentImg: ''
    }
  },
  methods: {
    setMain(image) {
      let img = this.list.find(item => item.url === image.url)
      this.currentImg = img.url
    }
  },
  created() {
    this.currentImg = this.list.find(item => item.isMain === true).url
  }
}
</script>
