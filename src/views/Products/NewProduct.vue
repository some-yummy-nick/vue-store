<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create new product</h1>
        <v-form ref="form" v-model="valid" lazy-validation class="mb-3">
          <v-text-field
            label="Title"
            name="title"
            type="text"
            required
            v-model="title"
            :rules="[v => !!v || 'Title is required']"
          ></v-text-field>
          <v-text-field
            label="Vendor product"
            name="vendor"
            type="text"
            v-model="vendor"
          ></v-text-field>
          <v-text-field
            label="Color product"
            name="color"
            type="text"
            v-model="color"
          ></v-text-field>
          <v-text-field
            label="Material product"
            name="material"
            type="text"
            v-model="material"
          ></v-text-field>
          <v-text-field
            label="Price product"
            name="price"
            type="text"
            v-model="price"
            required
            :rules="[v => !!v || 'Price is required']"
          ></v-text-field>
          <v-textarea
            label="Description product"
            name="description"
            v-model="description"
          ></v-textarea>
        </v-form>
        <v-layout class="mb-3">
          <v-flex xs12>
            <v-btn color="warning">
              Upload
              <v-icon right dark>mdi-cloud-upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <img src="" alt="" height="200" />
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <v-switch
              color="primary"
              v-model="promo"
              label="Add to promo?"
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="createProduct" :disabled="!valid"
              >Create product</v-btn
            >
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'NewProduct',
  data() {
    return {
      title: '',
      vendor: '',
      description: '',
      price: 0,
      color: '',
      material: '',
      promo: false,
      valid: false,
    }
  },
  methods: {
    createProduct() {
      if (this.$refs.form.validate()) {
        const product = {
          title: this.title,
          vendor: this.vendor,
          description: this.description,
          price: this.price,
          color: this.color,
          material: this.material,
          promo: this.promo,
        }
      }
    },
  },
}
</script>

<style scoped></style>
