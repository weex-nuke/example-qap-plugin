'use strict';
import {createElement, Component,render} from 'rax';;
import {View, Text, ScrollView} from 'nuke';

import CommonModule from './mods/CommonModule';
import QuickModule from './mods/QuickModule';
import UserInfo from './mods/UserInfo';
import FeedModule from './mods/FeedModule';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <UserInfo></UserInfo>
                <CommonModule></CommonModule>
                <QuickModule></QuickModule>
                <FeedModule></FeedModule>
            </ScrollView>
        );
    }
}

const styles = {
    container: {
        backgroundColor: '#eeeeee'
    }
};
render(<Home/>);
