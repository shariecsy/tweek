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
/******/ 	return __webpack_require__(__webpack_require__.s = 59);
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

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {


var Header = __webpack_require__(1);
var Container = __webpack_require__(0);

var Root = React.createClass({
	displayName: 'Root',

	getInitialState: function getInitialState() {
		return {};
	},
	_chooseDepartmentList: function _chooseDepartmentList() {
		window.location = "../registration-chooseDepartment/index.html";
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
						'\u6302\u53F7'
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
					{ className: 'choose-type' },
					React.createElement(
						'div',
						{ className: 'rgstr-type-top' },
						React.createElement(
							'ul',
							{ className: 'clearfix' },
							React.createElement(
								'li',
								{ onClick: this._chooseDepartmentList },
								React.createElement(
									'p',
									null,
									React.createElement('i', { className: 'am-icon-plus-square am-icon-md' })
								),
								React.createElement(
									'p',
									null,
									'\u5F53\u5929\u6302\u53F7'
								)
							),
							React.createElement(
								'li',
								{ onClick: this._chooseDepartmentList },
								React.createElement(
									'p',
									null,
									React.createElement('i', { className: 'am-icon-medkit am-icon-md' })
								),
								React.createElement(
									'p',
									null,
									'\u9884\u7EA6\u6302\u53F7'
								)
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'rgstr-type-notice' },
						React.createElement(
							'p',
							null,
							'\u6302\u53F7\u987B\u77E5'
						),
						React.createElement(
							'p',
							null,
							'1.\u6BCF\u65E500:00\u622A\u6B62\u9884\u7EA6\u6216\u53D6\u6D88\u6B21\u65E5\u8BA2\u5355\uFF1B'
						),
						React.createElement(
							'p',
							null,
							'1.\u6BCF\u65E500:00\u622A\u6B62\u9884\u7EA6\u6216\u53D6\u6D88\u6B21\u65E5\u8BA2\u5355\uFF1B'
						),
						React.createElement(
							'p',
							null,
							'1.\u6BCF\u65E500:00\u622A\u6B62\u9884\u7EA6\u6216\u53D6\u6D88\u6B21\u65E5\u8BA2\u5355\uFF1B'
						),
						React.createElement(
							'p',
							null,
							'1.\u6BCF\u65E500:00\u622A\u6B62\u9884\u7EA6\u6216\u53D6\u6D88\u6B21\u65E5\u8BA2\u5355\uFF1B'
						),
						React.createElement(
							'p',
							null,
							'1.\u6BCF\u65E500:00\u622A\u6B62\u9884\u7EA6\u6216\u53D6\u6D88\u6B21\u65E5\u8BA2\u5355\uFF1B'
						),
						React.createElement(
							'p',
							null,
							'1.\u6BCF\u65E500:00\u622A\u6B62\u9884\u7EA6\u6216\u53D6\u6D88\u6B21\u65E5\u8BA2\u5355\uFF1B'
						),
						React.createElement(
							'p',
							null,
							'1.\u6BCF\u65E500:00\u622A\u6B62\u9884\u7EA6\u6216\u53D6\u6D88\u6B21\u65E5\u8BA2\u5355\uFF1B'
						)
					),
					React.createElement(
						'div',
						{ className: 'app-notice' },
						React.createElement('i', { className: 'am-icon-check-square' }),
						'\u540C\u610F\u4EE5\u4E0A\u6302\u53F7\u987B\u77E5\u5185\u5BB9'
					)
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ })

/******/ });