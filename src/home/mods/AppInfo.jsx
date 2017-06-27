'use strict';
import {createElement, Component,render} from 'rax';;
import {View, Text, Image,Env} from 'nuke';
import IconFont from '$root/components/icon/iconFont';
import styles from './AppInfo.less';

class AppInfo extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        v: Env.isWeex ? __weex_options__.QAPAppVersion : null
    }



    render() {
        return (
            <View style={styles.container}>
                { this.state.v ? <Text style={styles.info}>插件版本号：{this.state.v}</Text> : null }
            </View>
        );
    }
}

export default AppInfo;
