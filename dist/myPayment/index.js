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
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
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

/***/ 2:
/***/ (function(module, exports) {

/**
 * 标签页组件
 * @author phy <yao.qianfeng@ucsmy.com>
 *
 *     @example
 *     <Tabs defaultActiveKey={0} onClick={callback}>
 *          <TabItem tab="Tab 1">Content of Tab Pane 1</TabItem>
 *          <TabItem tab="Tab 2">Content of Tab Pane 2</TabItem>
 *          <TabItem tab="Tab 3">Content of Tab Pane 3</TabItem>
 *          <TabItem tab="Tab 4">Content of Tab Pane 4</TabItem>
 *     </Tabs>
 */
var Tabs = React.createClass({
    displayName: "Tabs",

    propTypes: {
        defaultActiveKey: React.PropTypes.number
    },

    getDefaultProps: function getDefaultProps() {
        return {
            disabled: false,
            defaultActiveKey: 0
        };
    },

    getInitialState: function getInitialState() {
        return {
            currentIndex: this.props.defaultActiveKey
        };
    },

    /**
     * 检查标题的索引号
     * @param index
     * @returns {*}
     */
    checkTitleIndex: function checkTitleIndex(index) {
        if (this.state.currentIndex == -1) {
            return "";
        } else {
            return index === this.state.currentIndex ? "ucs-tabs-active" : "";
        }
    },

    /**
     * 检查内容项容器的索引号
     * @param index
     * @returns {*}
     */
    checkContentIndex: function checkContentIndex(index) {
        if (this.state.currentIndex == -1) {
            return "none";
        } else {
            return index === this.state.currentIndex ? "block" : "none";
        }
    },

    /**
     * 点击事件处理函数
     * @param index
     * @param disabled
     * @private
     */
    _handleClick: function _handleClick(index, disabled) {
        if (!disabled) {
            this.setState({ currentIndex: index });
        }
    },

    render: function render() {
        var _self = this;
        return React.createElement(
            "div",
            { className: "ucs-tabs" },
            React.createElement(
                "div",
                { className: "ucs-tabs-bar" },
                React.createElement(
                    "ul",
                    null,
                    React.Children.map(this.props.children, function (element, index) {
                        var disabled = element.props.disabled ? 'disabled' : '';
                        return React.createElement(
                            "li",
                            { onClick: function onClick() {
                                    _self._handleClick(index, element.props.disabled);
                                }, className: disabled + " " + _self.checkTitleIndex(index) },
                            element.props.tab
                        );
                    })
                )
            ),
            React.createElement(
                "div",
                { className: "ucs-tabs-content" },
                React.Children.map(this.props.children, function (element, index) {
                    return React.createElement(
                        "div",
                        { className: "ucs-tabs-tabpane", style: { "display": _self.checkContentIndex(index) } },
                        element.props.children
                    );
                })
            )
        );
    }
});
Tabs.Item = React.createClass({
    displayName: "Item",

    render: function render() {
        return this.props.children;
    }
});

// Tabs.TabItem=TabItem;
module.exports = Tabs;

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = __webpack_require__(1);
var Container = __webpack_require__(0);
var Tabs = __webpack_require__(2);

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
                    React.createElement('a', { className: 'am-btn am-icon-md am-btn-link am-icon-angle-left' })
                ),
                React.createElement(
                    Header.CenterItem,
                    null,
                    React.createElement(
                        'h1',
                        { className: 'am-header-title' },
                        '\u6211\u7684\u7F34\u8D39\u8BB0\u5F55'
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
                    { className: 'my-message my-payment' },
                    React.createElement(
                        'section',
                        { className: 'apex' },
                        React.createElement(
                            'span',
                            { className: 'middle' },
                            '\u5C31\u8BCA\u4EBA'
                        ),
                        React.createElement(
                            'select',
                            null,
                            React.createElement(
                                'option',
                                { value: '' },
                                '\u5168\u90E8'
                            )
                        ),
                        React.createElement('i', { className: 'icon icon-down middle' })
                    ),
                    React.createElement(
                        Tabs,
                        null,
                        React.createElement(
                            Tabs.Item,
                            { tab: '\u95E8\u8BCA\u7F34\u8D39', className: 'tab-1' },
                            React.createElement(
                                'a',
                                { className: 'item item-payment', href: 'javascript:void(0);' },
                                React.createElement(
                                    'p',
                                    null,
                                    '\u95E8\u8BCA\u7F34\u8D39',
                                    React.createElement(
                                        'span',
                                        { className: 'color-2eacff' },
                                        'v.payStatusLabel'
                                    )
                                ),
                                React.createElement(
                                    'p',
                                    { className: 'item-department' },
                                    React.createElement(
                                        'b',
                                        null,
                                        'branchName(deptName)'
                                    ),
                                    React.createElement(
                                        'span',
                                        null,
                                        '123.02\u5143',
                                        React.createElement('i', { className: 'icon icon-goto middle' })
                                    )
                                ),
                                React.createElement(
                                    'p',
                                    { className: 'p2' },
                                    'time'
                                )
                            ),
                            React.createElement(
                                'a',
                                { className: 'item item-payment', href: 'javascript:void(0);' },
                                React.createElement(
                                    'p',
                                    null,
                                    '\u95E8\u8BCA\u7F34\u8D39',
                                    React.createElement(
                                        'span',
                                        { className: 'color-2eacff' },
                                        'v.payStatusLabel'
                                    )
                                ),
                                React.createElement(
                                    'p',
                                    { className: 'item-department' },
                                    React.createElement(
                                        'b',
                                        null,
                                        'v.branchName(v.deptName )'
                                    ),
                                    React.createElement(
                                        'span',
                                        null,
                                        '123.02\u5143',
                                        React.createElement('i', { className: 'icon icon-goto middle' })
                                    )
                                ),
                                React.createElement(
                                    'p',
                                    { className: 'p2' },
                                    '2014-01-02'
                                )
                            ),
                            React.createElement(
                                'section',
                                { className: 'page-tips' },
                                React.createElement('i', { className: 'tips-icon tips-icon-pm' }),
                                React.createElement(
                                    'div',
                                    { className: 'tips-word' },
                                    React.createElement(
                                        'p',
                                        { className: 'p1' },
                                        '\u6682\u672A\u627E\u5230\u7F34\u8D39\u8BB0\u5F55'
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            Tabs.Item,
                            { tab: '\u4F4F\u9662\u91D1\u7F34\u7EB3', className: 'tab-2' },
                            React.createElement(
                                'a',
                                { className: 'item item-payment', href: 'javascript:void(0);' },
                                React.createElement(
                                    'p',
                                    null,
                                    '\u4F4F\u9662\u62BC\u91D1\u7F34\u7EB3',
                                    React.createElement(
                                        'span',
                                        { className: 'color-2eacff' },
                                        'data.result[i].statusLabel'
                                    )
                                ),
                                React.createElement(
                                    'p',
                                    { className: 'item-department color-989cab' },
                                    React.createElement(
                                        'b',
                                        null,
                                        'hospitalName (deptName) '
                                    ),
                                    React.createElement(
                                        'span',
                                        null,
                                        '123\u5143',
                                        React.createElement('i', { className: 'icon icon-goto middle' })
                                    )
                                ),
                                React.createElement(
                                    'p',
                                    { className: 'p2' },
                                    'strCreateTime'
                                )
                            ),
                            React.createElement(
                                'a',
                                { className: 'item item-payment', href: 'javascript:void(0);' },
                                React.createElement(
                                    'p',
                                    null,
                                    '\u4F4F\u9662\u62BC\u91D1\u7F34\u7EB3',
                                    React.createElement(
                                        'span',
                                        { className: 'color-2eacff' },
                                        'data.result[i].statusLabel'
                                    )
                                ),
                                React.createElement(
                                    'p',
                                    { className: 'item-department color-989cab' },
                                    React.createElement(
                                        'b',
                                        null,
                                        'hospitalName (deptName) '
                                    ),
                                    React.createElement(
                                        'span',
                                        null,
                                        '123\u5143',
                                        React.createElement('i', { className: 'icon icon-goto middle' })
                                    )
                                ),
                                React.createElement(
                                    'p',
                                    { className: 'p2' },
                                    '2014-02-02'
                                )
                            ),
                            React.createElement(
                                'section',
                                { className: 'page-tips' },
                                React.createElement('i', { className: 'tips-icon tips-icon-pm' }),
                                React.createElement(
                                    'div',
                                    { className: 'tips-word' },
                                    React.createElement(
                                        'p',
                                        { className: 'p1' },
                                        '\u6682\u672A\u627E\u5230\u7F34\u8D39\u8BB0\u5F55'
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            Tabs.Item,
                            { tab: '\u51FA\u9662\u7ED3\u7B97', className: 'tab-3' },
                            React.createElement(
                                'a',
                                { className: 'item item-payment', href: 'javascript:void(0);' },
                                React.createElement(
                                    'p',
                                    { className: 'item-department' },
                                    React.createElement(
                                        'b',
                                        null,
                                        '\u533B\u9662(\u79D1\u5BA4)'
                                    ),
                                    React.createElement(
                                        'span',
                                        { className: 'color-2eacff' },
                                        '\uFFE5123',
                                        React.createElement('i', { className: 'icon icon-goto middle' })
                                    )
                                ),
                                React.createElement(
                                    'p',
                                    { className: 'p2' },
                                    '2017-01-02'
                                )
                            ),
                            React.createElement(
                                'a',
                                { className: 'item item-payment', href: 'javascript:void(0);' },
                                React.createElement(
                                    'p',
                                    { className: 'item-department' },
                                    React.createElement(
                                        'b',
                                        null,
                                        '\u533B\u9662(\u79D1\u5BA4)'
                                    ),
                                    React.createElement(
                                        'span',
                                        { className: 'color-2eacff' },
                                        '\uFFE5123',
                                        React.createElement('i', { className: 'icon icon-goto middle' })
                                    )
                                ),
                                React.createElement(
                                    'p',
                                    { className: 'p2' },
                                    '2017-01-02'
                                )
                            ),
                            React.createElement(
                                'section',
                                { className: 'page-tips' },
                                React.createElement('i', { className: 'tips-icon tips-icon-pm' }),
                                React.createElement(
                                    'div',
                                    { className: 'tips-word' },
                                    React.createElement(
                                        'p',
                                        { className: 'p1' },
                                        '\u6682\u672A\u627E\u5230\u7F34\u8D39\u8BB0\u5F55'
                                    )
                                )
                            )
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