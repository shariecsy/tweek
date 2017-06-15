/**
 * Created by william on 2017/6/4.
 */
var Header = require('../../src/complex/header');
var Footer = require('../../src/complex/footer');
var Container = require('../../src/complex/container');
var MsgList = require('../../src/complex/msg-list');

var Root = React.createClass({
	componentDidMount: function() {
		UAjax.ajax({
			method: 'get',
			url: window.API_SERVICE_URL + '/api/v1/query/fetch-msgs/fetchMsgList?mobileNo=13800000000',
			data: '',
			async: true,
			success: function(res) {
				console.log(res);
				if(res.code==0){
					this.refs.msglist.setListData(res.result);
				}
			}.bind(this),
			error: function(res) {
				console.log(res);
			}
		});
	},
	render: function() {
		return(
			<div>
				<Header>
					<Header.CenterItem>
						<h1 className="am-header-title">消息中心</h1>
					</Header.CenterItem>
				</Header>
			  
			   <Container>
				   <MsgList ref="msglist" />
	            	   
				</Container>
				<Footer selectIndex="1"/>
            </div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));