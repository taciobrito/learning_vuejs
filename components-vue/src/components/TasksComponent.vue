<template>
	<div>
		<h1>{{ title }}</h1>

		<input type="text" v-model="task">
		<button @click.prevent="callParent">Chamar Pai</button>

		<ul>
			<li v-for="(item, index) in items" :key="index">{{ item }}</li>
		</ul>
	</div>
</template>

<script>
	
	export default {
		props: ['items', 'title'],
		data() {
			return {
				task: ''
			}
		},
		methods: {
			callParent () {
				this.$emit('calledParent', this.task)

				this.task = ''
			}
		}
	}
</script>

<style scoped>
	
</style>
