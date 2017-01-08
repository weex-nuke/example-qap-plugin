'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _QAPSDK = require('QAP-SDK');

var _QAPSDK2 = _interopRequireDefault(_QAPSDK);

var _bizApi = require('./bizApi');

var _bizApi2 = _interopRequireDefault(_bizApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetch(api, query) {
    var url = _bizApi2.default[api];
    query && (url = url + '?' + _QAPSDK2.default.uri.toQueryString(query));
    return _QAPSDK2.default.fetch(url, {
        method: 'POST',
        mode: 'same-origin',
        dataType: 'json'
    }).then(function (response) {
        // console.log(response.json())
        return response.json(); // => 返回一个 `Promise` 对象
    });
}

exports.default = fetch;
module.exports = exports['default'];