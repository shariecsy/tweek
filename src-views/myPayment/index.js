/**
 * Created by DuHuiling on 2017/6/4.
 */
var Header = require('../../src/complex/header');
var Container = require('../../src/complex/container');
var Tabs = require('../../src/libs/Tabs');

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
						<a className="am-btn am-icon-md am-btn-link am-icon-angle-left"></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">我的缴费记录</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html">首页</a>
					</Header.RightItem>
				</Header>

				<Container>
					<div className="my-message my-payment">
                        <section className="apex">
                            <span className="middle">就诊人</span>
                            <select>
                                <option value="">全部</option>
                            </select>
                            <i className="icon icon-down middle"></i>
                        </section>
                        <Tabs>
                            <Tabs.Item tab="门诊缴费" className="tab-1">
                                <a className="item item-payment" href="javascript:void(0);">
                                    <p>门诊缴费<span className="color-2eacff">v.payStatusLabel</span></p>
                                    <p className="item-department"><b>branchName(deptName)</b><span>123.02元<i className="icon icon-goto middle"></i></span></p>
                                    <p className="p2">time</p>
                                </a>
                                <a className="item item-payment" href="javascript:void(0);">
                                    <p>门诊缴费<span className="color-2eacff">v.payStatusLabel</span></p>
                                    <p className="item-department"><b>v.branchName(v.deptName )</b><span>123.02元<i className="icon icon-goto middle"></i></span></p>
                                    <p className="p2">2014-01-02</p>
                                </a>
                                {/*无数据*/}
                                <section className="page-tips">
                                    <i className="tips-icon tips-icon-pm"></i>
                                    <div className="tips-word">
                                        <p className="p1">暂未找到缴费记录</p>
                                    </div>
                                </section>
                            </Tabs.Item>
                            <Tabs.Item tab="住院金缴纳" className="tab-2">
                                <a className="item item-payment" href="javascript:void(0);">
                                    <p>住院押金缴纳<span className="color-2eacff">data.result[i].statusLabel</span></p>
                                    <p className="item-department color-989cab"><b>hospitalName (deptName) </b><span>123元<i className="icon icon-goto middle"></i></span></p>
                                    <p className="p2">strCreateTime</p>
                                </a>
                                <a className="item item-payment" href="javascript:void(0);">
                                    <p>住院押金缴纳<span className="color-2eacff">data.result[i].statusLabel</span></p>
                                    <p className="item-department color-989cab"><b>hospitalName (deptName) </b><span>123元<i className="icon icon-goto middle"></i></span></p>
                                    <p className="p2">2014-02-02</p>
                                </a>
                                {/*无数据*/}
                                <section className="page-tips">
                                    <i className="tips-icon tips-icon-pm"></i>
                                    <div className="tips-word">
                                        <p className="p1">暂未找到缴费记录</p>
                                    </div>
                                </section>
                            </Tabs.Item>
                            <Tabs.Item tab="出院结算" className="tab-3">
                                <a className="item item-payment" href="javascript:void(0);">
                                    <p className="item-department">
                                        <b>医院(科室)</b>
                                        <span className="color-2eacff">￥123<i className="icon icon-goto middle"></i></span>
                                    </p>
                                    <p className="p2">2017-01-02</p>
                                </a>
                                <a className="item item-payment" href="javascript:void(0);">
                                    <p className="item-department">
                                        <b>医院(科室)</b>
                                        <span className="color-2eacff">￥123<i className="icon icon-goto middle"></i></span>
                                    </p>
                                    <p className="p2">2017-01-02</p>
                                </a>
                                {/*无数据*/}
                                <section className="page-tips">
                                    <i className="tips-icon tips-icon-pm"></i>
                                    <div className="tips-word">
                                        <p className="p1">暂未找到缴费记录</p>
                                    </div>
                                </section>
                            </Tabs.Item>
                        </Tabs>
					</div>
				</Container>

            </div>
        )
    }
});

ReactDOM.render(<Root/>, document.getElementById('merry'));