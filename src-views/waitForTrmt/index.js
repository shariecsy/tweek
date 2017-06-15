
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var NoRecord=require('../../src/complex/no-record');

var Root = React.createClass({
	getInitialState:function(){
		return {
		}
	},
	render: function() {
		return(
			<div>
				<Header>
					<Header.LeftItem>
						<a><i className="am-icon-angle-left am-icon-lg"></i></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">候诊信息</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html">首页</a>
					</Header.RightItem>
				</Header>
			   <Container>
				   <NoRecord text="当前暂无挂号就诊~"/>
				</Container>
			</div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));