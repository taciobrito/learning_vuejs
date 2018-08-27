<template>
	<div class="comp">
		<h1>{{ title }}</h1>
		<p>Teste</p>
		<span>Teste {{ msg }}</span>

		<form-component></form-component>
	</div>
</template>

<script>
	import FormComponent from './FormComponent'

	export default {
		data() {
			return {
				msg: 'Teste do curso',
				title: 'Test Component'
			}
		},
		components: {
			FormComponent
		}
	}
</script>

<style scoped>
	p { color: #f00; }
	.comp {
		border-color: #0f0;
	}
</style>