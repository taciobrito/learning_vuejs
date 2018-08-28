<template>
	<div>
		<h1>{{ title }}</h1>

		<div class="row">
			<div class="col-6">
				<form class="form form-inline">
					<input type="text" placeholder="Encontrar?" class="form-control" v-model="filter">
				</form>
			</div>

			<div class="col-6">
				<form class="form form-inline" @submit.prevent="onSubmit">
					<input type="text" placeholder="Nome Tarefa" class="form-control" v-model="task.name">

					<button type="submit" class="btn btn-primary">Salvar</button>
				</form>
			</div>
		</div>

		<table class="table table-striped table-hover">
			<thead>
				<tr>
					<th style="width: 80px">ID</th>
					<th>Nome</th>
					<th style="width: 200px">Ações</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(task, index) in filteredItems" :key="index">
					<td>{{ task.id }}</td>
					<td>{{ task.name }}</td>
					<td>
						<a href="#" @click.prevent="edit(task.id)" class="btn btn-info">Editar</a>
						<a href="#" @click.prevent="remove(task.id)" class="btn btn-danger">Deletar</a>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	
	export default {
		data() {
			return {
				title: 'Lista de Tarefas',
				tasks: [],
				task: {
					id: '',
					name: ''
				},
				updating: false,
				updateIndex: '',
				filter: ''
			}
		},
		methods: {
			onSubmit () {
				if (this.updating) this.update()
					else this.save()
			},
			save () {
				this.task.id = this.tasks.length + 1;
				this.tasks.push(this.task);
				this.clearForm();
			},
			edit (id) {
				this.updateIndex = this.findIndexItem(id);
				this.task = this.tasks[this.updateIndex];
				this.updating = true;
			},
			update () {
				this.tasks[this.updateIndex] = this.task;
				this.updating = false;
				this.clearForm();
			},
			clearForm () {
				this.task = {
					id: '',
					name: ''
				};
			},
			remove (id) {
				this.tasks.splice(this.findIndexItem(id), 1);
			},
			findIndexItem (id) {
				for (var index in this.tasks) {
					if (this.tasks[index].id == id)
						return index;
				}
			}
		},
		computed: {
			filteredItems () {
				if (this.filter === '')
					return this.tasks;

				var vm = this;
				// return this.tasks.filter(task => {
				// 	return task.name.indexOf(vm.filter) > -1;
				// });

				return this.tasks.filter(task => {
					return task.name.toLowerCase().indexOf(vm.filter.toLowerCase()) > -1;
				});

				// return this.tasks.filter(task => {
				// 	return task['name'].includes(vm.filter);
				// });
			}
		}
	}
</script>

<style scoped>
	form {
		margin: 20px 0px;
	}
</style>