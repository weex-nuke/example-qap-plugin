'use strict';
import {createElement, Component,render} from 'rax';;
import {View, ScrollView,Button, Text, TouchableHighlight, Image, Link, Modal,Util,Icon} from 'nuke';
import styles from '../index.less';
import fetch from '$root/lib/fetch';

class ItemInfo extends Component {
    constructor(props) {
        super(props);

        
    }
    shouldComponentUpdate(){

    }
    componentWillMount() {
       
    }

    render() {
        const { pic_path, title, price, num } = this.props.item;
        return (
            <View style={styles.itemContainer}>
                <View style={styles.subhead}><Icon name="favoritesFilling" style={styles.icon1} /><Text style={styles.listContentText}>商品信息</Text></View>
                <View style={styles.itemLine}>
                    <View style={styles.picWrap}>
                        <Image source={{uri: pic_path ? pic_path + "_250x250q60.jpg" : 'no_pic.jpg'}} style={styles.pic} />
                    </View>
                    <View style={styles.titleWrap}>
                        <Text style={[styles.title]}>{title}</Text>
                        
                    </View>
                    <View style={styles.subWrap}>
                        <Text style={styles.price}>￥ {price? price : "0.00"}</Text>
                        <Text style={styles.num}>× {num}</Text>
                        
                    </View>
                </View>
            </View>
        )
    }
}

export default ItemInfo;
