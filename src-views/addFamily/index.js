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
						<h1 className="am-header-title">我的家人</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html">首页</a>
					</Header.RightItem>
				</Header>

				<Container>
					<div className="my-message add-family">
						<div className="relation">
							<label>关系</label>
							<select>
								<option>父母</option>
								<option>配偶</option>
								<option>子女（有身份证）</option>
								<option>儿童（无身份证）</option>
								<option>其他</option>
							</select>
						</div>
						<ul>
							<li>
								<label>姓名</label>
								<input type="text" placeholder="请输入姓名"/>
							</li>
							<li>
								<label>证件类型</label>
								<select>
									<option>请选择</option>
									<option>二代身份证</option>
									<option>军官证</option>
									<option>港澳通行证</option>
									<option>护照</option>
								</select>
							</li>
							<li>
								<label>证件号</label>
								<input type="text" placeholder="请输入证件号"/>
							</li>
							<li>
								<label>出生日期</label>
								<input type="data" placeholder="请填写你的出生日期"/>
							</li>
							<li>
								<label>性别</label>
								<div className="radio">
									<input type="radio" className="radio" name="Sex" value="female" />女
								</div>
								<div className="radio">
									<input type="radio" name="Sex" value="male" />男
								</div>
							</li>
							<li>
								<label>手机号码</label>
								<input type="text" placeholder="请输入手机号码"/>
							</li>
						</ul>
						<p className="tips">
							<i className="am-icon-exclamation-circle am-icon-fw"></i>
							温馨提示：请填写真实个人信息，以便第一时间收到就诊信息。如果子女还没有身份证在关系选项请选择儿童，选择儿童后完善监护人信息即可。
						</p>
						<div className="bottom-btn">
							<button className="am-btn am-btn-block am-btn-primary am-round">保存</button>
						</div>
					</div>
					
				</Container>
			</div>
        )
    }
});

ReactDOM.render(<Root/>, document.getElementById('merry'));