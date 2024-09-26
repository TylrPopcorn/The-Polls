<!-- POLL DETAILS -->


<!-- JAVASCRIPT-->
<script>
    //imports:-----
    import Card from "../shared/Card.svelte";
    import PollStore from "../stores/pollStore.js";
    import Button from "../shared/Button.svelte";

    import { tweened } from "svelte/motion"; //tween (smooth transitions)

    //exports:------------
    export let poll;

    //reactive values:--------------
    $: totalVotes = poll.votesA + poll.votesB;
    $: percentA = Math.floor(100 / totalVotes * poll.votesA) || 0;
    $: percentB = Math.floor(100 / totalVotes * poll.votesB) || 0;

    //variables:-------------------------------
    const tweenedA = tweened(0);
    const tweenedB = tweened(0);
    $: tweenedA.set(percentA);
    $: tweenedB.set(percentB);

    //functions:----------------------------
    const handleVote = (option, id) => {
		//Will handle vote changes for corresponding data incoming
		//----------------------------------------------------
         PollStore.update(currentPolls=>{
            let copiedPolls = [...currentPolls];
            let upvotedPoll = copiedPolls.find((item)=>{
                   return item.id == id;
            })
              if (option === 'a'){
                upvotedPoll.votesA++; //Add 1 to the value.
            } else if (option === 'b'){
                upvotedPoll.votesB++; //Add 1 to the value.
              }

                return copiedPolls;
            })

	}

    const handleDelete = (id) =>{
        //Will handle delete after delete button is clicked
        //---------------------------------------------
        PollStore.update(currentPolls=>{
            return currentPolls.filter(poll=>{
                poll.id != id
            })
        })
    }

     //Element Keyboard Accessible
    //  elements (like <li> in this case) should be interactive not just for mouse users but also for keyboard users. 
    //  Usually, elements like buttons, links, or anything clickable should also be navigable and triggerable via the keyboard.
    const keydown = (event, item) => {}
</script>

<!-- HTML -->
<Card>
    <div class="poll">
        <h3>{poll.question}</h3>
        <p>Total Votes: {totalVotes}</p>
        <!-- answer 1 -->
        <div class="answer" on:click={()=>{handleVote('a', poll.id)}} on:keydown={(event) => keydown()}>
            <div class="percent percent-a" style="width: {$tweenedA}%"></div>
            <span>{poll.answerA} ({poll.votesA})</span>
        </div>
        <!-- answer 2 -->
        <div class="answer" on:click={()=>{handleVote('b', poll.id)}} on:keydown={(event) => keydown()}>
            <div class="percent percent-b" style="width: {$tweenedB}%"></div>
            <span>{poll.answerB} ({poll.votesB})</span>
        </div>
        <div class="delete">
            <Button flat={true} on:click={()=>{handleDelete(poll.id)}}>Delete</Button>
        </div>
    </div>
</Card>

<!-- CSS -->
<style>
    h3 {
        margin: 0 auto;
        color: #555;
    }
    p {
        margin-top: 6px;
        font-size: 14px;
        color: #aaa;
        margin-bottom: 30px;
    }
    .answer {
        background: #fafafa;
        cursor: pointer;
        margin: 10px auto;
        position: relative;
    }
    .answer:hover {
        opacity: 0.6;
    }
    span{
        display: inline-block;
        padding: 10px 20px;
    }
    .percent {
        height: 100%;
        position: absolute;
        box-sizing: border-box;
    }
    .percent-a{
        background: rgba(217,27,66,0.2);
        border-left: 4px solid red;
    }
    .percent-b{
        background: rgba(69,196,150,0.2);
        border-left: 4px solid green;
    }
    .delete {
        margin-top: 30px;
        text-align: center;
    }
</style>