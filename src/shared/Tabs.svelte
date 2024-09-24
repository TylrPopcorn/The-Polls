<!-- TABS -->


<!-- JAVASCRIPT -->
<script>
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher(); //Custom events

    export let items;
    export let activeItem;

    //Element Keyboard Accessible
    //  elements (like <li> in this case) should be interactive not just for mouse users but also for keyboard users. 
    //  Usually, elements like buttons, links, or anything clickable should also be navigable and triggerable via the keyboard.
    const keydown = (event, item) => {
        if (event.key === 'Enter' || event.key === ' ') {
            dispatch('tabChange', item);
        }
    }
</script>


<!-- HTML -->
<div class="Tabs" id="Tabs">
    <ul>
        <!-- for each loop: -->
        {#each items as x}
            <li on:click={()=>{dispatch('tabChange', x)}} on:keydown={(event) => keydown(event, x)}>
                <!--(keydown not needed to make this work)-->
                <!-- Will set the class to 'active' if the current item is the same as 'activeItem'-->
                <div class:active={x === activeItem}>{x}</div>
            </li>
        {/each}
    </ul>
</div>

<!-- CSS -->
<style>
    #Tabs{
        --main-color: #21d91b;
    }
    
    .Tabs{
        margin-bottom: 40px;
    }

    ul{
	    display: flex;
        justify-content: center;
        padding: 0;
        list-style-type: none; /* Remove bullets in the list */
	}

    li {
        margin: 0 16px;
        font-size: 18px;
        color: #555;
        cursor: pointer;
    }

    .active{
        color: var(--main-color);
        border-bottom: 2px solid var(--main-color);
        padding-bottom: 8px;
    }
</style>