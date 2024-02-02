<script lang="ts">
  import Chat from "./lib/Chat.svelte";
  import Header from "./lib/Header.svelte";
  import Login from "./lib/Login.svelte";
  import { name } from "./stores";

    // const socket: Socket<server_to_client_events, client_to_server_events> = io();

    // socket.on("message", (msg) => {
    //     console.log(msg);
    // });

    // let txt: string;

    // function handle_submission() {
    //     socket.emit("message", {
    //         user_name: "emil",
    //         text: txt,
    //         bot: false,
    //     });
    // }
</script>

<Header></Header>

{#if $name}
  <Chat></Chat>
{:else}
  <Login></Login>
{/if}