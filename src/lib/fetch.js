import QN from 'QAP-SDK';
import bizApi from './bizApi';
import { Util } from 'nuke';
const Location = Util.Location;
function fetch(api, query) {
    let url =   bizApi[api];
    query && (url = url + '?' + QN.uri.toQueryString(query));
    return QN.fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        dataType: 'json'
    }).then(response => {
        // console.log(response.json())
        return response.json(); // => 返回一个 `Promise` 对象
    })
}

export default fetch;
