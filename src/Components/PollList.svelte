<!-- POLL LIST -->


<!-- JAVASCRIPT -->
<script>
    //imports:-----
    import {fade,scale} from "svelte/transition"; //smooth transitions
    import {flip} from "svelte/animate";

    import PollDetails from "./PollDetails.svelte";
    import PollStore from "../stores/pollStore.js"; //global data.
    // import {onMount, onDestroy} from "svelte";

    //Exports:-----------
    //export let polls = [];


    //Alternative way to use global data:
    //----------------------------------
    // const unsub = PollStore.subscribe((dataFromStore)=>{
    //     //Will pass updated data from the PollStore to here
    //     polls = dataFromStore;
    // })
    
    // onDestroy(()=>{
    //     //Each time this component gets destroyed from the page.
    //     unsub(); //un-subscribe from global data.
    // })
    
</script>

<!-- HTML -->
<div class="poll-list">
    <!-- Loop through all polls array -->
    <!-- How to get global data and loop through it -->
    {#each $PollStore as p (p.id)}
     <!-- smooth transition -->
        <div in:fade out:scale|local animate:flip={{duration: 500}}>
            <!-- component -->
             <!-- Will output details of each individual poll -->
            <PollDetails poll={p}/>
        </div>
    {/each}
</div>

<!-- CSS -->
<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>