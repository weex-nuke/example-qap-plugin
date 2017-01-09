'use strict';
import {mount} from 'nuke-mounter';
import {createElement, Component} from 'weex-rx';
import {View, Text, Modal} from 'nuke';

import CommonModule from './mods/CommonModule';
import QuickModule from './mods/QuickModule';
import UserInfo from './mods/UserInfo';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <UserInfo></UserInfo>
                <CommonModule></CommonModule>
                <QuickModule></QuickModule>
            </View>
        );
    }
}

const styles = {
    container: {
        backgroundColor: '#eeeeee'
    }
};
mount(<Home/>, 'body');
