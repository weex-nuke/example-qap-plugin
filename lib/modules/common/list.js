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

var _Image = require('nuke/lib/Image');

var _Image2 = _interopRequireDefault(_Image);

var _TouchableHighlight = require('nuke/lib/TouchableHighlight');

var _TouchableHighlight2 = _interopRequireDefault(_TouchableHighlight);

var _app = require('../app.rxscss');

var _app2 = _interopRequireDefault(_app);

var _nukeMounter = require('nuke-mounter');

var _Button = require('nuke/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Input = require('nuke/lib/Input');

var _Input2 = _interopRequireDefault(_Input);

var _ListView = require('nuke/lib/ListView');

var _ListView2 = _interopRequireDefault(_ListView);

var _Icon = require('nuke/lib/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _nukeComponents = require('nuke-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** @jsx createElement */


var listData = [];
for (var i = 0; i < 30; i++) {
    listData.push({ key: i, text: '第' + i + '条数据' });
}

var ListViewDemo = function (_Component) {
    _inherits(ListViewDemo, _Component);

    function ListViewDemo() {
        _classCallCheck(this, ListViewDemo);

        var _this = _possibleConstructorReturn(this, (ListViewDemo.__proto__ || Object.getPrototypeOf(ListViewDemo)).call(this));

        _this.handleRefresh = function (e) {
            _this.setState({
                isRefreshing: true,
                refreshText: '加载中'
            });
            setTimeout(function () {
                // prepend 10 items

                _this.setState({

                    isRefreshing: false,
                    data: listData,
                    refreshText: '↓ 下拉刷新'
                });
            }, 3000);
        };

        _this.renderHeader = function () {
            return _this.state.initShowLoading ? (0, _weexRx.createElement)(
                _View2.default,
                { style: [_app2.default.initLoading] },
                (0, _weexRx.createElement)(_Icon2.default, { name: 'loading', style: { marginRight: '20rem' } }),
                (0, _weexRx.createElement)(
                    _Text2.default,
                    { style: _app2.default.loadingText },
                    '\u52AA\u529B\u52A0\u8F7Ding'
                )
            ) : (0, _weexRx.createElement)(
                _nukeComponents.RefreshControl,
                { style: _app2.default.refresh, refreshing: _this.state.isRefreshing, onRefresh: _this.handleRefresh },
                (0, _weexRx.createElement)(
                    _Text2.default,
                    { style: _app2.default.loadingText },
                    _this.state.refreshText
                )
            );
        };

        _this.renderFooter = function () {
            return _this.state.showLoadingMore ? (0, _weexRx.createElement)(
                _View2.default,
                { style: [_app2.default.loading] },
                (0, _weexRx.createElement)(
                    _Text2.default,
                    { style: _app2.default.loadingText },
                    '\u52A0\u8F7D\u4E2D...'
                )
            ) : null;
        };

        _this.state = {
            initShowLoading: true, //顶部加载
            showLoadingMore: false, //底部刷新
            data: [{ key: '原有xx', text: '上一次加载的数据' }],

            isRefreshing: false,
            refreshText: '↓ 下拉刷新'
        };
        _this.index = 0;

        return _this;
    }

    _createClass(ListViewDemo, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var self = this;
            setTimeout(function () {
                self.setState({
                    data: listData,
                    initShowLoading: false
                });
            }, 3000);
        }
    }, {
        key: 'handleLoadMore',
        value: function handleLoadMore() {
            var self = this;
            // 这里进行异步操作

            if (self.index == 5) {
                self.setState({ showLoadingMore: false });
                return;
            } else {
                setTimeout(function () {

                    self.state.data.push({ key: 'l1', text: 'loadmore1' }, { key: 'l2', text: 'loadmore2' }, { key: 'l3', text: 'loadmore3' }, { key: 'l4', text: 'loadmore4' }, { key: 'l5', text: 'loadmore5' });
                    self.setState(self.state);
                    self.index++;
                }, 2000);
            }
        }
    }, {
        key: 'linkTo',
        value: function linkTo(item, e) {
            console.log(e);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'renderItem',
        value: function renderItem(item, index) {
            return (0, _weexRx.createElement)(
                _TouchableHighlight2.default,
                { style: _app2.default.cellItemList, onPress: this.linkTo.bind(this, item) },
                (0, _weexRx.createElement)(
                    _Text2.default,
                    { style: _app2.default.itemTextList },
                    item.text
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var self = this;
            return (0, _weexRx.createElement)(_ListView2.default, {
                renderHeader: this.renderHeader,
                renderFooter: this.renderFooter,
                renderRow: this.renderItem.bind(this),
                dataSource: this.state.data,

                style: _app2.default.listContainer,
                onEndReached: this.handleLoadMore.bind(this)
            });
        }
    }]);

    return ListViewDemo;
}(_weexRx.Component);

exports.default = List;
module.exports = exports['default'];