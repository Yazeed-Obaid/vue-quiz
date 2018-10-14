<template>
  <div class="w-full h-full flex flex-col justify-center items-center bg-platinum font-Abel">

    <div class="absolute w-10 h-full ml-4 border border-silver border-l-8 border-r-8 
    opacity-25 pin-l ml-20"></div>

    <template v-if="!isExamEnd()">
      <progress-bar-component :progressBarWidth="getProgressBarWidth()"></progress-bar-component>
      <question-component :question="getCurrentQuestion()" :questionId="getCurrentQuestion()['id']"></question-component>
      <control-component></control-component>
    </template>

    <template v-else-if="isExamEnd()">
      <result-component></result-component>
    </template>

  </div>
</template>

<script>
  import ProgressBarComponent from './assets/components/ProgressBarComponent.vue';
  import QuestionComponent from './assets/components/QuestionComponent.vue';
  import ControlComponent from './assets/components/ControlComponent.vue';
  import ResultComponent from './assets/components/ResultComponent.vue';

  import {
    mapGetters
  } from 'vuex';

  import {
    mapMutations
  } from 'vuex';


  export default {

    name: "app",
    components: {
      ProgressBarComponent,
      QuestionComponent,
      ControlComponent,
      ResultComponent
    },
    data: () => ({

    }),
    methods: {
      ...mapGetters([
        'getQuestions',
        'getProgressBarWidth',
        'getCurrentQuestion',
        'getPuestionsProgress',
        'getCorrectAnswers',
        'isExamEnd'
      ]),

      ...mapMutations([
        'incrementProgressBarWidth',
        'incrementQuestionsProgress',
        'currentQuestion'
      ])
    },
    created() {
      this.currentQuestion();
    }
  };

</script>

<style lang="sass">
  @import './assets/sass/main.scss'

</style>
