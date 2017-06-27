'use strict';
import {createElement, Component,render} from 'rax';;
import {View, Text, Modal, Tabbar} from 'nuke';
import BaseModule from '$root/lib/baseModule';
import IconFont from '$root/components/icon/iconFont';
// import QAP from 'QAP-SDK';

class Index extends BaseModule {
    constructor(props) {
        super(props);
    }

    state = {
        activeKey: {
            key: 'home'
        },
        tradeStatus: 'waitPay'
    }

    events = {
        'app.changeToOrderModule': (param) => {
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
            src: 'qap://order/index.js',
            icon: 'order'
        }
    ]

    componentWillMount() {
        this.bindEvent();
    }

    getTabbarItem() {
        return this.menus.map(menu => {
            return (
                <Tabbar.Item render={status => {
                    let color = status ? style.itemSelectorColor : style.itemUnSelectorColor;
                    return (
                        <View>
                            <View><IconFont iconStyle={[style.icon, color]} name={menu.icon}/></View>
                            <Text style={[style.text,color]}>{menu.title}</Text>
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
        borderTopWidth: '1rem',
        borderTopStyle: 'solid',
        borderTopColor: '#ccc'
    },
    icon: {
        fontSize: '28rem'
    },
    itemUnSelectorColor: {
        color: '#3d4145'
    },
    text:{
        fontSize: '28rem'
    },
    itemSelectorColor: {
        color: '#0894ec'
    }
}

render(<Index/>);

