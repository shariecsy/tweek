/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Tabs = require('../../src/libs/Tabs');

var Root = React.createClass({
    componentDidMount: function () {
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
    render: function () {
        return (
			<div>
				<Header>
					<Header.LeftItem>
						<a className="am-btn am-icon-md am-btn-link am-icon-angle-left"></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">设置</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html">首页</a>
					</Header.RightItem>
				</Header>

				<Container>
					<div className="my-message my-setting">
                        <ul className="am-list am-list-static">
                            <li>
                                <a href="">
                                    意见反馈
                                    <i className="am-icon-angle-right am-icon-sm"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    修改登录密码
                                    <i className="am-icon-angle-right am-icon-sm"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    设置支付密码
                                    <i className="am-icon-angle-right am-icon-sm"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    添加邀请码
                                    <i className="am-icon-angle-right am-icon-sm"></i>
                                </a>
                            </li>
                        </ul>
                        <ul className="am-list am-list-static">
                            <li>当前版本<i className="fl-r">v1.0</i></li>
                        </ul>
                        <div className="bottom-btn">
                            <button type="button" className="am-btn am-btn-primary am-round am-btn-block">退出登录</button>
                        </div>
					</div>
				</Container>

            </div>
        )
    }
});

ReactDOM.render(<Root/>, document.getElementById('merry'));