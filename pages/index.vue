<template>
  <b-container fluid>
    <Search @search="search"/>
    <Scroll ref="scroll" :provider="provider" :page-size="10">
      <template v-slot:item="{ item }">
        <Card :item="item" />
      </template>
    </Scroll>
  </b-container>
</template>

<script>
import axios from 'axios'
import Card from '~/components/Card.vue'
import Search from '~/components/Search.vue'
import Scroll from '~/components/Scroll.vue'

export default {
  components: {
    Card,
    Search,
    Scroll
  },
  data() {
    return {
      language: null,
      showResult: false
    }
  },
  methods: {
    search({ language }) {
      this.language = language
      this.$refs.scroll.refresh()
    },
    async provider({ page, pageSize }, callback) {
      const { data } = await axios.get('https://api-rhd.herokuapp.com/repositories', {
          params: {
            page: page,
            per_page: pageSize,
            lang: this.language
          }
      })
      callback({
        result: data.rows,
        hits: data.count
      })
    }
  }
}
</script>
