<template>
    <div>
        <h2 v-text="title"></h2>

        <!-- <app-question @changeMode="changeMode"></app-question> -->
        <transition name="effect" mode="out-in">
            <component 
                :is="mode" 
                @changeMode="changeMode">
            </component>
        </transition>
    </div>
</template>


<script>
import Question from './Question';
import AnswerSuccess from './AnswerSuccess';
import AnswerError from './AnswerError';

export default {
    data () {
        return {
            title: 'Quiz',
            mode: 'app-question'
        }
    },
    methods: {
        changeMode (mode) {
            this.mode = mode == undefined ? 'app-question' : mode;
        }
    },
    components: {
        'app-question': Question,
        AnswerSuccess,
        AnswerError,
    }
}
</script>

<style scoped>
    .effect-leave-active {
        animation: effect-out 1s;
    }

    .effect-enter-active {
        animation: effect-in 1s;
    }

    @keyframes effect-out {
        from {
            transform: rotateY(0deg);
        } to {
            transform: rotateY(90deg);
        }
    }

    @keyframes effect-in {
        from {
            transform: rotateY(90deg);
        } to {
            transform: rotateY(0deg);
        }
    }
</style>

