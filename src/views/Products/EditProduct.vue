<template>
	<v-dialog width="400" v-model="dialog">
		<template v-slot:activator="{on, attrs}">
			<v-btn dark class="light-blue darken-4 mr-2" v-bind="attrs" v-on="on"
				>Edit</v-btn
			>
		</template>
		<v-card>
			<v-container>
				<v-layout row>
					<v-flex xs12>
						<v-card-title>
							<h1 class="text--primary">Edit product</h1>
						</v-card-title>
					</v-flex>
				</v-layout>
				<v-divider></v-divider>
				<v-layout row>
					<v-flex xs12>
						<v-card-text>
							<v-text-field
								label="Title"
								name="title"
								type="text"
								v-model="editedTitle"
							></v-text-field>
							<v-textarea
								label="Description"
								name="description"
								v-model="editedDescription"
							></v-textarea>
						</v-card-text>
					</v-flex>
				</v-layout>
				<v-divider></v-divider>
				<v-layout row>
					<v-flex xs12>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn dark color="light-blue darken-4" outlined @click="onCancel"
								>Cancel</v-btn
							>
							<v-btn dark color="light-blue darken-4" @click="onSave"
								>Save</v-btn
							>
						</v-card-actions>
					</v-flex>
				</v-layout>
			</v-container>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	name: 'EditProduct',
	props: ['product'],
	data() {
		return {
			dialog: false,
			editedTitle: this.product.title,
			editedDescription: this.product.description,
		}
	},
	methods: {
		onCancel() {
			this.editedTitle = this.product.title
			this.editedDescription = this.product.description
			this.dialog = false
		},
		onSave() {
			if (this.editedTitle !== '' && this.editedDescription !== '') {
				this.$store.dispatch('updateProduct', {
					title: this.editedTitle,
					description: this.editedDescription,
					id: this.product.id,
				})
				this.dialog = false
			}
		},
	},
}
</script>

<style scoped></style>
