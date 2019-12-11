<template>
  <section>
    <div v-for="(item, index) in items" :key="index">
      <slot name="item" :item="item" />
    </div>
    <slot v-if="busy" name="busy">
      <div class="text-center text-primary my-2">
        <b-spinner class="align-middle" />
        <strong>Aguarde...</strong>
      </div>
    </slot>
  </section>
</template>

<script>
import _ from 'lodash'

export default {
  props: {
    pageSize: {
      type: Number,
      required: false,
      default: 10
    },
    provider: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      busy: false,
      page: 1,
      items: [],
      hits: null,
      padding: 30
    }
  },
  computed: {
    done() {
      return this.page > 1 && this.page > this.totalPages
    },
    totalPages() {
      return Math.ceil(this.hits / this.pageSize)
    }
  },
  mounted() {
    this.scroll()
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    load() {
      if (!this.done && !this.busy) {
        this.busy = true
        this.provider({
          page: this.page,
          pageSize: this.pageSize
        }, ({ hits, result }) => {
          this.hits = hits
          this.items = _.concat(this.items, result)
          this.busy = false
          this.page++
          this.scroll()
        })
      }
    },
    scroll() {
      const { pageYOffset, outerHeight } = window
      const distance = window.document.body.scrollHeight - (pageYOffset + outerHeight)
      if (distance <= this.padding) {
        this.load()
      }
    },
    onScroll: _.debounce(function () {
      this.scroll()
    }, 100),
    refresh() {
      this.items = []
      this.page = 1
      this.load()
    }
  }
}
</script>
