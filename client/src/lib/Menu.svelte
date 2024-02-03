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