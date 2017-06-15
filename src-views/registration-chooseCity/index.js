
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');

var Root = React.createClass({
	getInitialState:function(){
		return {
			cityList:[
				{
					key:1,
					city:"广州市",
					handleClick:function(){
						window.location='../registration-chooseHospital/index.html';
					}
				},
				{
					key:2,
					city:"佛山市",
					handleClick:function(){
						window.location='../registration-chooseHospital/index.html';
					}
				},
				{
					key:3,
					city:"清远市",
					handleClick:function(){
						window.location='../registration-chooseHospital/index.html';
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
						<h1 className="am-header-title">挂号</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html">首页</a>
					</Header.RightItem>
				</Header>
				<Container>
						<div className="choose-city">
							<div className="search-widget">
								<form id="searchForm" method="post">
									<input type="search" placeholder="搜索城市" />
									<i className="am-icon-search am-icon-fw"></i>
								</form>
							</div>
							<div className="city-list">
								{
									this.state.cityList.map(function(obj,index){
										return (
											<a href="#" key={obj.key} onClick={obj.handleClick}>
												{obj.city}
											</a>
										)
									})
								}
							</div>
						</div>
				</Container>
			</div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));