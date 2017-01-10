'use strict';
import {createElement, Component} from 'weex-rx';
import {View, Text, Badge,MultiRow,ScrollView} from 'nuke';
import IconFont from '$root/components/icon/iconFont';
import styles from './QuickModule.rxscss';

class QuickModule extends Component {
    constructor(props) {
        super(props);
    }

    menus = [
        {
            name: 'diamond',
            title: '商品管理',
            icon: 'diamond',
            color: '#fcb943'
        },{
            name: 'search',
            title: '促销管理',
            icon: 'search',
            color: '#fc8540'
        },{
            name: 'paperplane',
            title: '订单管理',
            icon: 'paperplane',
            color: '#66d25f'
        },{
            name: 'note',
            title: '流量推广',
            icon: 'note',
            color: '#f989c0'
        },{
            name: 'calendar',
            title: '客户管理',
            icon: 'calendar',
            color: '#4bc8f5'
        },{
            name: 'setting1',
            title: '货源采购',
            icon: 'setting1',
            color: '#EB7E10'
        }
        ,{
            name: 'evaluate',
            title: '金融服务',
            icon: 'evaluate',
            color: '#FF3333'
        },{
            name: 'msg',
            title: '店铺装修',
            icon: 'msg',
            color: '#368BD9'
        }

    ]

    renderGridCell(item,index) {
        return (
            <View style={styles.module}>
                <View style={[styles.item, {backgroundColor: item.color}]}>
                    <IconFont iconStyle={styles.icon} name={item.icon}/>
                </View>
                <Text style={styles.f1}>{item.title}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.subtitle}><IconFont iconStyle={styles.subicon} name='setting' /><Text style={styles.title}>特色专区</Text></View>
                <MultiRow dataSource={this.menus} rows={4} renderRow={this.renderGridCell.bind(this)} />
            </View>
        );
    }
}

export default QuickModule;
