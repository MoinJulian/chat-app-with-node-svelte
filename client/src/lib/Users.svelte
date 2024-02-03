<script lang="ts">
  import { users } from "@/stores";
</script>

<section>
  <h2>Users</h2>

  <ul>
    {#each $users as user}
        <li>{user.name}</li>
    {/each}
  </ul>
</section>