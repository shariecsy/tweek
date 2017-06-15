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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
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

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {


var Header = __webpack_require__(1);
var Container = __webpack_require__(0);
var NoRecord = __webpack_require__(4);

var Root = React.createClass({
	displayName: 'Root',

	getInitialState: function getInitialState() {
		return {
			newsList: [{
				imgUrl: '../images/hospitalLogo.jpg',
				title: '常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物',
				content: "收藏了！",
				date: "2016-12-06",
				clickHandler: function clickHandler() {
					window.location = '../insuranceNews-detail/index.html';
				}
			}, {
				imgUrl: '../images/hospitalLogo.jpg',
				title: '常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物',
				content: "收藏了！",
				date: "2016-12-06",
				clickHandler: function clickHandler() {
					window.location = '../insuranceNews-detail/index.html';
				}
			}, {
				imgUrl: '../images/hospitalLogo.jpg',
				title: '常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物',
				content: "收藏了！",
				date: "2016-12-06",
				clickHandler: function clickHandler() {
					window.location = '../insuranceNews-detail/index.html';
				}
			}, {
				imgUrl: '../images/hospitalLogo.jpg',
				title: '常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物',
				content: "收藏了！",
				date: "2016-12-06",
				clickHandler: function clickHandler() {
					window.location = '../insuranceNews-detail/index.html';
				}
			}, {
				imgUrl: '../images/hospitalLogo.jpg',
				title: '常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物',
				content: "收藏了！",
				date: "2016-12-06",
				clickHandler: function clickHandler() {
					window.location = '../insuranceNews-detail/index.html';
				}
			}, {
				imgUrl: '../images/hospitalLogo.jpg',
				title: '常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物',
				content: "收藏了！",
				date: "2016-12-06",
				clickHandler: function clickHandler() {
					window.location = '../insuranceNews-detail/index.html';
				}
			}, {
				imgUrl: '../images/hospitalLogo.jpg',
				title: '常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物',
				content: "收藏了！",
				date: "2016-12-06",
				clickHandler: function clickHandler() {
					window.location = '../insuranceNews-detail/index.html';
				}
			}, {
				imgUrl: '../images/hospitalLogo.jpg',
				title: '常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物',
				content: "收藏了！",
				date: "2016-12-06",
				clickHandler: function clickHandler() {
					window.location = '../insuranceNews-detail/index.html';
				}
			}, {
				imgUrl: '../images/hospitalLogo.jpg',
				title: '常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物常见儿童禁用或慎用药物',
				content: "收藏了！",
				date: "2016-12-06",
				clickHandler: function clickHandler() {
					window.location = '../insuranceNews-detail/index.html';
				}
			}]
		};
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
						'\u533B\u4FDD\u4E13\u533A'
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
					{ className: 'news-list' },
					React.createElement(
						'div',
						{ className: 'item-list' },
						React.createElement(
							'ul',
							{ className: 'am-list' },
							this.state.newsList.map(function (obj, index) {
								return React.createElement(
									'li',
									{ className: 'am-g', key: index, onClick: obj.clickHandler },
									React.createElement('img', { className: 'item-list-left', src: obj.imgUrl }),
									React.createElement(
										'div',
										{ className: 'item-list-content' },
										React.createElement(
											'p',
											null,
											obj.title
										),
										React.createElement(
											'span',
											null,
											obj.content
										)
									),
									React.createElement(
										'span',
										{ className: 'news-date' },
										obj.date
									)
								);
							})
						)
					)
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

var NoRecord = React.createClass({
	displayName: "NoRecord",

	render: function render() {
		return React.createElement(
			"section",
			{ className: "page-tips" },
			React.createElement("i", { className: "tips-icon tips-icon-res" }),
			React.createElement(
				"div",
				{ className: "tips-word" },
				React.createElement(
					"p",
					{ className: "p1" },
					this.props.text
				)
			)
		);
	}
});

module.exports = NoRecord;

/***/ })

/******/ });