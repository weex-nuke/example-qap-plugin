'use strict';
import {mount} from 'nuke-mounter';
import {createElement, Component} from 'weex-rx';
import {View, Text, Modal, Tabbar} from 'nuke';

class Setting extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Text>Setting</Text>
        );
    }
}

const styles = {

};
mount(<Setting />, 'body');
