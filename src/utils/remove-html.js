export const removeHtml = (text) => {
    const regex = /(<([^>]+)>)/ig
    return text.replace(regex, '')
}
