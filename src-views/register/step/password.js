var Container = require('../../../src/complex/container');
var Password = React.createClass({
	getInitialState:function(){
		return {
			passwordShow:false,
			regCodeShow:false
		}
	},
	_passwordShow:function(){
		this.setState({
			passwordShow:!this.state.passwordShow
		});

	},
	_regCodeShow:function(){
		this.setState({
			regCodeShow:!this.state.regCodeShow
		});
	},

	render: function() {
		return(
			<div>
				<Container>
					<div className="register-box">
						<div className="item">
							<span className="label">密码</span>
							<input type={this.state.passwordShow?"text":"password"} placeholder="请输入密码6-16位"/>
							<a href="###" onClick={this._passwordShow}>
								<i className={this.state.passwordShow? "icon am-icon-eye middle active":"icon am-icon-eye middle"}></i>
							</a>
						</div>
						<div className={this.state.regCodeShow? "item reg-code-box block":"item reg-code-box"}>
							<span className="label">邀请码</span>
							<input type="text" placeholder="请输入邀请码（非必填）"/>
						</div>
						<div className="item reg-code-show" onClick={this._regCodeShow}>
							<strong>如有邀请码请展开后输入</strong>
							<i className={this.state.regCodeShow?"icon am-icon-angle-double-down am-icon-md":"icon am-icon-angle-double-up am-icon-md"}></i>
						</div>
					</div>
				</Container>
				<div className="btn-box">
					<a href="###" className="btn btn-confirm">立即注册</a>
				</div>
			</div>
		)
	}
});

module.exports = Password;