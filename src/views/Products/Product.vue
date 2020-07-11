<template>
  <v-container>
    <section class="product elevation-4">
      <v-layout row wrap>
        <v-flex xs12 lg6>
          <img
            class="product__image"
            src="https://image.ibb.co/fZzq1o/Lenovo_Legion_Y520.jpg"
            alt=""
          />
        </v-flex>
        <v-flex xs12 lg6>
          <div class="product__info">
            <div class="product__title display-1 mb-3">Lorem ipsum.</div>
            <p class="product__category title">
              <span class="product__title">Vendor: </span>lorem
            </p>
            <p class="product__price title">
              <span class="product__title">Price: </span>$ 1000
            </p>
            <p class="product__color title">
              <span class="product__title">Color: </span>
              <span
                class="product__color-bg"
                :title="'purple'"
                :style="{backgroundColor: 'purple'}"
              ></span>
            </p>
            <p class="title">
              <span class="product__title">Material: </span>lorem
            </p>
            <div class="title mb-5">
              <p class="product__title mb-2">Description:</p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
              totam?
            </div>
            <v-btn color="primary" class="headline mr-2">Edit</v-btn>
            <v-btn color="primary" class="headline">Buy</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </section>
  </v-container>
</template>

<script>
export default {
  name: 'Product',
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
.product {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 100px;
  padding: 30px;
  border: 1px solid #1c77ad;

  &__image {
    height: 100%;
    width: 550px;
    margin-right: 50px;
  }

  &__title {
    font-size: 1.6rem;
    font-weight: 700;
    color: #1875d0;
    margin-bottom: 0;
  }

  &__price {
    color: red;
  }

  &__color {
    &-bg {
      display: inline-block;
      width: 50px;
      height: 20px;
      border: 1px solid #2b2b2b;
      border-radius: 10px;
    }
  }
}
</style>
