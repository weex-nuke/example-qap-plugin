'use strict';
import {createElement, Component,render} from 'rax';;
import {View, ScrollView,Button, Text, TouchableHighlight, Image, Link, Modal,Util,Icon} from 'nuke';
import styles from '../index.rxscss';
import fetch from '$root/lib/fetch';

class OrderInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }

    shouldComponentUpdate(nextProps){
        
        if('order' in nextProps && this.props.order.status !== nextProps.order.status){
            return true;
        }else{
            return false;
        }
    }

    render() {
        const { order_id,submit_time,pay_time,status} = this.props.order;
        return (
            <View style={styles.orderContainer}>
                <View style={styles.listLine}>
                    <View style={styles.listLabel}><Text style={styles.listLabelText}>订单编号：</Text></View>
                    <View style={styles.listContent}><Text style={styles.listContentText}>{order_id}</Text></View>
                </View>
                <View style={styles.listLine}>
                    <View style={styles.listLabel}><Text style={styles.listLabelText}>成交时间：</Text></View>
                    <View style={styles.listContent}><Text style={styles.listContentText}>{submit_time}</Text></View>
                </View>
                <View style={styles.listLine}>
                    <View style={styles.listLabel}><Text style={styles.listLabelText}>付款时间：</Text></View>
                    <View style={styles.address}><Text style={styles.listContentText}>{pay_time}</Text></View>
                </View>
                <View style={[styles.listLine,styles.listLineLast]}>
                    <View style={styles.listLabel}><Text style={styles.listLabelText}>订单状态：</Text></View>
                    <View style={styles.address}><Text style={styles.listContentText}>{status}</Text></View>
                </View>
               
                
            </View>
        )
    }
}

export default OrderInfo;
