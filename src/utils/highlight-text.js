export const highlightText = (texts, query) => {

    const descriptions = texts.map(text => {
        const boldNum = query.length
        let description = boldNum > 0 ? '<b>' : ''
        for (let i = 0; i < text.description.length; i++) {
            description = description + text.description[i]
            if (boldNum - 1 === i) description = description + '</b>'
        }
        return description
    })

    return descriptions
}
