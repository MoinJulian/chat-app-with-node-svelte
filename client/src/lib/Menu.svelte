<script lang="ts">
  import { reload_page } from "@/utils";

    export let show_users = false;
</script>

<menu>
    <button on:click={() => show_users = !show_users}>
        {#if show_users}
            Show Chat
        {:else}
            Show Users
        {/if}
    </button>
    <button on:click={reload_page}>Logout</button>
</menu>