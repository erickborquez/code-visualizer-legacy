export const colletIdsAndDocs = doc => { return { id: doc.id, ...doc.data() } }
export const pasteAsPlainText = event => {
    event.preventDefault()

    const text = event.clipboardData.getData('text/plain')
    document.execCommand('insertHTML', false, text)
}