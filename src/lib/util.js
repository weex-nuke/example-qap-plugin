export const uuid = function() {
    let begin = Date.now();
    return function (prefix) {
        return (prefix || 'UUID') + '-' + (begin++).toString(16).toUpperCase()
    }
}
