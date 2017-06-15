
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Root = React.createClass({
	getInitialState:function(){
		return {
			listData:[
				{
					time:"08:00-08:30",
					price:"9元",
					isFull:false,
					handleClick:function(){
						window.location="../registration-confirm/index.html";
					}
				},
				{
					time:"08:00-08:30",
					price:"9元",
					isFull:true,
					handleClick:function(){
					}
				},
				{
					time:"08:00-08:30",
					price:"9元",
					isFull:true,
					handleClick:function(){
					}
				},
				{
					time:"08:00-08:30",
					price:"9元",
					isFull:false,
					handleClick:function(){
						window.location="../registration-confirm/index.html";
					}
				},
				{
					time:"08:00-08:30",
					price:"9元",
					isFull:true,
					handleClick:function(){
					}
				}
			],
			showMore:false,
			showMoreDate:false
		}
	},
	_showMoreBrief:function(){
		this.setState({
			showMore:!this.state.showMore
		})
	},
	_showMoreDate:function(){
		this.setState({
			showMoreDate:!this.state.showMoreDate
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
						<h1 className="am-header-title">挂号</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html">首页</a>
					</Header.RightItem>
				</Header>
				<Container>
					<div className="doctor-info">
						<div className={this.state.showMore? "":"fold"}>
							<ul className="clearfix">
								<li className="box-left">
									<img src="../images/hospitalLogo.jpg" alt=""/>
								</li>
								<li className="box-right">
									<div  className="brief-title">
										<span className="name">钟富</span>
										<span className="title">门诊肾专科主任</span>
										<span className="favourite"><i className="icon am-icon-star"></i>收藏</span>
									</div>
									<div className="brief">
										简介：从事小儿内科临床医疗工作多年从事小儿内科临床医疗工作多年从事小儿内科临床医疗工作多年从事小儿内科临床医疗工作多年从事小儿内科临床医疗工作多年从事小儿内科临床医疗工作多年从事小儿内科临床医疗工作多年从事小儿内科临床医疗工作多年从事小儿内科临床医疗工作多年从事小儿内科临床医疗工作多年从事小儿内科临床医疗工作多年从事小儿内科临床医疗工作多年从事小儿内科临床医疗工作多年从事小儿内科临床医疗工作多年从事小儿内科临床医疗工作多年从事小儿内科临床医疗工作多年
									</div>
								</li>
							</ul>
						</div>
						<div className="showMore" onClick={this._showMoreBrief}>
							{this.state.showMore?"收起":"展开"}
						</div>
					</div>
					
					<div className="doctor-date">
						<div className="date-container">
							<div className="showMore" onClick={this._showMoreDate}>
								<ul className="clearfix">
									<li className="fl"><span>2017-06-14</span></li>
									<li className="fr"><span>其他日期</span><i className={this.state.showMoreDate?"icon am-icon-angle-down":"icon am-icon-angle-up"}></i>
									</li>
								</ul>
							</div>
							<div className={this.state.showMoreDate? "":"none"}>
								<div className="date-box">
									<ul className="day-list clearfix">
										<li>二</li>
										<li>三</li>
										<li>四</li>
										<li>五</li>
										<li>六</li>
										<li>日</li>
										<li>一</li>
									</ul>
									<ul className="date-list clearfix">
										<li className="active">今</li>
										<li className="grey">14</li>
										<li className="grey">15</li>
										<li className="grey">16</li>
										<li>17</li>
										<li>18</li>
										<li>19</li>
										<li>20</li>
									</ul>
								</div>
							</div>
						</div>
                        <div className="doctor-time">
							<ul className="am-list">
								{
									this.state.listData.map(function(obj,index){
										var rightCls = "item-list-right am-icon-angle-right";
										return (
											<li className="am-g" key={index} onClick={obj.handleClick}>
												<span className={obj.isFull?"":"blue"}>{obj.time}</span>
												<span className={obj.isFull?"price":"price orange"}>{obj.price}</span>
												<span className={obj.isFull?"status":"status blue"}>{obj.isFull?"满号":"可挂号"}</span>
												<span className={obj.isFull? "none":rightCls}></span>
											</li>
										)
									})
								}
							</ul>
						</div>
					</div>
				</Container>
			</div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));