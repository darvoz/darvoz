const animateScroll = (event) => {
  const clickedElement = event.target
  const navElement =
    event.target.tagName === 'A'
      ? event.target
      : clickedElement.closest('.navigation-bar__link')

  if (!navElement || !navElement.hash) {
    return true
  }
  const scrollTarget = document.querySelector(navElement.hash)

  if (scrollTarget) {
    event.preventDefault()

    scrollTarget.scrollIntoView({
      behavior: 'smooth'
    })
  }
}

export default animateScroll
