<!-- BUTTON -->

<!-- JAVASCRIPT -->
<script>
    export let type = 'primary';
    export let flat = false;
    export let inverse = false;
</script>

<!-- HTML -->
<button class={type} class:flat={flat} class:inverse={inverse} on:click>
    <!-- slot allows us to pass things into them as children.-->
    <slot></slot>
</button>

<!-- CSS -->
<style>
    button{
        border:0;
        cursor: pointer;
        border-radius: 6px;
        padding: 8px 12px;
        font-weight: bold;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.2)
    }
    .primary{
        background: #21d91b;
        color: white;
    }
    .secondary{
        background: #000000;
        color: rgb(255, 255, 255);
    }
    .flat{
        box-shadow: none;
    }
    .primary.inverse{
        color: #21d91b;
        background: white;
        border: 2px solid #21d91b;
    }
    .secondary.inverse{
        color: #000000;
        background: white;
        border: 2px solid #21d91b;
    }
</style>