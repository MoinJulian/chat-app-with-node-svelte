<script lang="ts">
    export let show_users = false;
</script>

<button on:click={() => show_users = !show_users}>
    {#if show_users}
        Show Chat
    {:else}
        Show Users
    {/if}
</button>