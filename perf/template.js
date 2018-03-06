module.exports = function (string, data) {
    return string.replace(/\$\{(\w+?)\}/g, (match, param) => {
        return data[param]
    })
}
