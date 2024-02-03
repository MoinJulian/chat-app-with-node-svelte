<script lang="ts">
  import Chat from "@/lib/Chat.svelte";
  import Header from "@/lib/Header.svelte";
  import Login from "@/lib/Login.svelte";
  import { name } from "@/stores";
</script>

<svelte:head>
  <title>Svelte Chat App</title>
</svelte:head>

<Header></Header>

{#if $name}
  <Chat></Chat>
{:else}
  <Login></Login>
{/if}