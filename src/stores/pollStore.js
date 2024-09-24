//POLLSTORE

//imports:---
import { writable } from "svelte/store";

//variables:-------
const PollStore = writable([
  //polls
  {
    id: 1,
    question: "Python or JavaScript?",
    answerA: "Python",
    answerB: "JavaScript",
    votesA: 9,
    votesB: 15,
  },
]);

//exports:----------------------
export default PollStore;
