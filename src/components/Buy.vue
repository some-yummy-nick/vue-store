<template>
	<v-dialog width="400" v-model="dialog">
		<template v-slot:activator="{on, attrs}">
			<v-btn dark class="light-blue darken-4" v-bind="attrs" v-on="on"
				>Buy</v-btn
			>
		</template>
		<v-card>
			<v-container>
				<v-layout row>
					<v-flex xs12>
						<v-card-title>
							<h3 class="text--primary">Do you want to buy it?</h3>
						</v-card-title>
					</v-flex>
				</v-layout>
				<v-divider></v-divider>
				<v-layout row>
					<v-flex xs12>
						<v-card-text>
							<v-text-field
								label="Your name"
								name="name"
								type="text"
								v-model="name"
							></v-text-field>
							<v-text-field
								label="Your phone"
								name="phone"
								v-model="phone"
							></v-text-field>
						</v-card-text>
					</v-flex>
				</v-layout>
				<v-divider></v-divider>
				<v-layout row>
					<v-flex xs12>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn flat outlined @click="onCancel" :disabled="localLoading"
								>Close
							</v-btn>
							<v-btn
								flat
								color="success"
								:disabled="localLoading"
								@click="onSave"
								:loading="localLoading"
								>Buy
							</v-btn>
						</v-card-actions>
					</v-flex>
				</v-layout>
			</v-container>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	name: 'Buy',
	props: ['product'],
	data() {
		return {
			dialog: false,
			name: '',
			phone: '',
			localLoading: false,
		}
	},
	methods: {
		onCancel() {
			this.name = ''
			this.phone = ''
			this.dialog = false
		},
		onSave() {
			if (this.name !== '' && this.phone !== '') {
				this.localLoading = true
				this.$store
					.dispatch('createOrder', {
						name: this.name,
						phone: this.phone,
						productId: this.product.id,
						ownerId: this.product.ownerId,
					})
					.finally(() => {
						this.name = ''
						this.phone = ''
						this.localLoading = false
						this.dialog = false
					})
			}
		},
	},
}
</script>

<style scoped></style>
