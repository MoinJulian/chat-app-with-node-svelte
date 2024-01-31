<script lang="ts">
    import { io } from "socket.io-client";

    const socket = io();

    socket.on("message", (msg) => {
        console.log(msg);
    });

    let txt: String;

    function handle_submission() {
        socket.emit("message", {
            user_name: "emil",
            text: txt,
            bot: false,
        });
    }
</script>

<h1>Svelte Chat App</h1>

<form on:submit|preventDefault={handle_submission}>
    <input type="text" bind:value={txt}>
    <button>Send</button>
</form>