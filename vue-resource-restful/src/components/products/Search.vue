<template>
    <div>
        <form class="form form-inline" @submit.prevent="search">
            <input type="text" placeholder="Procurar?" class="form-control" v-model="filter">
            <button class="btn btn-default">Pesquisar</button>
        </form> 
    </div>
</template>

<script>
    export default {
        data () {
            return {
               filter: ''
            }
        },
        methods: {
            search () {
                this.$emit('search', this.filter)
            }
        }
    }
</script>

<style scoped>

</style>
