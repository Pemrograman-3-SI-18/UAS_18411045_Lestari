<template>
<div class="q-pa-md">
  <span class="text-weight-bold">Berikan Rating Untuk Bubu Fish</span>
  <div class="q-gutter-y-md column">
    <q-rating
      v-model="ratingModel"
      size="3.5em"
      color="blue"
      icon="star_border"
      icon-selected="star_border"
      />
    <q-space/>
    <q-btn color="teal" label="Beri Penilaian"/>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      ratingModel: 1
    }
  }
}
</script>

<style scoped>

</style>
