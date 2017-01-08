'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _weexRx = require('weex-rx');

var _nukeMounter = require('nuke-mounter');

var _baseModule = require('$root/lib/baseModule');

var _baseModule2 = _interopRequireDefault(_baseModule);

var _View = require('nuke/lib/View');

var _View2 = _interopRequireDefault(_View);

var _Text = require('nuke/lib/Text');

var _Text2 = _interopRequireDefault(_Text);

var _Modal = require('nuke/lib/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Tabbar = require('nuke/lib/Tabbar');

var _Tabbar2 = _interopRequireDefault(_Tabbar);

var _iconFont = require('$root/components/icon/iconFont');

var _iconFont2 = _interopRequireDefault(_iconFont);

var _tradeType = require('$root/modules/common/tradeType');

var _tradeType2 = _interopRequireDefault(_tradeType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Order = function (_BaseModule) {
    _inherits(Order, _BaseModule);

    function Order(props) {
        _classCallCheck(this, Order);

        var _this = _possibleConstructorReturn(this, (Order.__proto__ || Object.getPrototypeOf(Order)).call(this, props));

        _this.state = {
            activeKey: {
                key: 'waitPay'
            }
        };
        _this.events = {
            'app.changeOrderSubModule': function appChangeOrderSubModule(status) {
                _this.setState({ activeKey: { key: status } });
            }
        };
        _this.menus = _tradeType2.default;
        return _this;
    }

    _createClass(Order, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.bindEvent();
            this.emitEvent('app.orderModuleHasReady', true);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            // this.emitEvent('app.orderModuleHasReady', true);
        }
    }, {
        key: 'getTabbarItem',
        value: function getTabbarItem() {
            return this.menus.map(function (menu) {
                console.log('src', menu.src);
                return (0, _weexRx.createElement)(_Tabbar2.default.Item, { render: function render(status) {
                        var color = status ? style.itemSelectorColor : style.itemUnSelectorColor;
                        return (0, _weexRx.createElement)(
                            _View2.default,
                            null,
                            (0, _weexRx.createElement)(
                                _Text2.default,
                                { style: color },
                                menu.title
                            )
                        );
                    }, title: menu.title, tabKey: menu.name, src: menu.src });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return (0, _weexRx.createElement)(
                _Tabbar2.default,
                { navTop: true, activeKey: this.state.activeKey, itemStyle: style.itemStyle },
                this.getTabbarItem()
            );
        }
    }]);

    return Order;
}(_baseModule2.default);

var style = {
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
};

(0, _nukeMounter.mount)((0, _weexRx.createElement)(Order, null), 'body');

exports.default = Order;
module.exports = exports['default'];