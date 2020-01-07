chrome.extension.onMessage.addListener((request, sender, sendResponse) => {
  const isExpanded = element => element.getAttribute('aria-expanded') === 'true'

  const buttons = document.querySelectorAll('.group-label-gaia')
  if (buttons.length > 0) {
    const expanded = !isExpanded(buttons[0])
    buttons.forEach(button => {
      if (isExpanded(button) !== expanded) button.click()
    })
  }
})
