<template>
  <b-container fluid>
    <Search @search="search"/>
    <hr />
    <Scroll ref="scroll" :provider="provider" :page-size="100">
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
      showResult: false
    }
  },
  methods: {
    search({ language }) {
      this.$refs.scroll.refresh()
    },
    provider({ page, pageSize }, callback) {
      axios.get(`https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=${pageSize}&page=${page}`)
        .then(({ data }) => {
          callback({
            result: data.items,
            hits: data.total_count
          })
        })
    }
  }
}
</script>
