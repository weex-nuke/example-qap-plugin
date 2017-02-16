'use strict';
import {createElement, Component,render} from 'rax';;
import {View, Text, Image} from 'nuke';
import IconFont from '$root/components/icon/iconFont';
import fetch from '$root/lib/fetch';
import styles from './FeedModule.rxscss';

class FeedModule extends Component {
    constructor(props) {
        super(props);

        this.getData();
    }

    state = {
        data: []
    }

    getData() {
        fetch('homeFeed').then(res => {
            this.setState({
                data: res.datas
            })
        })
    }

    renderFeed(data) {
        return (
            <View style={styles.feedContainer}>
                <View style={styles.feedContent}>
                    <Text style={styles.feedTitle}>{data.title}</Text>
                    <View style={styles.feedInfo}>
                        <View><Text style={styles.feedFM}>{data.fm}</Text></View>
                        <View style={styles.feedData}>
                            <View style={styles.feedDataItem}>
                                <IconFont style={styles.feedIcon} name="msg" />
                                <Text style={styles.feedCount}>{data.readCount}</Text>
                            </View>
                            <View style={styles.feedDataItem}>
                                <IconFont style={styles.feedIcon} name="evaluate" />
                                <Text style={styles.feedCount}>{data.replyCount}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Image style={styles.feedImage} source={{uri: data.pic_path}}/>
            </View>
        )
    }

    render() {
        const feeds = this.state.data.map(data =>  this.renderFeed(data));
        return (
            <View style={styles.container}>
                {feeds}
            </View>
        );
    }
}

export default FeedModule;
