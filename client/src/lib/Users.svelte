<script lang="ts">
  import { users } from "@/stores";

    
</script>

<h2>Users</h2>

{#each $users as user}
    <p>{user.name}</p>
{/each}