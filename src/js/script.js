const isExpanded = element => element.getAttribute('aria-expanded') === 'true'

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const buttons = [...document.querySelectorAll('.group-label-gaia')]
  if (!buttons.length) return

  const isAllExpanded = !buttons.some(_ => !isExpanded(_))
  const expand = !isAllExpanded
  buttons.forEach(button => {
    if (isExpanded(button) !== expand) button.click()
  })
})
