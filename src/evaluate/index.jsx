'use strict';
import {mount} from 'nuke-mounter';
import {createElement, Component} from 'weex-rx';
import {View, Text, Modal, Tabbar} from 'nuke';

class Evaluate extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Text>Evaluate</Text>
        );
    }
}

const styles = {

};
mount(<Evaluate />, 'body');
