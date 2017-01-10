'use strict';
import {mount} from 'nuke-mounter';
import {createElement, Component} from 'weex-rx';
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

    // getUrl(url, param) {
    //     let hasParam = url.match(/\?/);
    //     let query = QAP.uri.toQueryString(param);
    //     return `${url}${hasParam ? '&' : '?'}${query}`;
    // }

    menus = [
        {
            name: 'home',
            title: '主页',
            src: 'qap://home/index.js',
            icon: 'home'
        }, {
            name: 'order',
            title: '订单',
            // src: this.getUrl('qap://order/index.js', this.state.tradeStatus ? {tradeStatus: this.state.tradeStatus} : {}),
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
