/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

var Container = React.createClass({
	displayName: "Container",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "main-body" },
			this.props.children
		);
	}
});

module.exports = Container;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

var Header = React.createClass({
	displayName: "Header",

	render: function render() {
		return React.createElement(
			"header",
			{ "data-am-widget": "header", className: "am-header am-header-app am-header-fixed" },
			this.props.children
		);
	}
});

Header.LeftItem = React.createClass({
	displayName: "LeftItem",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "am-header-left am-header-nav" },
			this.props.children
		);
	}
});

Header.CenterItem = React.createClass({
	displayName: "CenterItem",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "am-header-nav-center" },
			this.props.children
		);
	}
});

Header.RightItem = React.createClass({
	displayName: "RightItem",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "am-header-right am-header-nav" },
			this.props.children
		);
	}
});

module.exports = Header;

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

/**
 * Created by ucs_chenshaoyi on 2017/6/12.
 */
var BindCard = React.createClass({
    displayName: "BindCard",

    render: function render() {
        return React.createElement(
            "div",
            { className: "bindCard-box" },
            React.createElement(
                "section",
                { className: "csn-m-scroll" },
                React.createElement(
                    "ul",
                    { className: "csn-box csn-list" },
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "label",
                            null,
                            "\u59D3\u540D"
                        ),
                        React.createElement("input", { type: "text", className: "input-txt", placeholder: "\u8BF7\u8F93\u5165\u6301\u5361\u4EBA\u59D3\u540D" })
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "label",
                            null,
                            "\u8EAB\u4EFD\u8BC1\u53F7"
                        ),
                        React.createElement("input", { type: "text", className: "input-txt", placeholder: "\u8BF7\u8F93\u5165\u6301\u5361\u4EBA\u8EAB\u4EFD\u8BC1\u53F7" })
                    )
                ),
                React.createElement(
                    "a",
                    { href: "javascript:void(0);", className: "csn-btn" },
                    "\u9A8C\u8BC1\u8EAB\u4EFD"
                ),
                React.createElement(
                    "footer",
                    { className: "csn-footer" },
                    React.createElement(
                        "div",
                        null,
                        "\u672C\u670D\u52A1\u7531\u4FE1\u8D26\u5B9D\u63D0\u4F9B\u652F\u6301"
                    )
                )
            )
        );
    }
});

module.exports = BindCard;

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {


var Header = __webpack_require__(1);
var Container = __webpack_require__(0);
var BindCard = __webpack_require__(10);

var Root = React.createClass({
	displayName: 'Root',

	getInitialState: function getInitialState() {
		return {
			toBindCard: false
		};
	},
	_bindCard: function _bindCard() {
		this.refs.main.style.display = 'none';
		this.setState({
			toBindCard: true
		});
	},
	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				Header,
				null,
				React.createElement(
					Header.LeftItem,
					null,
					React.createElement(
						'a',
						null,
						React.createElement('i', { className: 'am-icon-angle-left am-icon-lg' })
					)
				),
				React.createElement(
					Header.CenterItem,
					null,
					React.createElement(
						'h1',
						{ className: 'am-header-title' },
						'\u533B\u7A0B\u901A\u94B1\u5305'
					)
				),
				React.createElement(
					Header.RightItem,
					null,
					React.createElement(
						'a',
						{ href: '../index/index.html' },
						'\u9996\u9875'
					)
				)
			),
			React.createElement(
				Container,
				null,
				React.createElement(
					'div',
					{ ref: 'main', className: 'purse' },
					React.createElement(
						'div',
						{ className: 'yct-wallet-msg' },
						React.createElement(
							'p',
							null,
							React.createElement('i', { className: 'icon icon-wallet-disabled' })
						),
						React.createElement(
							'p',
							{ className: 'mt20' },
							'\xA0\xA0\u5F00\u901A\u533B\u7A0B\u901A\u94B1\u5305\u3001\u5B89\u5168\u5FEB\u6377\u3001\u66F4\u591A\u4F18\u60E0\u798F\u5229\uFF01'
						)
					),
					React.createElement(
						'div',
						{ className: 'button' },
						React.createElement(
							'a',
							{ className: 'btn-save', onClick: this._bindCard },
							'\u5F00\u901A\u533B\u7A0B\u901A\u94B1\u5305'
						),
						React.createElement(
							'p',
							{ className: 'p-agree yct-wallet-info' },
							React.createElement(
								'a',
								{ className: 'a-agree active' },
								React.createElement('i', { className: 'icon am-icon-check-circle middle' })
							),
							'\u5F00\u901A\u5373\u4EE3\u8868\u60A8\u5DF2\u9605\u8BFB\u5E76\u540C\u610F',
							React.createElement(
								'a',
								{ href: '#' },
								'\u300A\u533B\u7A0B\u901A\u94B1\u5305\u534F\u8BAE\u300B'
							)
						)
					),
					React.createElement(
						'p',
						{ className: 'yct-wallet-tips' },
						React.createElement(
							'a',
							{ className: 'color-2eacff' },
							'\u533B\u7A0B\u901A\u94B1\u5305\u8BF4\u660E'
						)
					)
				),
				this.state.toBindCard ? React.createElement(BindCard, null) : ''
			)
		);
	}
});

ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ })

/******/ });