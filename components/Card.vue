<template>
  <section>
    <a href="#">{{ item.full_name }}</a>
    <p>{{ item.description }}</p>
    <ul>
      <li v-if="item.license">{{ item.license.spdx_id }}</li>
      <li v-if="item.language"><FontAwesomeIcon :icon="icons.faCircle" /> {{ item.language }}</li>
      <li v-if="item.stargazers_count"><FontAwesomeIcon :icon="icons.faStar" /> {{ item.stargazers_count }}</li>
      <li v-if="item.forks_count"><FontAwesomeIcon :icon="icons.faCodeBranch" /> {{ item.forks_count }}</li>
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