'use strict';
import {mount} from 'nuke-mounter';
import {createElement, Component} from 'weex-rx';
import {View,ListView,Icon, Link , Text,TouchableHighlight, Modal,Image,Animated,Swipe} from 'nuke';
import fetch from '$root/lib/fetch';
import styles from './listitem.rxscss';
class ListItem extends Component {
    constructor() {
        super();
        

    }

    render(){
        var self=this;
        const { pic_path, title, price, num ,tid,buyer_nick} = this.props.item;
        return (
           <Link style={styles.orderContainer} href={`qap://detail/index.js?id=${tid}`} target="_blank">
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
                <View><Text>{buyer_nick}</Text></View>
            </Link>

        )
    }
}

export default ListItem;




