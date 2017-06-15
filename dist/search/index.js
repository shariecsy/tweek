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
/******/ 	return __webpack_require__(__webpack_require__.s = 61);
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

/***/ 61:
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
					React.createElement('a', { className: 'am-btn am-btn-link am-icon-angle-left', href: 'javascript:window.history.back()' })
				),
				React.createElement(
					Header.CenterItem,
					null,
					React.createElement(
						'h1',
						{ className: 'am-header-title' },
						'\u641C\u7D22'
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
					{ ref: 'searchHistory' },
					React.createElement(
						'div',
						{ className: 'search-box' },
						React.createElement(
							'div',
							{ className: 'am-input-group' },
							React.createElement(
								'span',
								{ className: 'am-input-group-label' },
								React.createElement('i', { className: 'am-icon-search am-icon-fw' })
							),
							React.createElement('input', { type: 'text', className: 'am-form-field', placeholder: 'Username' })
						),
						React.createElement(
							'button',
							{ className: 'am-btn am-btn-link' },
							'\u53D6\u6D88'
						)
					),
					React.createElement(
						'div',
						{ className: 'search-container' },
						React.createElement(
							'div',
							{ className: 'searched' },
							React.createElement(
								'div',
								{ className: 'searched-tit' },
								'\u6700\u8FD1\u641C\u7D22'
							),
							React.createElement(
								'div',
								{ className: 'searched-con' },
								React.createElement(
									'div',
									{ className: 'h-keyword' },
									React.createElement(
										'a',
										{ className: 'touch' },
										'\u6797'
									)
								)
							)
						),
						React.createElement(
							'div',
							{ className: 'clear-searched' },
							React.createElement(
								'a',
								null,
								'\u6E05\u7406\u641C\u7D22\u8BB0\u5F55'
							)
						)
					)
				),
				React.createElement(
					'div',
					{ ref: 'searchResult', className: 'search-result' },
					React.createElement(
						'section',
						{ className: 'doctor info-list results-list' },
						React.createElement(
							'h3',
							{ className: 'h3-tit color-999' },
							'\u76F8\u5173\u533B\u751F',
							React.createElement(
								'span',
								{ className: 'h3-tit-min' },
								'\uFF08\u53EA\u80FD\u641C\u7D22\u8FD1\u51E0\u5929\u5185\u6709\u6392\u73ED\u7684\u533B\u751F\uFF09'
							)
						),
						React.createElement(
							'a',
							{ className: 'results-doctor', href: 'javascript:void(0)' },
							React.createElement(
								'i',
								{ className: 'portrait' },
								React.createElement('img', { src: 'https://yct.968309.com/mobileapp/images/avatar.png', className: 'ele-circle' })
							),
							React.createElement(
								'p',
								{ className: 'doctor-name' },
								React.createElement(
									'span',
									null,
									React.createElement(
										'i',
										null,
										'\u6797'
									),
									'\u83C1'
								),
								React.createElement('b', null)
							),
							React.createElement(
								'p',
								{ className: 'doctor-sections' },
								'\u5E7F\u5DDE\u5E02\u7B2C\u516B\u4EBA\u6C11\u533B\u9662\uFF08\u5609\u79BE\u9662\u533A\uFF09'
							),
							React.createElement(
								'p',
								{ className: 'p2' },
								'\u79D1\u5BA4\uFF1A\u5609\u79BE\u513F\u79D1'
							)
						),
						React.createElement(
							'a',
							{ className: 'results-doctor', href: 'javascript:void(0)' },
							React.createElement(
								'i',
								{ className: 'portrait' },
								React.createElement('img', { src: 'https://yct.968309.com/mobileapp/images/avatar.png', className: 'ele-circle' })
							),
							React.createElement(
								'p',
								{ className: 'doctor-name' },
								React.createElement(
									'span',
									null,
									React.createElement(
										'i',
										null,
										'\u6797'
									),
									'\u6BC5'
								),
								React.createElement(
									'b',
									null,
									'\u6559\u6388'
								)
							),
							React.createElement(
								'p',
								{ className: 'doctor-sections' },
								'\u5E7F\u4E1C\u7701\u4E2D\u533B\u9662\u5927\u5B66\u57CE\u533B\u9662'
							),
							React.createElement(
								'p',
								{ className: 'p2' },
								'\u4E00\u7EA7\u79D1\u5BA4\uFF1A\u5927\u5B66\u57CE\u4E94\u697C\u4E73\u817A\u95E8\u8BCA'
							),
							React.createElement(
								'p',
								{ className: 'p2' },
								'\u4E8C\u7EA7\u79D1\u5BA4\uFF1A\u4E73\u817A\u4E13\u79D1'
							)
						),
						React.createElement(
							'a',
							{ className: 'results-more' },
							'\u66F4\u591A\u533B\u751F'
						)
					),
					React.createElement(
						'section',
						{ className: 'dept info-list results-list' },
						React.createElement(
							'h3',
							{ className: 'h3-tit color-999' },
							'\u76F8\u5173\u79D1\u5BA4'
						),
						React.createElement(
							'a',
							{ className: 'info-row' },
							React.createElement(
								'h4',
								{ className: 'h4-name' },
								'\u5E7F\u4E1C\u7701\u4E2D\u533B\u9662\u5927\u5FB7\u8DEF\u603B\u9662'
							),
							React.createElement(
								'p',
								{ className: 'p2' },
								'\u4E00\u7EA7\u79D1\u5BA4\uFF1A\u897F\u533A\u4E94\u697C\u4E2D\u533B\u6D41\u6D3E\u95E8\u8BCA'
							),
							React.createElement(
								'p',
								{ className: 'p2' },
								'\u4E8C\u7EA7\u79D1\u5BA4\uFF1A\u5CAD\u5357',
								React.createElement(
									'i',
									null,
									'\u6797'
								),
								'\u590F\u6CC9\u5B66\u672F\u6D41\u6D3E'
							)
						),
						React.createElement(
							'div',
							{ className: 'norecord mt10' },
							'\u6CA1\u6709\u66F4\u591A\u6570\u636E\u4E86'
						)
					),
					React.createElement(
						'section',
						{ className: 'hospital info-list' },
						React.createElement(
							'h3',
							{ className: 'h3-tit color-999' },
							'\u76F8\u5173\u533B\u9662'
						),
						React.createElement(
							'a',
							{ className: 'info-row' },
							React.createElement(
								'i',
								{ className: 'portrait' },
								React.createElement('img', { src: 'https://yct.968309.com/pic/file/hospitalLogoPath/f38272fb828e483a84726dd7e67f3eb0.jpg', className: 'ele-rounded' })
							),
							React.createElement(
								'h4',
								{ className: 'h4-name' },
								'\u60E0\u5DDE\u5E02\u7B2C',
								React.createElement(
									'i',
									{ className: 'color-ff647a' },
									'\u4E09'
								),
								'\u4EBA\u6C11\u533B\u9662'
							),
							React.createElement('p', { className: 'p2' })
						),
						React.createElement(
							'a',
							{ className: 'info-row' },
							React.createElement(
								'i',
								{ className: 'portrait' },
								React.createElement('img', { src: 'https://yct.968309.com/mobileapp/images/portrait-hosp.png', className: 'ele-rounded' })
							),
							React.createElement(
								'h4',
								{ className: 'h4-name' },
								'\u60E0\u5DDE\u5E02\u7B2C',
								React.createElement(
									'i',
									{ className: 'color-ff647a' },
									'\u4E09'
								),
								'\u4EBA\u6C11\u533B\u9662\uFF08\u4E1C\u9662\u533A\uFF09'
							),
							React.createElement(
								'p',
								{ className: 'p2' },
								'\u60E0\u57CE\u533A\u60E0\u5DDE\u5927\u9053\u4E1C\u5E73\u6BB5176\u53F7'
							)
						),
						React.createElement(
							'a',
							{ className: 'results-more' },
							'\u66F4\u591A\u533B\u9662'
						)
					),
					React.createElement(
						'section',
						{ className: 'info-list results-drug' },
						React.createElement(
							'h3',
							{ className: 'h3-tit color-999' },
							'\u76F8\u5173\u836F\u54C1'
						),
						React.createElement(
							'a',
							{ className: 'info-row' },
							React.createElement(
								'i',
								{ className: 'portrait' },
								React.createElement('img', { src: 'https://sq.968309.com/pic///file/goodsImgPath/TB16XTlLXXXXXbNXFXXXXXXXXXX_!!0-item_pic.jpg', className: 'ele-rounded' })
							),
							React.createElement(
								'h4',
								{ className: 'h4-name' },
								'\u6C34',
								React.createElement(
									'i',
									null,
									'\u6797'
								),
								'\u4F73 \u6C34',
								React.createElement(
									'i',
									null,
									'\u6797'
								),
								'\u4F73 \u6C34\u98DE\u84DF\u5BBE\u80F6\u56CA 35mg*20\u7C92/\u76D2'
							),
							React.createElement(
								'span',
								{ className: 'span-label ele-rounded' },
								'\u533B\u4FDD'
							)
						),
						React.createElement(
							'a',
							{ className: 'info-row', href: 'javascript:void(0)' },
							React.createElement(
								'i',
								{ className: 'portrait' },
								React.createElement('img', { src: 'https://sq.968309.com/pic///file/goodsImgPath/TB1BY1JFVXXXXa7XXXXXXXXXXXX_!!2-item_pic.png', className: 'ele-rounded' })
							),
							React.createElement(
								'h4',
								{ className: 'h4-name' },
								'\u7389',
								React.createElement(
									'i',
									null,
									'\u6797'
								),
								' \u6B63\u9AA8\u6C3430ml \u55B7\u96FE\u578B'
							),
							React.createElement(
								'span',
								{ className: 'span-label ele-rounded' },
								'\u533B\u4FDD'
							)
						),
						React.createElement(
							'a',
							{ className: 'results-more' },
							'\u66F4\u591A\u836F\u54C1'
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