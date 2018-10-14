<template>
  <div class="w-1/2 h-auto rounded overflow-hidden shadow-lg p-2 bg-keppel">

    <h2 class="capitalize text-3xl mb-10 p-10 text-platinum border-platinum border-b-2">
      {{question['title']}}
    </h2>

    <template v-for="option in question.options">
      <option-component :option="option" :questionId="questionId" v-on:picked="getAnswer(option.id)" :questionChange="questionChange">
      </option-component>
    </template>

  </div>
</template>

<script>
  import OptionComponent from './OptionComponent.vue';
  import {
    mapMutations
  } from 'vuex';

  export default {
    props: ['question', 'questionId'],
    components: {
      OptionComponent
    },
    data: () => ({
      questionChange: false
    }),
    methods: {
      ...mapMutations([
        'setQuestionAnswer'
      ]),
      getAnswer(optionId) {
        this.setQuestionAnswer({
          'questionId': this.questionId,
          'optionId': optionId
        });
      }
    },
    watch: {
      question: (newQuestion, oldQuestion) => {
        if (newQuestion.id != oldQuestion.id) {
          this.questionChange = true;
        }
      }
    }
  }

</script>

<style>

</style>
