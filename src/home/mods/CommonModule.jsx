'use strict';
import {View, Text, Badge, TouchableHighlight} from 'nuke';
import {createElement,render} from 'rax';;
import BaseModule from '$root/lib/baseModule';
import IconFont from '$root/components/icon/iconFont';
import tradeType from '$root/modules/common/tradeType';
import styles from './CommonModule.rxscss';

class CommonModule extends BaseModule {
    constructor(props) {
        super(props);
    }

    menus = tradeType.map(item => Object.assign(item, {count: 0}))
    press(name) {
        this.emitEvent('app.changeToOrderModule', {nav: 'order', tradeStatus: name});
        this.emitEvent('app.changeOrderSubModule', name);
    }

    renderEnterance() {
        return this.menus.map(item => {
            return (
                <TouchableHighlight style={styles.item} onPress={this.press.bind(this, item.name)}>
                    <View>
                        <IconFont iconStyle={styles.icon} name={item.icon}/>

                    </View>
                    <Text style={styles.badge}>{item.count}</Text>
                    <Text style={styles.f1}>{item.title}</Text>
                </TouchableHighlight>
            )
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderEnterance()}
            </View>
        );
    }
}

export default CommonModule;
