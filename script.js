const SHOW_MESSAGE = document.getElementById('show-message')
const TXT_MESSAGE = document.getElementById('txtMsg')
let BOX_COLOR = 2// 1 = light-color 2 = dark-color
const BTN_SEND = document.getElementById('btnSend')

BTN_SEND.addEventListener('click', messageValidation)
TXT_MESSAGE.addEventListener('keydown', enterSendMessage)

function enterSendMessage (event) {
  const button = event.key

  if (button === 'Enter') {
    event.preventDefault() // Don't left a breakline in the text field
    messageValidation()
  }
}

function messageValidation () {
  if (TXT_MESSAGE.value === '' || TXT_MESSAGE.length === 0 || TXT_MESSAGE.value === ' ') {
    TXT_MESSAGE.focus()
    return false
  } else {
    sendTextMessage()
  }
}

function sendTextMessage () {
  const txtmsg = TXT_MESSAGE.value

  createBoxMessage(txtmsg)
  cleanerCreation()
  cleanTextBox(txtmsg)
}

function createBoxMessage (textMessage = '[ERROR]') {
  const newBox = document.createElement('div')

  if (BOX_COLOR === 1) {
    newBox.setAttribute('class', 'message dark-box round-border box-shadow')
    BOX_COLOR = 2
  } else {
    newBox.setAttribute('class', 'message light-box round-border box-shadow')
    BOX_COLOR = 1
  }

  newBox.innerHTML = `<p>${textMessage}</p>`

  SHOW_MESSAGE.appendChild(newBox)
  newBox.scrollIntoView(true)
}

function cleanerCreation () {
  const cleaner = document.createElement('div')
  cleaner.setAttribute('class', 'cleaner')

  SHOW_MESSAGE.appendChild(cleaner)
}

function cleanTextBox (textMessage) {
  TXT_MESSAGE.value = ''
  TXT_MESSAGE.focus()
}
