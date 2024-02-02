<script lang="ts">
    export let my_message_text = "";
    export let send_message = () => {};
</script>

<form on:submit|preventDefault={send_message}>
    <input type="text" bind:value={my_message_text} required>
    <button>Send message</button>
</form>