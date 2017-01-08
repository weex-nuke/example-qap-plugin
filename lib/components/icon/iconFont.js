'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _weexRx = require('weex-rx');

var _baseModule = require('$root/lib/baseModule');

var _baseModule2 = _interopRequireDefault(_baseModule);

var _Text = require('nuke/lib/Text');

var _Text2 = _interopRequireDefault(_Text);

var _iconSource = require('./iconSource');

var _iconSource2 = _interopRequireDefault(_iconSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconFont = function (_BaseModule) {
    _inherits(IconFont, _BaseModule);

    function IconFont(props) {
        _classCallCheck(this, IconFont);

        var _this = _possibleConstructorReturn(this, (IconFont.__proto__ || Object.getPrototypeOf(IconFont)).call(this, props));

        _this.icons = _iconSource2.default;
        return _this;
    }

    _createClass(IconFont, [{
        key: 'render',
        value: function render() {
            var iconStyle = this.props.iconStyle;

            return (0, _weexRx.createElement)(
                _Text2.default,
                { style: [iconStyle, styles.icon] },
                this.icons[this.props.name]
            );
        }
    }]);

    return IconFont;
}(_baseModule2.default);

IconFont.protTypes = {
    name: _weexRx.PropTypes.string
};


var styles = {
    icon: {
        fontFamily: 'iconfont',
        textAlign: 'center'
    }
};

module.exports = IconFont;