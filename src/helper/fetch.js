const BaseUrl = import.meta.env.VITE_EMAILJS_API_URL
const fetchEmailJs = (endpoint, data, method = 'GET') => {
    const url = `${BaseUrl}/${endpoint}`
    if (method === 'GET') {
        return fetch(url)
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    }
}

export { fetchEmailJs }