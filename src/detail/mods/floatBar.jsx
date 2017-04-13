'use strict';
import {createElement, Component,render} from 'rax';;
import {Button, Text, TouchableHighlight, Image, Link, Modal} from 'nuke';
import styles from '../index.less';
import fetch from '$root/lib/fetch';

class ItemInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }
    shouldComponentUpdateshouldComponentUpdate(nextProps) {
        return false;
    }
        
    
    componentWillMount() {
       
    }

    render() {
        return (
            <Button.Group  style={styles.floatBottom} rect>
                <Button type="primary" size="large">手动发货</Button>
                <Button type="third" size="large">无需物流</Button>
                <Button type="primary" size="large">关闭订单</Button>
            </Button.Group>
        )
    }
}

export default ItemInfo;
