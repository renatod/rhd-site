<template>
  <section>
    <nuxt-link :to="`/${item.id}`">{{ item.fullName }}</nuxt-link>
    <p>{{ item.description }}</p>
    <ul>
      <li v-if="item.license">{{ item.license }}</li>
      <li v-if="item.language"><FontAwesomeIcon :icon="icons.faCircle" /> {{ item.language }}</li>
      <li v-if="item.stargazers"><FontAwesomeIcon :icon="icons.faStar" /> {{ item.stargazers }}</li>
      <li v-if="item.forks"><FontAwesomeIcon :icon="icons.faCodeBranch" /> {{ item.forks }}</li>
    </ul>
  </section>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar, faCodeBranch, faCircle } from '@fortawesome/free-solid-svg-icons'

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      icons: {
        faStar,
        faCodeBranch,
        faCircle
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  section {
    padding: 10px;
    background: #fafafa;
    margin-bottom: 10px;
    border-bottom: 1px solid #eeeeee;

    > ul {
      list-style: none;
      margin: 0;
      padding: 0;

      > li {
        display: inline;
        margin-right: 5px;
        font-size: 12px;
      }
    }
  }
</style>