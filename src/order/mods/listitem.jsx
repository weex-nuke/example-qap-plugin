'use strict';
import {mount} from 'nuke-mounter';
import {createElement, Component} from 'weex-rx';
import {View,ListView,Icon, Link , Text,TouchableHighlight, Modal,Image,Animated,Swipe} from 'nuke';
import fetch from '$root/lib/fetch';
import styles from './listitem.rxscss';

const tradeTypeMap = {
    0: {
        type: '已关闭',
        clazz: 'close'
    },
    1:  {
        type: '交易成功',
        clazz: 'success'
    }
}

class ListItem extends Component {
    constructor() {
        super();
    }

    render(){
        const { pic_path, sku_properties_name, title, price, num , tid, buyer_nick, buyer_name, buyer_phone, buyer_addr, buyer_avatar, order_time, order_id, order_status} = this.props.item;
        return (
           <Link style={styles.orderContainer} href={`qap://detail/index.js?id=${tid}`} target="_blank">
                <View style={styles.rowlayout}>
                    <Text style={styles[tradeTypeMap[order_status].clazz]}>{tradeTypeMap[order_status].type}</Text>
                    <Text style={styles.minor}>|</Text>
                    <Text style={styles.minor}>{order_time}</Text>
                    <Text style={[styles.minor, styles.orderId]}>{order_id}</Text>
                </View>
                <View style={[styles.rowlayout, styles.userPay]}>
                    <View style={styles.row}>
                        <Image style={styles.avatar} source={{uri: buyer_avatar}}></Image>
                        <Text style={styles.primary}>{buyer_nick}</Text>
                    </View>
                    <View>
                        <Text style={styles.primary}>实付：￥{price * num}</Text>
                    </View>
                </View>
                <View style={styles.rowlayout}>
                    <Image style={styles.pic} source={{uri: pic_path}}></Image>
                    <View style={[styles.itemInfo, styles.itemLayout]}>
                        <Text style={[styles.primary, styles.itemTitle]}>{title}</Text>
                        <Text style={styles.minor}>{sku_properties_name}</Text>
                    </View>
                    <View style={[styles.itemPrice]}>
                        <Text style={styles.primary}>￥{price}</Text>
                        <Text style={styles.minor}>x{num}</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.row}>
                        <Text style={styles.primary}>{buyer_name}</Text>
                        <Text style={styles.primary}>{buyer_phone}</Text>
                    </View>
                    <View>
                        <Text style={styles.primary}>{buyer_addr}</Text>
                    </View>
                </View>
            </Link>
        )
    }
}

export default ListItem;
