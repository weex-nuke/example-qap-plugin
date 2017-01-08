'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _View = require('nuke/lib/View');

var _View2 = _interopRequireDefault(_View);

var _Text = require('nuke/lib/Text');

var _Text2 = _interopRequireDefault(_Text);

var _Badge = require('nuke/lib/Badge');

var _Badge2 = _interopRequireDefault(_Badge);

var _TouchableHighlight = require('nuke/lib/TouchableHighlight');

var _TouchableHighlight2 = _interopRequireDefault(_TouchableHighlight);

var _weexRx = require('weex-rx');

var _baseModule = require('$root/lib/baseModule');

var _baseModule2 = _interopRequireDefault(_baseModule);

var _iconFont = require('$root/components/icon/iconFont');

var _iconFont2 = _interopRequireDefault(_iconFont);

var _tradeType = require('$root/modules/common/tradeType');

var _tradeType2 = _interopRequireDefault(_tradeType);

var _CommonModule = require('./CommonModule.rxscss');

var _CommonModule2 = _interopRequireDefault(_CommonModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonModule = function (_BaseModule) {
    _inherits(CommonModule, _BaseModule);

    function CommonModule(props) {
        _classCallCheck(this, CommonModule);

        var _this = _possibleConstructorReturn(this, (CommonModule.__proto__ || Object.getPrototypeOf(CommonModule)).call(this, props));

        _this.menus = _tradeType2.default.map(function (item) {
            return Object.assign(item, { count: 0 });
        });
        return _this;
    }

    _createClass(CommonModule, [{
        key: 'press',
        value: function press(name) {
            this.emitEvent('app.changeTabbarModule', { nav: 'order', tradeStatus: name });
            this.emitEvent('app.changeOrderSubModule', { sticky: true, tradeStatus: name });
        }
    }, {
        key: 'renderEnterance',
        value: function renderEnterance() {
            var _this2 = this;

            return this.menus.map(function (item) {
                return (0, _weexRx.createElement)(
                    _TouchableHighlight2.default,
                    { style: _CommonModule2.default.item, onPress: _this2.press.bind(_this2, item.name) },
                    (0, _weexRx.createElement)(
                        _View2.default,
                        null,
                        (0, _weexRx.createElement)(_iconFont2.default, { iconStyle: _CommonModule2.default.icon, name: item.icon })
                    ),
                    (0, _weexRx.createElement)(
                        _Text2.default,
                        { style: _CommonModule2.default.badge },
                        item.count
                    ),
                    (0, _weexRx.createElement)(
                        _Text2.default,
                        { style: _CommonModule2.default.f1 },
                        item.title
                    )
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return (0, _weexRx.createElement)(
                _View2.default,
                { style: _CommonModule2.default.container },
                this.renderEnterance()
            );
        }
    }]);

    return CommonModule;
}(_baseModule2.default);

exports.default = CommonModule;
module.exports = exports['default'];