export default {
  incrementProgressBarWidth: (state) => {
    if (state.questionsProgress < state.questions.length) {
      state.progressBarWidth += (100 / state.questions.length);
    }
  },
  incrementQuestionsProgress: (state) => {
    if (state.questionsProgress < state.questions.length) {
      state.questionsProgress++;
    }
  },
  currentQuestion: (state) => {
    state.currentQuestion = state.questions[state.questionsProgress];
  },
  setExamEnd: (state) => {
    state.isExamEnd = true;
    state.progressBarWidth = 100;
  },
  setQuestionAnswer: (state, payload) => {
    state.answers[payload.questionId] = payload.optionId
  }
}
