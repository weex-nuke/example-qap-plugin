import QN from 'QAP-SDK';
import bizApi from './bizApi';
function Top(api, query) {
    query.method = api;
    return QN.top.invoke({
        query: query,
        success: (result) => {
        },
        error: (e) => {
        }
    }).then(response => {
        return response;
    })
    
}

export default Top;
