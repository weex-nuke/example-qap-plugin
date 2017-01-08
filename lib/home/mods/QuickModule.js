'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _weexRx = require('weex-rx');

var _View = require('nuke/lib/View');

var _View2 = _interopRequireDefault(_View);

var _Text = require('nuke/lib/Text');

var _Text2 = _interopRequireDefault(_Text);

var _Badge = require('nuke/lib/Badge');

var _Badge2 = _interopRequireDefault(_Badge);

var _MultiRow = require('nuke/lib/MultiRow');

var _MultiRow2 = _interopRequireDefault(_MultiRow);

var _ScrollView = require('nuke/lib/ScrollView');

var _ScrollView2 = _interopRequireDefault(_ScrollView);

var _iconFont = require('$root/components/icon/iconFont');

var _iconFont2 = _interopRequireDefault(_iconFont);

var _QuickModule = require('./QuickModule.rxscss');

var _QuickModule2 = _interopRequireDefault(_QuickModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuickModule = function (_Component) {
    _inherits(QuickModule, _Component);

    function QuickModule(props) {
        _classCallCheck(this, QuickModule);

        var _this = _possibleConstructorReturn(this, (QuickModule.__proto__ || Object.getPrototypeOf(QuickModule)).call(this, props));

        _this.menus = [{
            name: 'diamond',
            title: '自动评价',
            icon: 'diamond',
            color: 'rgb(252, 185, 67)'
        }, {
            name: 'search',
            title: '自动评价',
            icon: 'search',
            color: 'rgb(252, 133, 64)'
        }, {
            name: 'paperplane',
            title: '自动评价',
            icon: 'paperplane',
            color: 'rgb(102, 210, 95)'
        }, {
            name: 'note',
            title: '自动评价',
            icon: 'note',
            color: 'rgb(249, 137, 192)'
        }, {
            name: 'calendar',
            title: '自动评价',
            icon: 'calendar',
            color: 'rgb(75, 200, 245)'
        }, {
            name: 'setting1',
            title: '自动评价',
            icon: 'setting1',
            color: '#EB7E10'
        }, {
            name: 'evaluate',
            title: '自动评价',
            icon: 'evaluate',
            color: '#FF3333'
        }, {
            name: 'msg',
            title: '自动评价',
            icon: 'msg',
            color: '#368BD9'
        }];
        return _this;
    }

    _createClass(QuickModule, [{
        key: 'renderGridCell',
        value: function renderGridCell(item, index) {
            return (0, _weexRx.createElement)(
                _View2.default,
                { style: _QuickModule2.default.module },
                (0, _weexRx.createElement)(
                    _View2.default,
                    { style: [_QuickModule2.default.item, { backgroundColor: item.color }] },
                    (0, _weexRx.createElement)(_iconFont2.default, { iconStyle: _QuickModule2.default.icon, name: item.icon })
                ),
                (0, _weexRx.createElement)(
                    _Text2.default,
                    { style: _QuickModule2.default.f1 },
                    item.title
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return (0, _weexRx.createElement)(
                _View2.default,
                { style: _QuickModule2.default.container },
                (0, _weexRx.createElement)(
                    _View2.default,
                    { style: _QuickModule2.default.subtitle },
                    (0, _weexRx.createElement)(
                        _Text2.default,
                        null,
                        '\u5B9E\u7528\u5DE5\u5177'
                    )
                ),
                (0, _weexRx.createElement)(_MultiRow2.default, { dataSource: this.menus, rows: 4, renderRow: this.renderGridCell.bind(this) })
            );
        }
    }]);

    return QuickModule;
}(_weexRx.Component);

exports.default = QuickModule;
module.exports = exports['default'];