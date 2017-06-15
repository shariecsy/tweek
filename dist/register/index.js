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
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
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

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

var Container = __webpack_require__(0);
var Password = React.createClass({
	displayName: "Password",

	getInitialState: function getInitialState() {
		return {
			passwordShow: false,
			regCodeShow: false
		};
	},
	_passwordShow: function _passwordShow() {
		this.setState({
			passwordShow: !this.state.passwordShow
		});
	},
	_regCodeShow: function _regCodeShow() {
		this.setState({
			regCodeShow: !this.state.regCodeShow
		});
	},

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				Container,
				null,
				React.createElement(
					"div",
					{ className: "register-box" },
					React.createElement(
						"div",
						{ className: "item" },
						React.createElement(
							"span",
							{ className: "label" },
							"\u5BC6\u7801"
						),
						React.createElement("input", { type: this.state.passwordShow ? "text" : "password", placeholder: "\u8BF7\u8F93\u5165\u5BC6\u78016-16\u4F4D" }),
						React.createElement(
							"a",
							{ href: "###", onClick: this._passwordShow },
							React.createElement("i", { className: this.state.passwordShow ? "icon am-icon-eye middle active" : "icon am-icon-eye middle" })
						)
					),
					React.createElement(
						"div",
						{ className: this.state.regCodeShow ? "item reg-code-box block" : "item reg-code-box" },
						React.createElement(
							"span",
							{ className: "label" },
							"\u9080\u8BF7\u7801"
						),
						React.createElement("input", { type: "text", placeholder: "\u8BF7\u8F93\u5165\u9080\u8BF7\u7801\uFF08\u975E\u5FC5\u586B\uFF09" })
					),
					React.createElement(
						"div",
						{ className: "item reg-code-show", onClick: this._regCodeShow },
						React.createElement(
							"strong",
							null,
							"\u5982\u6709\u9080\u8BF7\u7801\u8BF7\u5C55\u5F00\u540E\u8F93\u5165"
						),
						React.createElement("i", { className: this.state.regCodeShow ? "icon am-icon-angle-double-down am-icon-md" : "icon am-icon-angle-double-up am-icon-md" })
					)
				)
			),
			React.createElement(
				"div",
				{ className: "btn-box" },
				React.createElement(
					"a",
					{ href: "###", className: "btn btn-confirm" },
					"\u7ACB\u5373\u6CE8\u518C"
				)
			)
		);
	}
});

module.exports = Password;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

var Layer = React.createClass({
	displayName: "Layer",

	render: function render() {
		var layerCls = this.props.layerCls || '';
		return React.createElement(
			"div",
			{ className: this.props.show ? "block" : "none" },
			React.createElement(
				"div",
				{ className: "layer-container " + layerCls },
				React.createElement(
					"div",
					{ className: "layer-body" },
					this.props.children
				)
			)
		);
	}
});

Layer.Title = React.createClass({
	displayName: "Title",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "layer-title" },
			this.props.children
		);
	}
});
Layer.Text = React.createClass({
	displayName: "Text",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "layer-text" },
			this.props.children
		);
	}
});
Layer.Button = React.createClass({
	displayName: "Button",


	render: function render() {
		return React.createElement(
			"div",
			{ className: "layer-button" },
			React.createElement(
				"a",
				{ href: "javascript:;", className: "layer-btn cancel", onClick: this.props.confirm },
				"\u786E\u8BA4"
			),
			React.createElement(
				"a",
				{ href: "javascript:;", className: "layer-btn confirm", onClick: this.props.cancel },
				"\u53D6\u6D88"
			)
		);
	}
});
Layer.Background = React.createClass({
	displayName: "Background",

	render: function render() {
		return React.createElement("div", { className: this.props.show ? "layer-background block" : "layer-background" });
	}
});

module.exports = Layer;

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {


var Header = __webpack_require__(1);
var Container = __webpack_require__(0);
var Layer = __webpack_require__(5);
var Password = __webpack_require__(11);
var Root = React.createClass({
	displayName: 'Root',

	getInitialState: function getInitialState() {
		return {
			show: false,
			btnText: "获取验证码",
			codeBtnClass: "am-btn am-btn-default am-round am-btn-xs",
			codeSendMsg: false,
			toSetPassword: false
		};
	},
	_getCode: function _getCode() {
		this.setState({
			show: true,
			btnText: "校验中"
		});
	},
	_closeLayer: function _closeLayer() {
		this.setState({
			show: false,
			btnText: "获取验证码"
		});
	},
	_checkCode: function _checkCode() {
		var me = this;
		this.setState({
			show: false,
			codeBtnClass: "am-btn am-btn-default am-round am-btn-xs gettingCode",
			codeSendMsg: true
		});
		var totalTime = 60;
		var timer = setInterval(function () {
			totalTime--;
			me.setState({
				btnText: totalTime + "s"
			});
			if (totalTime < 1) {
				clearInterval(timer);
				me.setState({
					codeBtnClass: "am-btn am-btn-default am-round am-btn-xs",
					btnText: "获取验证码"
				});
			}
		}, 1000);
	},
	_toSetPassword: function _toSetPassword() {
		this.refs.main.style.display = 'none';
		this.setState({
			toSetPassword: true
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
						'\u6CE8\u518C\u8D26\u53F7'
					)
				)
			),
			React.createElement(
				'div',
				{ ref: 'main' },
				React.createElement(
					Container,
					null,
					React.createElement(
						'div',
						{ className: 'register-box' },
						React.createElement(
							'div',
							{ className: 'item' },
							React.createElement(
								'span',
								{ className: 'label' },
								'\u624B\u673A\u53F7\u7801'
							),
							React.createElement('input', { type: 'text', placeholder: '\u8BF7\u8F93\u5165\u60A8\u7684\u624B\u673A\u53F7\u7801' }),
							React.createElement(
								'button',
								{ type: 'button', className: this.state.codeBtnClass, onClick: this._getCode, id: 'codeBtn' },
								this.state.btnText
							)
						),
						React.createElement(
							'div',
							{ className: 'item' },
							React.createElement(
								'span',
								{ className: 'label' },
								'\u9A8C\u8BC1\u7801'
							),
							React.createElement('input', { type: 'text', placeholder: '\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801' })
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'app-notice' },
					React.createElement('i', { className: 'am-icon-check-circle' }),
					React.createElement(
						'span',
						null,
						'\u6CE8\u518C\u5373\u4EE3\u8868\u60A8\u5DF2\u9605\u8BFB'
					),
					React.createElement(
						'a',
						{ href: '../agreement/index.html' },
						'\u300A\u5E73\u53F0\u534F\u8BAE\u300B'
					)
				),
				React.createElement(
					'div',
					{ className: 'btn-box' },
					React.createElement(
						'a',
						{ href: '###', className: 'btn btn-confirm', onClick: this._toSetPassword },
						'\u4E0B\u4E00\u6B65'
					)
				),
				this.state.codeSendMsg ? React.createElement(
					'div',
					{ className: 'app-notice' },
					'\u77ED\u4FE1\u9A8C\u8BC1\u7801\u5DF2\u53D1\u9001\u6210\u529F\uFF0C\u8BF7\u7559\u610F\u300260\u79D2\u5185\u6536\u4E0D\u5230\u53EF\u518D\u6B21\u70B9\u51FB\u53D1\u9001'
				) : "",
				React.createElement(
					Layer,
					{ show: this.state.show, layerCls: 'cmd' },
					React.createElement(
						Layer.Title,
						null,
						'\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801',
						React.createElement('i', { className: 'layer-close am-icon-close', onClick: this._closeLayer })
					),
					React.createElement(
						Layer.Text,
						null,
						React.createElement(
							'div',
							{ className: 'validate-code-img' },
							React.createElement('img', { src: '../images/generatePicCode.jpg', alt: '\u9A8C\u8BC1\u7801' }),
							React.createElement(
								'a',
								{ href: '#' },
								'\u6362\u4E00\u5F20'
							)
						),
						React.createElement(
							'div',
							{ className: 'pwdBox' },
							React.createElement(
								'div',
								{ className: 'inputBoxContainer' },
								React.createElement('input', { type: 'tel', className: 'realInput' }),
								React.createElement(
									'div',
									{ className: 'bogusInput validate-code' },
									React.createElement('input', { type: 'text', maxLength: '1', disabled: '', onChange: this._checkCode }),
									React.createElement('input', { type: 'text', maxLength: '1', disabled: '' }),
									React.createElement('input', { type: 'text', maxLength: '1', disabled: '' }),
									React.createElement('input', { type: 'text', maxLength: '1', disabled: '' })
								)
							)
						)
					)
				),
				React.createElement(Layer.Background, { show: this.state.show })
			),
			this.state.toSetPassword ? React.createElement(Password, null) : ''
		);
	}
});

ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ })

/******/ });