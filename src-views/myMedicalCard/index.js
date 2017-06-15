/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');

var Root = React.createClass({
    componentDidMount: function () {
        var data = [{
            id: 0,
            title: '绑卡成功',
            btime: '2017-01-01 12:01:01',
            content: '广州市XX医院',
            subtitle: '恭喜,您已成功绑定就诊卡,现在可以在线挂号'
        }, {
            id: 0,
            title: '绑卡成功',
            btime: '2017-01-01 12:01:01',
            content: '广州市XX医院',
            subtitle: '恭喜,您已成功绑定就诊卡,现在可以在线挂号'
        }];
        // this.refs.msglist.setListData(data);
    },
    render: function () {
        return (
			<div>
				<Header>
					<Header.LeftItem>
						<a className="am-btn am-btn-link am-icon-angle-left"></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">我的诊疗卡</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html">首页</a>
					</Header.RightItem>
				</Header>

				<Container>
					<div className="my-message my-medical-card">
						<div className="nodata">
							<img src="https://yct.968309.com/mobileapp/images/avatar.png"/>
							<p>请关联医院诊疗卡</p>
						</div>	
						<div className="bottom-btn">
							<button className="am-btn am-btn-block am-btn-primary am-round">关联更多</button>
						</div>
					</div>
					
				</Container>
			</div>
        )
    }
});

ReactDOM.render(<Root/>, document.getElementById('merry'));