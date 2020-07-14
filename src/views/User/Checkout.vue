<template>
	<v-container>
		<v-layout row>
			<v-flex xs-12 class="text-center pt-5" v-if="loading">
				<Loading />
			</v-flex>
			<v-flex xs12 sm6 offset-sm3 v-else-if="!loading && orders.length !== 0">
				<h1 class="text-secondary mb-3">Orders</h1>
				<v-list two-line flat>
					<v-list-item avatar v-for="order in orders" :key="order.id">
						<v-list-item-action>
							<v-checkbox
								:input-value="order.done"
								@change="markDone(order)"
								color="success"
							></v-checkbox>
						</v-list-item-action>
						<v-list-item-content>
							<v-list-item-title>{{ order.name }}</v-list-item-title>
							<v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
						</v-list-item-content>
						<v-list-item-action>
							<v-btn :to="'/product/' + order.productId" class="primary"
								>Open
							</v-btn>
						</v-list-item-action>
					</v-list-item>
				</v-list>
			</v-flex>
			<v-flex xs-12 class="text-center" v-else>
				<h1 class="text-primary">You have no orders</h1>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	name: 'Checkout',
	computed: {
		orders() {
			return this.$store.getters.orders
		},
		loading() {
			return this.$store.getters.loading
		},
	},
	methods: {
		markDone(order) {
			this.$store
				.dispatch('markOrderDone', order.id)
				.then(() => (order.done = true))
				.catch(() => {})
		},
	},
	created() {
		this.$store.dispatch('fetchOrders')
	},
}
</script>

<style scoped></style>
