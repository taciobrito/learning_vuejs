<template>
	<div>
		<h2>{{ title }}</h2>

		<ul>
			<li v-for="(item, index) in items" :key="index">{{ item }}</li>
		</ul>
	</div>
</template>

<script>
	
	export default {
		props: {
			title: {
				required: true,
				type: String,
				default: ''
			},
			items: {
				required: true,
				type: Array,
				default: []
			}
		}
	}
</script>

<style scoped>
	
</style>
