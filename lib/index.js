'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nukeMounter = require('nuke-mounter');

var _weexRx = require('weex-rx');

var _View = require('nuke/lib/View');

var _View2 = _interopRequireDefault(_View);

var _Text = require('nuke/lib/Text');

var _Text2 = _interopRequireDefault(_Text);

var _Modal = require('nuke/lib/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Tabbar = require('nuke/lib/Tabbar');

var _Tabbar2 = _interopRequireDefault(_Tabbar);

var _baseModule = require('$root/lib/baseModule');

var _baseModule2 = _interopRequireDefault(_baseModule);

var _QAPSDK = require('QAP-SDK');

var _QAPSDK2 = _interopRequireDefault(_QAPSDK);

var _iconFont = require('$root/components/icon/iconFont');

var _iconFont2 = _interopRequireDefault(_iconFont);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_BaseModule) {
    _inherits(Index, _BaseModule);

    function Index(props) {
        _classCallCheck(this, Index);

        var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

        _this.state = {
            activeKey: {
                key: 'home'
            },
            tradeStatus: ''
        };
        _this.events = {
            // 完成tabbar切换工作
            'app.changeTabbarModule': function appChangeTabbarModule(param) {
                var state = { activeKey: { key: param.nav } };
                if (param.tradeStatus) {
                    state.tradeStatus = param.tradeStatus;
                }
                _this.setState(state);
            },
            'app.orderModuleHasReady': function appOrderModuleHasReady(status) {
                status && _this.emitEvent('app.changeOrderSubModule', _this.state.tradeStatus);
            }
        };
        _this.menus = [{
            name: 'home',
            title: '主页',
            src: 'qap://home/index.js',
            icon: 'home'
        }, {
            name: 'order',
            title: '订单',
            src: 'qap://order/index.js' + (_this.state.tradeStatus ? '?tradeStatus=' + _this.state.tradeStatus : ''),
            icon: 'order'
        }, {
            name: 'msg',
            title: '短信',
            src: 'qap://msg/index.js',
            icon: 'msg'
        }, {
            name: 'evaluate',
            title: '评价',
            src: 'qap://evaluate/index.js',
            icon: 'evaluate'
        }, {
            name: 'setting',
            title: '设置',
            src: 'qap://setting/index.js',
            icon: 'setting'
        }];
        return _this;
    }

    _createClass(Index, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.bindEvent();
        }
    }, {
        key: 'getTabbarItem',
        value: function getTabbarItem() {
            return this.menus.map(function (menu) {
                return (0, _weexRx.createElement)(_Tabbar2.default.Item, { render: function render(status) {
                        var color = status ? style.itemSelectorColor : style.itemUnSelectorColor;
                        return (0, _weexRx.createElement)(
                            _View2.default,
                            null,
                            (0, _weexRx.createElement)(
                                _View2.default,
                                null,
                                (0, _weexRx.createElement)(_iconFont2.default, { iconStyle: [style.icon, color], name: menu.icon })
                            ),
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
                { activeKey: this.state.activeKey, itemStyle: style.itemStyle },
                this.getTabbarItem()
            );
        }
    }]);

    return Index;
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

(0, _nukeMounter.mount)((0, _weexRx.createElement)(Index, null), 'body');

exports.default = Index;
module.exports = exports['default'];