<template>
  <b-form>
    <b-form-group label="Language">
      <b-form-select v-model="language" :options="options"></b-form-select>
    </b-form-group>
    <b-button variant="outline-primary" @click="search">Load</b-button>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      language: null,
      options: [
        { value: null, text: 'All' },
        { value: 'javascript', text: 'JavaScript' },
        { value: 'python', text: 'Python' },
        { value: 'java', text: 'Java' },
        { value: 'php', text: 'PHP' },
        { value: 'ruby', text: 'Ruby' }
      ]
    }
  },
  methods: {
    search() {
      this.$emit('search', {
        language: this.language
      })
    }
  }
}
</script>