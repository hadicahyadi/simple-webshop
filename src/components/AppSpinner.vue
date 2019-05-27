<template>
  <div class="row">
    <div class="col">
      <div style="margin: 0 auto; width: 10px;">
        <div class="medium my-5 loader loader-circle-grey"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'spinner',
  props: ['color'],
  computed: {
    getColor () {
      return this.color
    }
  }
}
</script>
