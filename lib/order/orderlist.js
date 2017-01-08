'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nukeMounter = require('nuke-mounter');

var _weexRx = require('weex-rx');

var _View = require('nuke/lib/View');

var _View2 = _interopRequireDefault(_View);

var _ListView = require('nuke/lib/ListView');

var _ListView2 = _interopRequireDefault(_ListView);

var _Icon = require('nuke/lib/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Text = require('nuke/lib/Text');

var _Text2 = _interopRequireDefault(_Text);

var _TouchableHighlight = require('nuke/lib/TouchableHighlight');

var _TouchableHighlight2 = _interopRequireDefault(_TouchableHighlight);

var _Modal = require('nuke/lib/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Image = require('nuke/lib/Image');

var _Image2 = _interopRequireDefault(_Image);

var _RefreshControl = require('nuke/lib/RefreshControl');

var _RefreshControl2 = _interopRequireDefault(_RefreshControl);

var _Animated = require('nuke/lib/Animated');

var _Animated2 = _interopRequireDefault(_Animated);

var _Swipe = require('nuke/lib/Swipe');

var _Swipe2 = _interopRequireDefault(_Swipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var listData = [];
for (var i = 0; i < 30; i++) {
    listData.push({ key: i, text: '第' + i + '条数据' });
}

var OrderList = function (_Component) {
    _inherits(OrderList, _Component);

    function OrderList() {
        _classCallCheck(this, OrderList);

        var _this = _possibleConstructorReturn(this, (OrderList.__proto__ || Object.getPrototypeOf(OrderList)).call(this));

        _this.handleRefresh = function (e) {
            _this.setState({
                isRefreshing: true,
                refreshText: '加载中'
            });
            setTimeout(function () {
                _this.setState({
                    isRefreshing: false,
                    data: listData,
                    refreshText: '↓ 下拉刷新'
                });
            }, 3000);
        };

        _this.renderItem = function (item, index) {
            return (0, _weexRx.createElement)(
                _TouchableHighlight2.default,
                { style: app.cellItemList, onPress: _this.linkTo.bind(_this, item) },
                (0, _weexRx.createElement)(
                    _Text2.default,
                    { style: app.itemTextList },
                    item.text
                )
            );
        };

        _this.renderHeader = function () {
            return (0, _weexRx.createElement)(
                _RefreshControl2.default,
                { style: app.refresh, refreshing: _this.state.isRefreshing, onRefresh: _this.handleRefresh },
                (0, _weexRx.createElement)(
                    _Text2.default,
                    { style: app.loadingText },
                    _this.state.refreshText
                )
            );
        };

        _this.renderFooter = function () {
            return _this.state.showLoading ? (0, _weexRx.createElement)(
                _View2.default,
                { style: [app.loading] },
                (0, _weexRx.createElement)(
                    _Text2.default,
                    { style: app.loadingText },
                    '\u52A0\u8F7D\u4E2D...'
                )
            ) : null;
        };

        _this.state = {
            data: listData,
            stop: false,
            isRefreshing: false,
            showLoading: true,
            refreshText: '↓ 下拉刷新'
        };
        _this.index = 0;

        return _this;
    }

    _createClass(OrderList, [{
        key: 'handleLoadMore',
        value: function handleLoadMore() {
            var self = this;
            // 这里进行异步操作
            if (self.index == 5) {
                self.setState({ showLoading: false });
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
        key: 'render',
        value: function render() {
            var self = this;
            return (0, _weexRx.createElement)(_ListView2.default, {
                renderHeader: this.renderHeader,
                renderFooter: this.renderFooter,
                renderRow: this.renderItem,
                dataSource: this.state.data,

                style: app.listContainer,
                onEndReached: this.handleLoadMore.bind(this)
            });
        }
    }]);

    return OrderList;
}(_weexRx.Component);

var app = {
    cellItemList: {
        backgroundColor: "#ffffff",
        height: "110rem",
        borderBottomWidth: "2rem",
        borderBottomStyle: "solid",
        borderBottomColor: "#e8e8e8",
        paddingLeft: "30rem",
        alignItems: "center",
        flexDirection: "row"
    },
    itemTextList: {
        fontSize: "30rem",
        color: "#5F646E"
    },
    refresh: {
        height: "80rem",
        width: "750rem",
        backgroundColor: "#cccccc",
        justifyContent: "center",
        alignItems: "center"
    },
    loading: {
        height: "80rem",
        display: "flex",
        width: "750rem",
        flexDirection: "row",
        backgroundColor: "#cccccc",
        alignItems: "center",
        justifyContent: "center"
    },
    loadingText: {
        color: "#666666"
    }
};

(0, _nukeMounter.mount)((0, _weexRx.createElement)(OrderList, null), 'body');