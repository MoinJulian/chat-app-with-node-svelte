<script lang="ts">
    export let my_message_text = "";
    export let send_message = () => {};
</script>

<form on:submit|preventDefault={send_message}>
    <input aria-label="your message" type="text" bind:value={my_message_text} required>
    <button>Send message</button>
</form>

<style lang="scss">
    @use "../breakpoints" as *;
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: var(--bg-color-2);
        padding: 1rem;
        @media (min-width: $md) {
            flex-direction: row;
        }
    }

    input {
        flex-grow: 1;
    }
</style>