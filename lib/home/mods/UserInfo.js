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

var _UserInfo = require('./UserInfo.rxscss');

var _UserInfo2 = _interopRequireDefault(_UserInfo);

var _fetch = require('$root/lib/fetch');

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserInfo = function (_Component) {
    _inherits(UserInfo, _Component);

    function UserInfo(props) {
        _classCallCheck(this, UserInfo);

        var _this = _possibleConstructorReturn(this, (UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).call(this, props));

        _this.state = {
            user: {}
        };
        return _this;
    }

    _createClass(UserInfo, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            (0, _fetch2.default)('userInfo').then(function (res) {
                console.log(res);
                _this2.setState({ user: res.userInfo });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return (0, _weexRx.createElement)(
                _View2.default,
                { style: _UserInfo2.default.container },
                (0, _weexRx.createElement)(_Image2.default, { source: { uri: this.state.user.avatar }, style: _UserInfo2.default.img }),
                (0, _weexRx.createElement)(
                    _Text2.default,
                    { style: _UserInfo2.default.f1 },
                    '\u4F60\u597D\uFF0C',
                    this.state.user.userNick
                )
            );
        }
    }]);

    return UserInfo;
}(_weexRx.Component);

exports.default = UserInfo;
module.exports = exports['default'];