'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var uuid = exports.uuid = function uuid() {
    var begin = Date.now();
    return function (prefix) {
        return (prefix || 'UUID') + '-' + (begin++).toString(16).toUpperCase();
    };
};

// export const getUrl = function(url, query) {
//     if(!query){
//         return ;
//     }
//     url.match(/\?/) && (url = url +
// }