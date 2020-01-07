import '../img/icon-128.png'
import '../img/icon-32.png'

chrome.browserAction.onClicked.addListener(tab => {
  chrome.tabs.sendMessage(tab.id, 'hello')
})
