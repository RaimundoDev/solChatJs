let SHOW_MESSAGE = document.getElementById('show-message')
let TXT_MESSAGE = document.getElementById('txtMsg')
let BOX_COLOR = 2// 1 = light-color 2 = dark-color
let BTN_SEND = document.getElementById('btnSend')

BTN_SEND.addEventListener('click', messageValidation)
TXT_MESSAGE.addEventListener('keydown', enterSendMessage)

function enterSendMessage(event) {
    let button = event.key

    if (button == 'Enter') {
        messageValidation()
    }
}

function messageValidation() {
    if (TXT_MESSAGE.value == '' || TXT_MESSAGE.value == ' ') {
        TXT_MESSAGE.focus()
        return false
    } else {
        sendTextMessage()
    }
}

function sendTextMessage() {
    let txtmsg = TXT_MESSAGE.value
    
    createBoxMessage(txtmsg)
    cleanerCreation()
    cleanTextBox(txtmsg)
}

function createBoxMessage(textMessage = '[ERROR]')  {
    let newBox = document.createElement('div')
    
    if (BOX_COLOR == 1) {
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

function cleanerCreation() {
    let cleaner = document.createElement('div')
    cleaner.setAttribute('class', 'cleaner')

    SHOW_MESSAGE.appendChild(cleaner)
}

function cleanTextBox(textMessage) {
    TXT_MESSAGE.value = ''
    TXT_MESSAGE.focus()
}
