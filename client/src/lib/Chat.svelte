<script lang="ts">
  import SendForm from "@/lib/SendForm.svelte";
  import { name } from "@/stores";
  import { reload_page } from "@/utils";
  import { io, Socket } from "socket.io-client";
  import { onMount } from "svelte";
  import Messages from "./Messages.svelte";

  let my_message_text = "";
  let messages: message[] = [];

    
    const socket: Socket<server_to_client_events, client_to_server_events> = io();

    onMount(() => {
        socket.emit("login", $name);
    });

    socket.on("message", (msg) => {
        messages = [...messages, msg]
    });

    socket.on("users", (users) => {
        console.table(users);
    }); 


    socket.on("disconnect", reload_page)

    function send_message() {
        socket.emit("message", {
            user_name: $name,
            text: my_message_text,
            bot: false,
        });
        my_message_text = "";
    }
</script>

<Messages {messages}/>

<SendForm {send_message} bind:my_message_text/>