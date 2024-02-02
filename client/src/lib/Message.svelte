<script lang="ts">
    export let message: message;
</script>

<li class:bot={message.bot}>
    {#if "user_name" in message}
         <span>{message.user_name}:</span>
    {/if}
    <span>{message.text}</span>
</li>

<style>
    .bot {
        font-weight: bold;
    }
</style>