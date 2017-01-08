'use strict';
import {createElement, Component} from 'weex-rx';
import {View, ScrollView,Button, Text, TouchableHighlight, Image, Link, Modal,Util,Icon} from 'nuke';
import styles from '../index.rxscss';
import fetch from '$root/lib/fetch';

class BuyerInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }
    shouldComponentUpdate(nextProps){
        //此处以图片字段是否返回，是否和原值相等，作为diff的依据。可根据实际情况修改
        if('buyer' in nextProps && this.props.buyer.pic_path !== nextProps.buyer.pic_path){
            return true;
        }else{
            return false;
        }
    }
    componentWillMount() {
       
    }

    render() {
        const { nick , phone, addr, note} = this.props.buyer;
        return nick?(
            <View style={styles.addressContainer}>
                <View style={styles.subhead}><Icon name="account" style={styles.icon1} /><Text style={styles.listContentText}>买家信息</Text></View>
                <View style={styles.listLine}>
                    <View style={styles.listLabel}><Text style={styles.listLabelText}>买家旺旺：</Text></View>
                    <View style={styles.listContent}><Text style={styles.listContentText}>{nick}</Text></View>
                </View>
                <View style={styles.listLine}>
                    <View style={styles.listLabel}><Text style={styles.listLabelText}>联系手机：</Text></View>
                    <View style={styles.listContent}><Text style={styles.listContentText}>{phone}</Text></View>
                </View>
                <View style={styles.listLine}>
                    <View style={styles.listLabel}><Text style={styles.listLabelText}>收货地址：</Text></View>
                    <View style={styles.address}><Text style={styles.listContentText}>{addr}</Text></View>
                </View>
                <View style={styles.listLine}>
                    <View style={styles.listLabel}><Text style={styles.listLabelText}>买家留言：</Text></View>
                    <View style={styles.address}><Text style={styles.listContentText}>{note}</Text></View>
                </View>
                <Button.Group style={[styles.btnLine,styles.listLineLast]}>
                    <Button type="primary">修改地址</Button>
                    <Button type="primary">复制信息</Button>
                </Button.Group>
            </View>
        ):null
    }
}

export default BuyerInfo;
