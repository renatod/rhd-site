<template>
  <b-container>
    <h3>Details</h3>
    <Card :item="item" />
    <nuxt-link to="/">Back</nuxt-link>
  </b-container>
</template>

<script>
import axios from 'axios'
import Card from '~/components/Card.vue'

export default {
  components: {
    Card
  },
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  asyncData({ params, error }) {
    return axios
      .get(`https://api-rhd.herokuapp.com/repositories/${params.id}`)
      .then(({ data }) => {
        return {
          item: data
        }
      })
  }
}
</script>