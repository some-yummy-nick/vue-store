<template>
	<v-container>
		<v-layout row v-if="!loading && myProducts.length !== 0">
			<v-flex xs12 sm6 offset-sm3>
				<h1 class="text--secondary mb-3">My products</h1>
				<v-card class="mb-2" v-for="product in myProducts" :key="product.id">
					<v-layout>
						<v-flex xs4>
							<v-img contain height="200" :src="product.imageSrc"></v-img>
						</v-flex>
						<v-flex xs8>
							<v-card-text>
								<h2 class="text--primary">{{ product.title }}</h2>
								<p>{{ product.description }}</p>
							</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn :to="'/product/' + product.id" color="primary"
									>Open
								</v-btn>
							</v-card-actions>
						</v-flex>
					</v-layout>
				</v-card>
			</v-flex>
		</v-layout>
		<v-layout v-else-if="!loading && myProducts.length === 0">
			<v-flex xs-12 class="text-center">
				<h1 class="text-primary">You have no products</h1>
			</v-flex>
		</v-layout>
		<v-layout v-else>
			<Loading />
		</v-layout>
	</v-container>
</template>

<script>
import Loading from '@/components/Loading'

export default {
	name: 'ProductList',
	components: {Loading},
	computed: {
		myProducts() {
			return this.$store.getters.myProducts
		},
		loading() {
			return this.$store.getters.loading
		},
	},
}
</script>

<style scoped></style>
