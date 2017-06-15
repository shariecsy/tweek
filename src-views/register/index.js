
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Layer = require('../../src/complex/alert-layer');
var Password = require('./step/password');
var Root = React.createClass({
	getInitialState:function(){
		return {
			show:false,
			btnText:"获取验证码",
			codeBtnClass:"am-btn am-btn-default am-round am-btn-xs",
			codeSendMsg:false,
			toSetPassword:false
		}
	},
	_getCode:function(){
		this.setState({
			show:true,
			btnText:"校验中"
		})
	},
	_closeLayer:function(){
		this.setState({
			show:false,
			btnText:"获取验证码"
		})
	},
	_checkCode:function(){
		var me = this;
		this.setState({
			show:false,
			codeBtnClass:"am-btn am-btn-default am-round am-btn-xs gettingCode",
			codeSendMsg:true
		})
		var totalTime = 60;
		var timer = setInterval(function(){
			totalTime--;
			me.setState({
				btnText:totalTime+"s"
			});
			if(totalTime<1){
				clearInterval(timer);
				me.setState({
					codeBtnClass:"am-btn am-btn-default am-round am-btn-xs",
					btnText:"获取验证码"
				});
			}
		},1000);

	},
	_toSetPassword:function(){
		this.refs.main.style.display='none';
		this.setState({
			toSetPassword:true
		})
	},

	render: function() {
		return(
			<div>
				<Header>
					<Header.LeftItem>
						<a><i className="am-icon-angle-left am-icon-lg"></i></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">注册账号</h1>
					</Header.CenterItem>
				</Header>
				<div ref="main">
					<Container>
						<div className="register-box">
							<div className="item">
								<span className="label">手机号码</span>
								<input type="text" placeholder="请输入您的手机号码"/>
								<button type="button" className={this.state.codeBtnClass} onClick={this._getCode} id="codeBtn">{this.state.btnText}</button>
							</div>
							<div className="item">
								<span className="label">验证码</span>
								<input type="text" placeholder="请输入验证码"/>
							</div>
						</div>
					</Container>
					<div className="app-notice">
						<i className="am-icon-check-circle"></i><span>注册即代表您已阅读</span><a href="../agreement/index.html">《平台协议》</a>
					</div>
					<div className="btn-box">
						<a href="###" className="btn btn-confirm" onClick={this._toSetPassword}>下一步</a>
					</div>
					{this.state.codeSendMsg?<div className="app-notice">短信验证码已发送成功，请留意。60秒内收不到可再次点击发送</div>:""}
					<Layer show={this.state.show} layerCls="cmd">
						<Layer.Title>
							请输入验证码
							<i className="layer-close am-icon-close" onClick={this._closeLayer}></i>
						</Layer.Title>
						<Layer.Text>
							<div className="validate-code-img">
								<img src="../images/generatePicCode.jpg" alt="验证码"/>
								<a href="#">换一张</a>
							</div>
							<div className="pwdBox">
								<div className="inputBoxContainer">
									<input type="tel" className="realInput"/>
									<div className="bogusInput validate-code">
										<input type="text" maxLength = "1" disabled="" onChange={this._checkCode}/>
										<input type="text" maxLength = "1" disabled=""/>
										<input type="text" maxLength = "1" disabled=""/>
										<input type="text" maxLength = "1" disabled=""/>
									</div>
								</div>
							</div>
						</Layer.Text>
					</Layer>
					<Layer.Background show={this.state.show}/>
				</div>
				{this.state.toSetPassword? <Password/> : ''}
				</div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));