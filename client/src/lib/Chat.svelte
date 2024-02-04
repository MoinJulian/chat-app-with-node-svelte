<script lang="ts">
  import SendForm from "@/lib/SendForm.svelte";
  import { name, show_users, users } from "@/stores";
  import { reload_page, scroll_to_bottom } from "@/utils";
  import { Socket, io } from "socket.io-client";
  import { onMount, tick } from "svelte";
  import Menu from "./Menu.svelte";
  import Messages from "./Messages.svelte";
  import Users from "./Users.svelte";

  let my_message_text = "";
  let messages: message[] = [];
  let messages_element: HTMLElement

    
    const socket: Socket<server_to_client_events, client_to_server_events> = io();

    onMount(() => {
        socket.emit("login", $name);
    });

    socket.on("message", async (msg) => {
        messages = [...messages, msg]
        await tick();
        scroll_to_bottom(messages_element)
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
    <Messages bind:messages bind:messages_element/>
    <SendForm bind:my_message_text {send_message} />
{/if}
