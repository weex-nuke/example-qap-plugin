import {PropTypes, createElement,render} from 'rax';;
import BaseModule from '$root/lib/baseModule';
import {Text} from 'nuke'
import iconSource from './iconSource';

class IconFont extends BaseModule {

    static protTypes = {
        name: PropTypes.string
    }

    constructor(props) {
        super(props);
    }

    icons = iconSource;

    render() {
        const {iconStyle} = this.props;
        return (
            <Text style={[iconStyle, styles.icon]}>{this.icons[this.props.name]}</Text>
        )
    }
}

const styles = {
    icon: {
        fontFamily: 'iconfont',
        textAlign: 'center'
    }
}

module.exports = IconFont;
