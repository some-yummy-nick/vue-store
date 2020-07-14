<template>
	<div>
		<div v-if="!loading">
			<v-container fluid>
				<v-layout row>
					<v-flex xs12>
						<v-carousel>
							<v-carousel-item
								contain
								v-for="product in promoProducts"
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
									class="light-blue darken-4 mr-2"
									outlined
									:to="'/product/' + product.id"
									>Description
								</v-btn>
								<Buy :product="product" />
							</v-card-actions>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
		</div>
		<div v-else>
			<v-container>
				<v-layout row>
					<v-flex xs12 class="text-center pt-5">
						<Loading />
					</v-flex>
				</v-layout>
			</v-container>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
	computed: {
		loading() {
			return this.$store.getters.loading
		},
		promoProducts() {
			return this.$store.getters.promoProducts
		},
		products() {
			return this.$store.getters.products
		},
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
