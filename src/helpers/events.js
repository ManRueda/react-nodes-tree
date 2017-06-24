export function isClickOutside (event) {
  const elementPos = event.target.getBoundingClientRect()
  return event.pageY > (elementPos.top + event.target.offsetHeight) ||
    event.pageY < elementPos.top ||
    event.pageX < elementPos.left ||
    event.pageX > (elementPos.left + event.target.offsetWidth)
}
