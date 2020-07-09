<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              contain
              v-for="product in products"
              :key="product.id"
              :src="product.imageSrc"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex sm-6 md-4 v-for="product in products" :key="product.id">
          <v-card class="mx-auto" max-width="300">
            <router-link
              :aria-label="product.title"
              :to="'/product/' + product.id"
            >
              <v-img contain height="350px" :src="product.imageSrc"></v-img>
            </router-link>
            <v-card-title primary-title>
              <div>
                <h3 class="card__heading heading">{{ product.title }}</h3>
                <div class="card__describe">
                  <p class="subheading">
                    {{ product.description.substring(0, 60) }}...
                  </p>
                  <p class="subheading card__price">
                    <span class="title">Price:</span>${{ product.price }}
                  </p>
                </div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                dark
                color="light-blue darken-4 rounded-pill"
                outline
                :to="'/product/' + product.id"
                >Description</v-btn
              >
              <v-btn dark color="light-blue darken-4 rounded-pill"
                >Add to cart</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      products: [
        {
          id: '1',
          title: 'Lenovo Legion Y520',
          vendor: 'Lenovo',
          color: 'black',
          material: 'metal/plastic',
          description:
            'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/1000Gb HDD/DVD нет/NVIDIA GeForce GTX 1050, 4096 МБ/Wi-Fi/Bluetooth/Win 10 Home',
          price: 760,
          promo: false,
          imageSrc: 'https://image.ibb.co/fZzq1o/Lenovo_Legion_Y520.jpg',
        },
        {
          id: '2',
          title: 'Asus FX503VD',
          vendor: 'Asus',
          color: 'white',
          material: 'plastic',
          description:
            'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/256Gb SSD/DVD нет/NVIDIA GeForce GTX 1050/Wi-Fi/Bluetooth/Windows 10 Home',
          price: 984,
          promo: true,
          imageSrc: 'https://image.ibb.co/cpScgo/ASUS_FX503_VD.jpg',
        },
      ],
    }
  },
}
</script>

<style scoped>
.card__heading {
  font-weight: 700;
  word-wrap: break-word;
  text-align: center;
  margin-bottom: 1.5rem;
}

.card__describe {
  margin-top: auto;
  padding-left: 1rem;
}

.card__price {
  color: #c00f1b;
  font-size: 18px;
}
</style>
