'use strict';
import {mount} from 'nuke-mounter';
import {createElement, Component} from 'weex-rx';
import {View, Text, Modal, Tabbar} from 'nuke';
import BaseModule from '$root/lib/baseModule';
import QAP from 'QAP-SDK';
import IconFont from '$root/components/icon/iconFont';

class Index extends BaseModule {
    constructor(props) {
        super(props);
    }

    state = {
        activeKey: {
            key: 'home'
        },
        tradeStatus: ''
    }

    events = {
        // 完成tabbar切换工作
        'app.changeTabbarModule': (param) => {
            let state = {activeKey: {key: param.nav}};
            if(param.tradeStatus){
                state.tradeStatus = param.tradeStatus;
            }
            this.setState(state);
        },
        'app.orderModuleHasReady': (status) => {
            status && this.emitEvent('app.changeOrderSubModule', this.state.tradeStatus);
        }
    }

    menus = [
        {
            name: 'home',
            title: '主页',
            src: 'qap://home/index.js',
            icon: 'home'
        }, {
            name: 'order',
            title: '订单',
            src: 'qap://order/index.js' + (this.state.tradeStatus ? '?tradeStatus=' + this.state.tradeStatus : ''),
            icon: 'order'
        }
    ]

    componentWillMount() {
        // this.bindEvent();
    }

    getTabbarItem() {
        return this.menus.map(menu => {
            return (
                <Tabbar.Item render={status => {
                    let color = status ? style.itemSelectorColor : style.itemUnSelectorColor;
                    return (
                        <View>
                            <View><IconFont iconStyle={[style.icon, color]} name={menu.icon}/></View>
                            <Text style={color}>{menu.title}</Text>
                        </View>
                    )
                }} title={menu.title} tabKey={menu.name} src={menu.src}></Tabbar.Item>
            )
        })
    }

    render() {
        return (
            <Tabbar activeKey={this.state.activeKey} itemStyle={style.itemStyle}>
                {this.getTabbarItem()}
            </Tabbar>
        );
    }
}

const style = {
    itemStyle: {
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: '#ccc'
    },
    icon: {
        fontSize: 48
    },
    itemUnSelectorColor: {
        color: '#3d4145'
    },
    itemSelectorColor: {
        color: '#0894ec'
    }
}

mount(
    <Index/>, 'body');

export default Index;
