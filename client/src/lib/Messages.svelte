<script lang="ts">
  import Message from "./Message.svelte";

    export let messages: message[] = [];
</script>

<section aria-label="messages">
    <ol>
        {#each messages as message}
             <Message {message} />
        {/each}
    </ol>
</section>

<style>
    ol {
        list-style-type: none;
    }

    section{
        padding: 0.5rem;
    }
</style>