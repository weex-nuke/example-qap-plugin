'use strict';
import {mount} from 'nuke-mounter';
import {createElement, Component} from 'weex-rx';
import {View, Text, Modal, Tabbar} from 'nuke';

class Msg extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Text>Msg</Text>
        );
    }
}

const styles = {

};
mount(<Msg />, 'body');
