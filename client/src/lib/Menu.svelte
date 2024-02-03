<script lang="ts">
  import { show_users } from "@/stores";
  import { reload_page } from "@/utils";
</script>

<menu>
    <button on:click={() => $show_users = !$show_users}>
        {#if $show_users}
            Show Chat
        {:else}
            Show Users
        {/if}
    </button>
    <button on:click={reload_page}>Logout</button>
</menu>

<style>
    menu {
        padding: 0.75rem;
        display: flex;
        gap: 0.5rem;
        align-items: flex-start;
        justify-content: flex-end;
        border-bottom: 0.1rem solid var(--seperator-color);
    }
</style>