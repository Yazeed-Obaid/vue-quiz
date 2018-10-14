export default {
  getQuestions: (state) => {
    return state.questions;
  },
  getProgressBarWidth: (state) => {
    return state.progressBarWidth;
  },
  getCurrentQuestion: (state) => {
    return state.currentQuestion;
  },
  getQuestionsProgress: (state) => {
    return state.questionsProgress;
  },
  isExamEnd: (state) => {
    return state.isExamEnd;
  },
  getCorrectAnswers: (state) => {
    return state.correctAnswers;
  },
  getUserAnswers: (state) => {
    return state.answers;
  }
}
