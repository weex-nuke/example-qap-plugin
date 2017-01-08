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
            title: '自动评价',
            icon: 'diamond',
            color: 'rgb(252, 185, 67)'
        },{
            name: 'search',
            title: '自动评价',
            icon: 'search',
            color: 'rgb(252, 133, 64)'
        },{
            name: 'paperplane',
            title: '自动评价',
            icon: 'paperplane',
            color: 'rgb(102, 210, 95)'
        },{
            name: 'note',
            title: '自动评价',
            icon: 'note',
            color: 'rgb(249, 137, 192)'
        },{
            name: 'calendar',
            title: '自动评价',
            icon: 'calendar',
            color: 'rgb(75, 200, 245)'
        },{
            name: 'setting1',
            title: '自动评价',
            icon: 'setting1',
            color: '#EB7E10'
        }
        ,{
            name: 'evaluate',
            title: '自动评价',
            icon: 'evaluate',
            color: '#FF3333'
        },{
            name: 'msg',
            title: '自动评价',
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
                <View style={styles.subtitle}><Text>实用工具</Text></View>
                <MultiRow dataSource={this.menus} rows={4} renderRow={this.renderGridCell.bind(this)} />
            </View>
        );
    }
}

export default QuickModule;
