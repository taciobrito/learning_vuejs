<template>
	<div class="comp">
		<h1>{{ title }}</h1>
		<form action="">
			<div>
				<label for="usuario">Usuário</label>
				<input type="text" name="usuario" v-model="usuario">
			</div>
			<div>
				<label for="senha">Senha</label>
				<input type="password" name="senha">
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Meu formulário',
				usuario: 'tacio.brito'
			}
		}
	}
</script>

<style scoped>
	form div {
		margin: 10px

	}
	.comp {
		border-color: #ff0;
	}
</style>