<template>
    <div>
        <h1>{{ title }}</h1>


        <form class="form" @submit.prevent="save">
            <div class="form-group">
                <label>Nome do Produto</label>
                <input type="text" class="form-control" :class="{ 'is-invalid': errors.name}" placeholder="Nome:" v-model="product.name">
            
                <div :class="{ 'invalid-feedback': errors.name }">
                    <p v-for="(error, index) in errors.name" :key="index">{{ error }}</p>
                </div>
            </div>

            <div class="form-group">
                <label>Descrição do Produto</label>
                <textarea class="form-control" :class="{ 'is-invalid': errors.description}" placeholder="Descrição:" v-model="product.description"></textarea>

                <div :class="{ 'invalid-feedback': errors.description }">
                    <p v-for="(error, index) in errors.description" :key="index">{{ error }}</p>
                </div>
            </div>

            <div class="form-group">
                <button type="submit" class="btn btn-success"> Salvar</button>
            </div>

        </form>

        <preloader :preloader="preloader"></preloader>
    </div>
</template>

<script>
    import Preloader from '../general/Preloader'

    export default {
        props: {
            id: {
                required: true,
                default: ''
            }
        },
        data () {
            return {
                title: 'Editar Produto',
                product: {
                    name: '',
                    description: ''
                },
                preloader: false,
                errors: []

            }
        },
        created () {
            this.get()
        },
        methods: {
            get () {
                this.preloader = true

                this.$http.get(`http://localhost:8000/api/v1/products/${this.id}`)
                    .then(response => {
                        this.product = response.body

                        console.log(this.product)
                    }, error => {
                        if (error.status === 404)
                            alert('Produto não encontrado!')

                        this.$router.push('/product')
                        console.log(error)
                    })
                    .finally(() => this.preloader = false)
            },
            save () {
                this.preloader = true

                this.$http.put(`http://localhost:8000/api/v1/products/${this.id}`)
                    .then(response => {
                        // console.log(response)
                        this.$router.push('/product')
                    }, error => {
                        if (error.status === 422) {
                            this.errors = error.body.errors
                        }
                        console.log(error)
                    })
                    .finally(() => this.preloader = false)
            }
        },
        components: {
            Preloader
        }
    }
</script>

<style scoped>

</style>
