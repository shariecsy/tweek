
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var NoRecord=require('../../src/complex/no-record');

var Root = React.createClass({
	getInitialState:function(){
		return {

		}
	},
	_bindCardPoints:function(){
		window.location="../insuranceBindCardPoints/index.html";
	},
	render: function() {
		return(
			<div>
				<Header>
					<Header.LeftItem>
						<a><i className="am-icon-angle-left am-icon-lg"></i></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">医保专区</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html">首页</a>
					</Header.RightItem>
				</Header>
			   <Container>
				   <div className="bindCard-box">
					   <NoRecord text="暂无绑定社保卡"/>
					   <p className="yct-wallet-tips"><a className="color-2eacff" onClick={this._bindCardPoints}>查看线下绑卡点</a></p>
				   </div>
				</Container>
			</div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));