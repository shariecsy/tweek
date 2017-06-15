
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var IncompleteInfo=require('../../src/complex/incomplete-info');

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
						<h1 className="am-header-title">住院清单</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html">首页</a>
					</Header.RightItem>
				</Header>
			   <Container>
				   <IncompleteInfo/>
				</Container>
			</div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));