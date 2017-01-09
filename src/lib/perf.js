import BaseModule from '$root/lib/baseModule';
import QAPCaller from '@weex-module/qapcaller';

const QAPPerformanceTracker = (param, callback) => QAPCaller.call('NukeUI', 'performance', param, ret => callback(ret), failure => {}, notify => {});
const transformNativeTime = time => time * 1e3;

export default class PerfModule extends BaseModule {
    constructor(props) {
        super(props);

        this.__perf__ = {
            // dom diff starttime
            startTime: 0,
            // dom diff endtime
            endTime: 0,
            // weex engine render task starttime
            nativeStartTime: 0,
            // weex engine render task endtime
            nativeEndTime: 0,
            // QAPPerformanceTracker callback timestamp
            trackerCallBackTime: 0,
            ret: {
                // weex engine render actual time
                nativeRenderTime: 0,
                // dom diff time
                diffTime: 0,
                // weex task from tracker callback start 2 tracker callback end
                nativeTotalTime: 0,
                // all time from dom diff 2 dom visible
                totalTime: 0
            }
        }
    }

    // startTime -> nativeStartTime -> endTime -> nativeEndTime -> trackerCallBackTime

    __performanceStart__() {
        this.__perf__.startTime = Date.now();
        QAPPerformanceTracker({action: 'start', uuid: this.__moduleUUID___}, ret => {
            this.__perf__.nativeStartTime = transformNativeTime(ret.ti);
        });
    }

    __performanceEnd__() {
        this.__perf__.endTime = Date.now();
        QAPPerformanceTracker({action: 'end', uuid: this.__moduleUUID___}, ret => {
            this.__perf__.nativeEndTime = transformNativeTime(ret.ti);
            this.__perf__.trackerCallBackTime = Date.now();
            this.__perf__.ret.diffTime = this.__perf__.endTime - this.__perf__.startTime;
            this.__perf__.ret.nativeTotalTime = this.__perf__.nativeEndTime - this.__perf__.nativeStartTime;
            this.__perf__.ret.totalTime = this.__perf__.trackerCallBackTime - this.__perf__.startTime;
            this.__perf__.ret.nativeRenderTime = this.__perf__.trackerCallBackTime - this.__perf__.endTime;

            console.log(this.__perf__);
        });
    }

    componentWillUpdate(nextProps, nextState) {
        this.__performanceStart__();
    }

    componentDidUpdate(prevProps, prevState) {
        this.__performanceEnd__();
    }
}
