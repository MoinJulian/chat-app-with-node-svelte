export function reload_page() {
  window.location.reload();
}

export function scroll_to_bottom(element: HTMLElement) {
  element.scrollTop = element.scrollHeight;
}