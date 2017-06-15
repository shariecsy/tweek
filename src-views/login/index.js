/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');

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
						<a className="am-btn am-btn-link am-icon-angle-left"></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">我的家人</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html">首页</a>
					</Header.RightItem>
				</Header>

				<Container>
					<section className="login">
						<div className="logo"><img src="https://yct.968309.com/mobileapp/images/logo/yctAppLogo.png" alt="医程通App"/></div>
						<div className="login-enter">
							<p>
								<i className="am-icon-user am-icon-sm"></i>
								<span><input type="text" value="" className="login-input" placeholder="请输入手机号或账号名"/></span>
							</p>
							<p>
								<i className="am-icon-lock am-icon-sm"></i>
								<input type="password" className="login-input" placeholder="请输入6-16位密码"/>
							</p>
							<p className="p-button">
								<button className="am-btn am-btn-block am-btn-primary am-round">登录</button>
							</p>
							<p className="p-link">
								<a className="fl">注册账号</a>
								<a className="fr">忘记密码？</a>
							</p>
						</div>
					</section>
				</Container>
			</div>
        )
    }
});

ReactDOM.render(<Root/>, document.getElementById('merry'));