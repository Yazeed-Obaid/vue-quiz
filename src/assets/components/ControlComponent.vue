<template>
  <div class="mt-16 w-1/2 text-right overflow-hidden">
    <button class="w-full border p-3 pl-8 pr-2 border-silver-dark bg-silver 
      text-white text-lg rounded-full focus:outline-none hover:bg-silver-dark 
      hover:text-white hover:font-bold"
      @click="advanceProgressBar">
      Next Question
      <i class="fas fa-arrow-right right-arrow opacity-0 ml-2"></i>
    </button>

  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex';

  import {
    mapMutations
  } from 'vuex';

  export default {
    methods: {
      ...mapGetters([
        'getQuestions',
        'getQuestionsProgress'
      ]),


      ...mapMutations([
        'incrementProgressBarWidth',
        'incrementQuestionsProgress',
        'currentQuestion',
        'setExamEnd'
      ]),
      advanceProgressBar() {
        if (this.getQuestions().length == this.getQuestionsProgress() + 1) {
          this.setExamEnd();
        } else {
          this.incrementQuestionsProgress();
          this.incrementProgressBarWidth();
          this.currentQuestion();
        }
      }
    }
  }

</script>

<style>

</style>
