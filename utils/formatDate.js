export const formatDate = (date) => {
    let d = new Date(date)
    d = d.toLocaleDateString('id', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
    })
    return d
}

