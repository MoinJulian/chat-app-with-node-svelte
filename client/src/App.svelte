<script lang="ts">
  import Chat from "@/lib/Chat.svelte";
  import Header from "@/lib/Header.svelte";
  import Login from "@/lib/Login.svelte";
  import { name } from "@/stores";
</script>

<Header></Header>

{#if $name}
  <Chat></Chat>
{:else}
  <Login></Login>
{/if}