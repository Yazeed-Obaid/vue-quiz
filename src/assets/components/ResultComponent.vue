<template>
  <div class="result-card max-w-sm rounded-full overflow-hidden shadow-lg p-24 bg-keppel text-platinum text-4xl">
    Score: {{score}}%
  </div>
</template>

<script>
  import {
    mapGetters
  } from "vuex";

  export default {
    data: () => ({
      score: 0
    }),
    methods: {
      ...mapGetters(["getUserAnswers", "getCorrectAnswers", "getQuestions"])
    },
    created() {
      let numOfQuestions = this.getQuestions().length;
      let correctAnswers = this.getCorrectAnswers();
      let userAnswers = this.getUserAnswers();

      let cumulative = 0;
      for (let questionId in correctAnswers) {
        if (
          userAnswers.hasOwnProperty(questionId) &&
          userAnswers[questionId] === correctAnswers[questionId]
        ) {
          cumulative++;
        }
      }

      this.score = (cumulative / numOfQuestions) * 100;
    }
  };

</script>

<style>
</style>
