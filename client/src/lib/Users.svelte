<script lang="ts">
    export let users: user[] = [];
</script>

<h2>Users</h2>

{#each users as user}
    <p>{user.name}</p>
{/each}