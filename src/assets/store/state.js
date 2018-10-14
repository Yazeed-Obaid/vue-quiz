import questions from './../../data';

export const state = {
  questions: questions,
  answers: {},
  correctAnswers: {
    1: 3,
    2: 3
  },
  progressBarWidth: 0,
  questionsProgress: 0,
  currentQuestion: {},
  isExamEnd: false,
}
