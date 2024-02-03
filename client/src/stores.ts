import { writable } from "svelte/store";

export const name = writable<string>("");
export const users = writable<user[]>([]);
export const show_users = writable<boolean>(false);
