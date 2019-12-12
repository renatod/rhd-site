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
        { value: 'JavaScript', text: 'JavaScript' },
        { value: 'Python', text: 'Python' },
        { value: 'Java', text: 'Java' },
        { value: 'PHP', text: 'PHP' },
        { value: 'Ruby', text: 'Ruby' }
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