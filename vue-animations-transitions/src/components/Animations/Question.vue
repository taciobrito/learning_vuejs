<template>
    <div class="alert alert-primary">
        <h2 v-text="question"></h2>

        <div class="row">
            <div class="col-4"></div>
            <div class="col-6">
                <form @submit.prevent="checkResult" class="form form-inline">
                    <input class="form-control" type="text" placeholder="Resposta:" v-model="reply">
                    <button class="btn btn-success" type="submit">Responder</button>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data () {
        return {
            question: 'Gerando pergunta...',
            result: 0,
            reply: ''
        }
    },
    created () {
        this.generateQuestion();
    },
    methods: {
        generateQuestion() {
            var number1 = this.generateRandomNumber(1, 100);
            var number2 = this.generateRandomNumber(1, 100);

            this.result = number1 + number2;

            this.question = `Qual é o resultado da soma entre ${number1} + ${number2}?`;
        },
        generateRandomNumber (min, max) {
            return Math.round(Math.random() * (max - min)) + min;
        },
        checkResult () {
            var mode = 'answer-error';
            if (this.reply == this.result)
                mode = 'answer-success';

            this.$emit('changeMode', mode);
        }
    }
}
</script>

<style scoped>

</style>

