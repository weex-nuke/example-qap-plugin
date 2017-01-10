'use strict';
import {createElement} from 'weex-rx';
import {mount} from 'nuke-mounter';
import BaseModule from '$root/lib/baseModule';
import {View, Text, Modal, Tabbar} from 'nuke';
import IconFont from '$root/components/icon/iconFont';
import tradeType from '$root/modules/common/tradeType';
import OrderList from './mods/orderlist';

class Order extends BaseModule {
    constructor(props) {
        super(props);
    }

    state = {
        activeKey: {
            key: 'waitPay'
        }
    }

    events = {
        'app.changeOrderSubModule': (status) => {
            this.setState({activeKey: {key: status}})
        }
    }

    componentWillMount() {
        this.bindEvent();
    }

    componentDidMount() {
        this.emitEvent('app.orderModuleHasReady', true);
    }

    menus = tradeType

    getTabbarItem() {
        return this.menus.map(menu => {
            return (
                <Tabbar.Item render={status => {
                    let color = status
                        ? style.itemSelectorColor
                        : style.itemUnSelectorColor;
                    return (
                        <View>
                            <Text style={color}>{menu.title}</Text>
                        </View>
                    )
                }} title={menu.title} tabKey={menu.name} src={menu.src}>
                <OrderList type={menu.name}/>
                </Tabbar.Item>
            )
        })
    }

    render() {
        return (
            <Tabbar navTop={true} activeKey={this.state.activeKey} itemStyle={style.itemStyle}>
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
    <Order/>, 'body');

export default Order;
