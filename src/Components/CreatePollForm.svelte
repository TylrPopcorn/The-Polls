<!-- CREATE POLL FORM -->

<!-- JAVASCRIPT -->
<script>
    ///imports:---------
    import Button from "../shared/Button.svelte";
    import PollStore from "../stores/pollStore.js"; //Global data
    import {createEventDispatcher} from "svelte"; //remote event
    let dispatch = createEventDispatcher();

    //variables:----
    let errors = {question: "", answerA: "", answerB: ""};
    let fields = {question: "", answerA: "", answerB: ""};
    let valid = false; //will determine if the form below is valid or not.

    //functions:--
    const submitHandler = function(){
        //Will handle submit process on form below.
        valid = true;

        //Question must be more than 5 characters long.
        //AnswerA cannot be empty.
        //AnswerB cannot be empty.


        //Validate question:
        if (fields.question.trim().length < 5){
            //Not valid.
            valid = false; //reset the value
            errors.question = ("Question must be longer than 5 characters.");
        } else {
            errors.question = (""); //reset value
        }

        //Validate answer A:
        if (fields.answerA.trim().length < 1){
            valid = false //reset value
            errors.answerA = ("Answer A cannot be empty");
        } else {
            errors.answerA = ("");  //reset value
        }

        //Validate answer B:
        if (fields.answerB.trim().length < 1){
            valid = false //reset value
            errors.answerB = ("Answer B cannot be empty");
        } else {
            errors.answerB = ("");  //reset value
        }

        //Add new poll
        if (valid) {
            let poll = {...fields, votesA: 0, votesB: 0, id: Math.random()}
            //save data to global store
            PollStore.update(currentPolls=>{
                return [poll, ...currentPolls];
            })
            dispatch('add');
        }
    }
</script>


<!-- HTML -->
 <form on:submit|preventDefault={submitHandler}>
    <!-- input 1-->
    <div class="form-field">
        <label for="question">Poll Question</label>
        <input type="text" id="question" bind:value={fields.question}>
        <div class="error">{errors.question}</div>
    </div>
    <!-- input 2-->
    <div class="form-field">
      <label for="answer-a">Answer A:</label>
     <input type="text" id="answer-a" bind:value={fields.answerA}>
     <div class="error">{errors.answerA}</div>
    </div>
    <!-- input 3-->
    <div class="form-field">
       <label for="answer-b">Answer B:</label>
       <input type="text" id="answer-b" bind:value={fields.answerB}>
       <div class="error">{errors.answerB}</div>
    </div>
    <!-- component -->
    <Button type="secondary" flat={true}>Add Poll</Button>
 </form>

<!-- CSS -->
<style>
    form {
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }
    .form-field{
        margin: 18px auto;
    }
    input {
        width: 100%;
        border-radius: 6px;
    }
    label {
        margin: 10px auto;
        text-align: left;
    }
    .error{
        color: rgb(204, 5, 5);
        font-weight: light;
        font-size: 12px;
    }
</style>