'use strict';
import {createElement, Component} from 'weex-rx';
import {View, Text, Image} from 'nuke';
import styles from './UserInfo.rxscss';
import fetch from '$root/lib/fetch';

class UserInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }

    componentWillMount() {
        fetch('userInfo').then(res => {
            console.log(res)
            this.setState({user: res.userInfo})
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: this.state.user.avatar}} style={styles.img} />
                <Text style={styles.f1}>你好，{this.state.user.userNick}</Text>
            </View>
        )
    }
}

export default UserInfo;
