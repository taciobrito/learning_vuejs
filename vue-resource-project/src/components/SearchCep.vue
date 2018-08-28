<template>
    <div>
        <h1>{{ title }}</h1>

        <form @submit.prevent="buscaCep">
            <input type="text" placeholder="Informe o CEP: " v-model="cep">
            <button type="submit">Buscar CEP</button>
        </form>

        <div v-show="preloader">
            <img src="../assets/loading.gif" alt="Carregando....">
        </div>

        <div>
            <p v-show="address != ''"><strong>Bairro: </strong> {{ address.bairro }}</p>
            <p v-show="address != ''"><strong>Cidade: </strong> {{ address.cidade }}</p>
            <p v-show="address != ''"><strong>Logradouro: </strong> {{ address.logradouro }}</p>
            <p v-show="address != ''"><strong>Cep: </strong> {{ address.cep }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            title: 'Busca Cep com Vue JS',
            cep: '',
            address: '',
            preloader: false
        }
    },
    methods: {
        buscaCep () {
            this.preloader = true;

            this.$http.get('https://api.postmon.com.br/v1/cep/'+ this.cep)
                .then(response => {
                    this.address = response.body
                }, error => {
                    console.log(error)
                })
                .finally(() => {
                    this.preloader = false;
                })
        }
    }

    // https://api.postmon.com.br/v1/cep/
}
</script>

<style scoped>

</style>


