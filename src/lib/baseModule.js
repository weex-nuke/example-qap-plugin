import {createElement, Component} from 'weex-rx';
import QAP from 'QAP-SDK';
import {uuid} from './util';

export default class BaseModule extends Component {
    constructor(props) {
        super(props);
        this.__moduleSignature = uuid();
    }

    __eventsCtrl(bind) {
        let evts = this.events;
        if(!evts){
            throw new Error('未设定事件列表');
        }
        let handle = bind ? 'on' : 'off';
        for(let evt in evts){
            QAP[handle](evt, {
                success(result) {console.log(result)},
                error(error) {console.log(error)},
                notify(data) {evts[evt](data)}
            });
            console.log('bind event: ', evt, ' success');
        }
    }

    bindEvent() {
        this.__eventsCtrl(true);
    }

    unbindEvent() {
        this.__eventsCtrl(false);
    }

    emitEvent(key, data, cb) {
        QAP.emit(key, data, cb);
        console.log('emit event: ', key, ' success');
    }
}
