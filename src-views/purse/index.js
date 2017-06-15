
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var BindCard = require('./bindCard');

var Root = React.createClass({
	getInitialState:function(){
		return {
			toBindCard:false
		}
	},
	_bindCard:function(){
		this.refs.main.style.display='none';
		this.setState({
			toBindCard:true
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
						<h1 className="am-header-title">医程通钱包</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html">首页</a>
					</Header.RightItem>
				</Header>
			   <Container>
				   <div ref="main" className="purse">
					   <div className="yct-wallet-msg">
						   <p><i className="icon icon-wallet-disabled"></i></p>
						   <p className="mt20">&nbsp;&nbsp;开通医程通钱包、安全快捷、更多优惠福利！</p>
					   </div>
					   <div className="button">
						   <a className="btn-save" onClick={this._bindCard}>开通医程通钱包</a>
						   <p className="p-agree yct-wallet-info">
							   <a className="a-agree active">
								   <i className="icon am-icon-check-circle middle"></i></a>开通即代表您已阅读并同意
							   <a href="#">《医程通钱包协议》</a>
						   </p>
					   </div>
					   <p className="yct-wallet-tips">
						   <a className="color-2eacff">医程通钱包说明</a>
					   </p>
				   </div>
				   {this.state.toBindCard? <BindCard/> : ''}

				</Container>
			</div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));