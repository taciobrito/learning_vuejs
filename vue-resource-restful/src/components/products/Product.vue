<template>
    <div>
        <h1>{{ title }}</h1>

        <div class="row">
            <div class="col">
                <router-link to="/product/create" class="btn btn-primary btn-create">
                    Cadastrar Produto
                </router-link>
            </div>

            <div class="col">
                <search @search="search"></search>
            </div>
        </div>

        <div class="alert alert-danger text-center" v-if="confirmRemove">
            <h2>Deseja realmente remover?</h2>
            <hr>
            <button class="btn btn-danger" @click.prevent="remove">Remover Agora</button>
        </div>

        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th style="width: 200px;">Ações</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(product, index) in products.data" :key="index">
                    <td>{{ product.id }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.description }}</td>
                    <td>
                        <router-link class="btn btn-info"
                            :to="{ name: 'product.edit', params: {
                                id: product.id
                            }}">
                            Editar</router-link>
                        <a href="#" @click.prevent="confirmationRemove(product.id)" class="btn btn-danger">Remover</a>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- <pagination 
            :pagination="products"
            :offset="offset"
            @paginate="getAll">
        </pagination> -->

        <ul class="pagination">
            <li v-if="products.current_page - 1 >= 1" class="page-item">
                <a href="#" @click.prevent="pagination(products.current_page - 1)" class="page-link"> Anterior </a>
            </li>
            <li v-if="products.current_page + 1 <= products.last_page" class="page-item">
                <a href="#" @click.prevent="pagination(products.current_page + 1)" class="page-link"> Próxima </a>
            </li>
        </ul>

        <preloader :preloader="preloader"></preloader>

    </div>
</template>

<script>
    import Pagination from '../general/Pagination'
    import Preloader from '../general/Preloader'
    import Search from './Search'

    export default {
        data () {
            return {
                title: 'Lista de Produtos',
                products: {
                    current_page: 1,
                    last_page: 1,
                    // total: 0,
                    // per_page: 10,
                    // from: 0,
                    // to: 0,
                    // data: []
                },
                preloader: false,
                offset: 3,
                confirmRemove: false,
                idRemove: 0,
                filter: ''
            }
        },
        created () {
            this.getAll();
        },
        methods: {
            getAll () {
                this.preloader = true;
                this.$http.get(`http://localhost:8000/api/v1/products?page=${this.products.current_page}&filter=${this.filter}`)
                    .then(response => {
                        this.products = response.body;
                    }, error => {
                        console.log(error)
                    })
                    .finally(() => this.preloader = false)
            },
            confirmationRemove (id) {
               this.confirmRemove = true
               this.idRemove = id
            },
            remove () {
                this.preloader = true

                this.$http.delete(`http://localhost:8000/api/v1/products/${this.idRemove}`)
                    .then(response => {
                        this.confirmRemove = false
                        this.idRemove = 0
                        this.getAll()
                    }, error => {
                        console.log(error)
                    })
                    .finally(() => this.preloader = false)
            },
            pagination(page) {
                this.products.current_page = page;

                this.getAll();
            },
            search (filter) {
                this.filter = filter

                this.getAll()
            }
        },
        components: {
            Pagination,
            Preloader,
            Search
        }
    }
</script>

<style scoped>
    .btn-create {
        margin: 10px;
    }
</style>
