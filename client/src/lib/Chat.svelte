<script lang="ts">
  import SendForm from "@/lib/SendForm.svelte";
  import { name, show_users, users } from "@/stores";
  import { reload_page } from "@/utils";
  import { Socket, io } from "socket.io-client";
  import { onMount } from "svelte";
  import Menu from "./Menu.svelte";
  import Messages from "./Messages.svelte";
  import Users from "./Users.svelte";

  let my_message_text = "";
  let messages: message[] = [];

    
    const socket: Socket<server_to_client_events, client_to_server_events> = io();

    onMount(() => {
        socket.emit("login", $name);
    });

    socket.on("message", (msg) => {
        messages = [...messages, msg]

    });

    socket.on("users", (_users) => {
        $users = _users;
    }); 


    socket.on("disconnect", reload_page)

    function send_message() {
		socket?.emit("message", {
			user_name: $name,
			text: my_message_text,
			bot: false,
		});
		my_message_text = "";
	}
</script>

<Menu/>
{#if $show_users}
    <Users/>
{:else}
    <Messages bind:messages/>
    <SendForm bind:my_message_text {send_message} />
{/if}
