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
						<a className="am-btn am-btn-link am-icon-angle-left" href="javascript:window.history.back()"></a>
					</Header.LeftItem>
					<Header.CenterItem>
						<h1 className="am-header-title">搜索</h1>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="../index/index.html">首页</a>
					</Header.RightItem>
				</Header>

				<Container>
					<div ref="searchHistory">
						<div className="search-box">
							<div className="am-input-group">
								<span className="am-input-group-label"><i className="am-icon-search am-icon-fw"></i></span>
								<input type="text" className="am-form-field" placeholder="Username"/>
							</div>
							<button className="am-btn am-btn-link">取消</button>
						</div>
						<div className="search-container">
							<div className="searched">
								<div className="searched-tit">最近搜索</div>
								<div className="searched-con">
									<div className="h-keyword">
										<a className="touch">林</a>
									</div>
								</div>
							</div>
							<div className="clear-searched"><a>清理搜索记录</a></div>
						</div>
					</div>

					<div ref="searchResult" className="search-result">
						<section className="doctor info-list results-list">
							<h3 className="h3-tit color-999">相关医生
								<span className="h3-tit-min">（只能搜索近几天内有排班的医生）</span>
							</h3>
							<a className="results-doctor" href="javascript:void(0)">
								<i className="portrait"><img src="https://yct.968309.com/mobileapp/images/avatar.png" className="ele-circle"/></i>
								<p className="doctor-name"><span><i>林</i>菁</span><b></b></p>
								<p className="doctor-sections">广州市第八人民医院（嘉禾院区）</p>
								<p className="p2">科室：嘉禾儿科</p>
							</a>
							<a className="results-doctor" href="javascript:void(0)">
								<i className="portrait"><img src="https://yct.968309.com/mobileapp/images/avatar.png" className="ele-circle"/></i>
								<p className="doctor-name"><span><i>林</i>毅</span><b>教授</b></p>
								<p className="doctor-sections">广东省中医院大学城医院</p>
								<p className="p2">一级科室：大学城五楼乳腺门诊</p>
								<p className="p2">二级科室：乳腺专科</p>
							</a>
							<a className="results-more">更多医生</a>
						</section>

						<section className="dept info-list results-list">
							<h3 className="h3-tit color-999">相关科室</h3>
							<a className="info-row">
								<h4 className="h4-name">广东省中医院大德路总院</h4>
								<p className="p2">一级科室：西区五楼中医流派门诊</p>
								<p className="p2">二级科室：岭南<i>林</i>夏泉学术流派</p>
							</a>
							<div className="norecord mt10">没有更多数据了</div>
						</section>

						<section className="hospital info-list">
							<h3 className="h3-tit color-999">相关医院</h3>
							<a className="info-row">
								<i className="portrait"><img src="https://yct.968309.com/pic/file/hospitalLogoPath/f38272fb828e483a84726dd7e67f3eb0.jpg" className="ele-rounded"/></i>
								<h4 className="h4-name">惠州市第<i className="color-ff647a">三</i>人民医院</h4>
								<p className="p2"></p>
							</a>
							<a className="info-row">
								<i className="portrait"><img src="https://yct.968309.com/mobileapp/images/portrait-hosp.png" className="ele-rounded"/></i>
								<h4 className="h4-name">惠州市第<i className="color-ff647a">三</i>人民医院（东院区）</h4>
								<p className="p2">惠城区惠州大道东平段176号</p>
							</a>
							<a className="results-more">更多医院</a>
						</section>
				
						<section className="info-list results-drug">
							<h3 className="h3-tit color-999">相关药品</h3>
							<a className="info-row">
								<i className="portrait"><img src="https://sq.968309.com/pic///file/goodsImgPath/TB16XTlLXXXXXbNXFXXXXXXXXXX_!!0-item_pic.jpg" className="ele-rounded"/></i>
								<h4 className="h4-name">水<i>林</i>佳 水<i>林</i>佳 水飞蓟宾胶囊 35mg*20粒/盒</h4>
								<span className="span-label ele-rounded">医保</span>
							</a>
							<a className="info-row" href="javascript:void(0)">
								<i className="portrait"><img src="https://sq.968309.com/pic///file/goodsImgPath/TB1BY1JFVXXXXa7XXXXXXXXXXXX_!!2-item_pic.png" className="ele-rounded"/></i>
								<h4 className="h4-name">玉<i>林</i> 正骨水30ml 喷雾型</h4>
								<span className="span-label ele-rounded">医保</span>
							</a>
							<a className="results-more">更多药品</a>
						</section>
					</div>
				</Container>
			</div>
        )
    }
});

ReactDOM.render(<Root/>, document.getElementById('merry'));