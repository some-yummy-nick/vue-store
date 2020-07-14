<template>
	<v-container>
		<section class="product elevation-4" v-if="!loading">
			<v-layout row wrap>
				<v-flex xs12 lg6 style="min-height: 300px;">
					<img class="product__image" :src="product.imageSrc" alt="" />
				</v-flex>
				<v-flex xs12 lg6>
					<div class="product__info">
						<div class="product__title display-1 mb-3">{{ product.title }}</div>
						<p class="product__category title">
							<span class="product__title">Vendor: </span
							>{{
								product.vendor.charAt(0).toUpperCase() +
								product.vendor.substring(1)
							}}
						</p>
						<p class="product__price title">
							<span class="product__title">Price: </span>$ {{ product.price }}
						</p>
						<p class="product__color title">
							<span class="product__title">Color: </span>
							<span
								class="product__color-bg"
								:title="product.color"
								:style="{backgroundColor: product.color}"
							></span>
						</p>
						<p class="title">
							<span class="product__title">Material: </span
							>{{
								product.material.charAt(0).toUpperCase() +
								product.material.substring(1)
							}}
						</p>
						<div class="title mb-5">
							<p class="product__title mb-2">Description:</p>
							{{ product.description }}
						</div>
						<EditProduct :product="product" v-if="isOwner" />
						<Buy :product="product" />
					</div>
				</v-flex>
			</v-layout>
		</section>
		<section class="text-center pt-5" v-else>
			<Loading />
		</section>
	</v-container>
</template>

<script>
import EditProduct from './EditProduct'

export default {
	name: 'Product',
	components: {EditProduct},
	props: ['id'],
	computed: {
		product() {
			const id = this.id
			return this.$store.getters.productById(id)
		},
		loading() {
			return this.$store.getters.loading
		},
		isOwner() {
			return this.product.ownerId === this.$store.getters.user.id
		},
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

	@media screen and (max-width: 1270px) {
		text-align: center;
	}

	@media screen and (max-width: 620px) {
		text-align: left;

		&__image {
			width: 100%;
			object-fit: contain;
		}

		&__title {
			text-align: center;
		}
	}
}
</style>
