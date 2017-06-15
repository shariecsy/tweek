
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');

var Root = React.createClass({
	getInitialState:function(){
		return {
			tabList:[
				{
					title:'医保卡管理',
					clickHandler:function(){
						window.location='../insuranceCard/index.html';
					}
				},
				{
					title:'医保资讯',
					clickHandler:function(){
						window.location='../insuranceNews/index.html';
					}
				}
			]
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
						<h1 className="am-header-title">医保专区</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html">首页</a>
					</Header.RightItem>
				</Header>
			   <Container>
				   <div className="icon-list">
					   <ul className="am-list">
						   {
							   this.state.tabList.map(function(obj,index){
								   var rightCls = "icon-list-right am-icon-angle-right";
								   return (
									   <li className="am-g" key={index} onClick={obj.clickHandler}>
										   <span className="icon-list-content">{obj.title}</span>
										   <span className={rightCls}></span>
									   </li>
								   )
							   })
						   }
					   </ul>
				   </div>
				</Container>
			</div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));