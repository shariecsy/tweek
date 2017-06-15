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
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
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

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = __webpack_require__(1);
var Container = __webpack_require__(0);

var Root = React.createClass({
	displayName: 'Root',

	componentDidMount: function componentDidMount() {
		var data = [{
			id: 0,
			title: '绑卡成功',
			btime: '2017-01-01 12:01:01',
			content: '广州市XX医院',
			subtitle: '恭喜,您已成功绑定就诊卡,现在可以在线挂号'
		}, {
			id: 0,
			title: '绑卡成功',
			btime: '2017-01-01 12:01:01',
			content: '广州市XX医院',
			subtitle: '恭喜,您已成功绑定就诊卡,现在可以在线挂号'
		}];
		// this.refs.msglist.setListData(data);
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
					React.createElement('a', { className: 'am-btn am-btn-link am-icon-angle-left' })
				),
				React.createElement(
					Header.CenterItem,
					null,
					React.createElement(
						'h1',
						{ className: 'am-header-title' },
						'\u6211\u7684\u5BB6\u4EBA'
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
					{ className: 'my-message perfect-info' },
					React.createElement(
						'ul',
						null,
						React.createElement(
							'li',
							null,
							React.createElement(
								'label',
								null,
								'\u59D3\u540D'
							),
							React.createElement('input', { type: 'text', placeholder: '\u8BF7\u8F93\u5165\u59D3\u540D' })
						),
						React.createElement(
							'li',
							null,
							React.createElement(
								'label',
								null,
								'\u8BC1\u4EF6\u7C7B\u578B'
							),
							React.createElement(
								'select',
								null,
								React.createElement(
									'option',
									null,
									'\u8BF7\u9009\u62E9'
								),
								React.createElement(
									'option',
									null,
									'\u4E8C\u4EE3\u8EAB\u4EFD\u8BC1'
								),
								React.createElement(
									'option',
									null,
									'\u519B\u5B98\u8BC1'
								),
								React.createElement(
									'option',
									null,
									'\u6E2F\u6FB3\u901A\u884C\u8BC1'
								),
								React.createElement(
									'option',
									null,
									'\u62A4\u7167'
								)
							)
						),
						React.createElement(
							'li',
							null,
							React.createElement(
								'label',
								null,
								'\u8BC1\u4EF6\u53F7'
							),
							React.createElement('input', { type: 'text', placeholder: '\u8BF7\u8F93\u5165\u8BC1\u4EF6\u53F7' })
						),
						React.createElement(
							'li',
							null,
							React.createElement(
								'label',
								null,
								'\u51FA\u751F\u65E5\u671F'
							),
							React.createElement('input', { type: 'data', placeholder: '\u8BF7\u586B\u5199\u4F60\u7684\u51FA\u751F\u65E5\u671F' })
						),
						React.createElement(
							'li',
							null,
							React.createElement(
								'label',
								null,
								'\u6027\u522B'
							),
							React.createElement(
								'div',
								{ className: 'radio' },
								React.createElement('input', { type: 'radio', className: 'radio', name: 'Sex', value: 'female' }),
								'\u5973'
							),
							React.createElement(
								'div',
								{ className: 'radio' },
								React.createElement('input', { type: 'radio', name: 'Sex', value: 'male' }),
								'\u7537'
							)
						),
						React.createElement(
							'li',
							null,
							React.createElement(
								'label',
								null,
								'\u624B\u673A\u53F7\u7801'
							),
							React.createElement('input', { type: 'text', placeholder: '\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801' })
						)
					),
					React.createElement(
						'div',
						{ className: 'bottom-btn' },
						React.createElement(
							'button',
							{ className: 'am-btn am-btn-primary am-round' },
							'\u4FDD\u5B58'
						)
					)
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ })

/******/ });