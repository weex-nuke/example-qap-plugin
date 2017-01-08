'use strict';

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Evaluate = function (_Component) {
    _inherits(Evaluate, _Component);

    function Evaluate(props) {
        _classCallCheck(this, Evaluate);

        return _possibleConstructorReturn(this, (Evaluate.__proto__ || Object.getPrototypeOf(Evaluate)).call(this, props));
    }

    _createClass(Evaluate, [{
        key: 'render',
        value: function render() {
            return (0, _weexRx.createElement)(
                _Text2.default,
                null,
                'Evaluate'
            );
        }
    }]);

    return Evaluate;
}(_weexRx.Component);

var styles = {};
(0, _nukeMounter.mount)((0, _weexRx.createElement)(Evaluate, null), 'body');