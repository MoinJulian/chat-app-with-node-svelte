<script lang="ts">
  import Messages from "@/lib/Messages.svelte";
  import SendForm from "@/lib/SendForm.svelte";
  import { io, Socket } from "socket.io-client";

  let my_message_text = "";

    
    const socket: Socket<server_to_client_events, client_to_server_events> = io();

    socket.on("message", (msg) => {
        console.log(msg);
    });


    function send_message() {
        socket.emit("message", {
            user_name: "emil",
            text: my_message_text,
            bot: false,
        });
        my_message_text = "";
    }
</script>

<Messages />

<SendForm {send_message} bind:my_message_text/>