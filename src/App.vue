<template>
  <v-app>
    <Navbar />
    <template v-if="error">
      <v-snackbar
        :multi-line="true"
        :input="closeError"
        :value="true"
        :timeout="5000"
        color="error"
      >
        {{ error }}
        <v-btn dark text @click.native="closeError">Close</v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar,
  },
  computed: {
    error() {
      return this.$store.getters.error
    },
  },
  methods: {
    closeError() {
      this.$store.dispatch('clearError')
    },
  },
}
</script>

<style>
.pointer {
  cursor: pointer;
}
</style>
