<script lang="ts">
    import { name } from "@/stores";
    let name_input = "";

    function handle_login() {
        $name = name_input;
    }
</script>

<section aria-label="login">
    <form on:submit|preventDefault={handle_login}>
        <label for="name_input">Choose a name</label>
        <input type="text" id="name_input" bind:value={name_input} required>
        <button>Start the chat</button>
    </form>
</section>

<style lang="scss">
    @use "../scss/breakpoints" as *;
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        padding: 1rem;
        @media (min-width: $md) {
            flex-direction: row;
        }
    }

    label {
        white-space: nowrap;
    }
</style>