const server = 'http://localhost:3001'
// Lấy dữ liệu về
function apiGet(uri) {
    return fetch(server + uri).then(res => res.json())
}
// Lấy dữ liệu về callback
function apiGetCallback(uri, callback) {
    return fetch(server + uri).then(res => res.json()).then(data => callback(data))
}

function getImage(url, callback) {
    return fetch(url).then(data => callback(data))
}

function getImagePromise(url) {
    return fetch(url)
}


export {
    apiGet,
    apiGetCallback,
    getImage,
    getImagePromise
}