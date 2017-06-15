/**
 * Created by william on 2017/6/4.
 */
var Header = require('../../src/complex/header');
var Footer = require('../../src/complex/footer');
var Container = require('../../src/complex/container');
var Slider = require('../../src/complex/slider');
var ButtonGroup = require('../../src/complex/button-group');
var ProductList = require('../../src/complex/product-list');
var TabBar = require('../../src/complex/tabbar');

var Root = React.createClass({
	_redirect:function(url){
		window.location.href = url;
	},
	render: function() {
		return(
			<div>
				<Header>
					<Header.CenterItem>
						<div className="search-box-main" onClick={this._redirect.bind(this,"../search/index.html")}>
							<div className="am-input-group">
								<span className="am-input-group-label"><i className="am-icon-search am-icon-fw"></i></span>
								<input type="button" className="am-form-field" value="搜索医生、医院、科室、药品"/>
							</div>
						</div>
					</Header.CenterItem>
					<Header.RightItem>
						<a href="javascript:void(0);" className="">
                            <i className="am-header-icon am-icon-minus-square-o"></i>
                        </a>
					</Header.RightItem>
				</Header>
			  
			   <Container>
			   	   <Slider isShowButton={false}>
			   	   		<Slider.Item><img src="http://s.amazeui.org/media/i/demos/bing-1.jpg"/></Slider.Item>
			   	   		<Slider.Item><img src="http://s.amazeui.org/media/i/demos/bing-2.jpg"/></Slider.Item>
			   	   		<Slider.Item><img src="http://s.amazeui.org/media/i/demos/bing-3.jpg"/></Slider.Item>
			   	   </Slider>
					
				   <ButtonGroup>
				   		<ButtonGroup.Button icon="iconfont icon-zaixianguahao" title="挂号" clickHandler ={this._redirect.bind(this,"../registration-chooseHospital/index.html")}/>
				   		<ButtonGroup.Button icon="iconfont icon-paidui" title="排队侯诊" clickHandler ={this._redirect.bind(this,"../waitForTrmt/index.html")}/>
				   		<ButtonGroup.Button icon="iconfont icon-jiaofei" title="门诊缴费" clickHandler ={this._redirect.bind(this,"../payBills/index.html")}/>
				   		<ButtonGroup.Button icon="iconfont icon-baogao" title="报告查询" clickHandler ={this._redirect.bind(this,"../checkReport/index.html")}/>
				   		<ButtonGroup.Button icon="iconfont icon-zhifuyajin" title="住院押金" clickHandler ={this._redirect.bind(this,"../checkDeposit/index.html")}/>
				   		<ButtonGroup.Button icon="iconfont icon-qingdan" title="住院清单" clickHandler ={this._redirect.bind(this,"../hospitalizedDetails/index.html")}/>
				   		<ButtonGroup.Button icon="iconfont icon-qianbao" title="钱包" clickHandler ={this._redirect.bind(this,"../purse/index.html")}/>
				   		<ButtonGroup.Button icon="iconfont icon-dianzibingli" title="电子病历"/>
				   </ButtonGroup>
	            	   
	            	   <ProductList title="网上药店（支持医保在线支付）" moreTitle="查看全部">
						   <ProductList.Item title="Dr.He/何医生退热贴 4贴装/盒" subtitle="¥17.5">
							   <img style={{width:"100%"}} src="https://sq.968309.com/pic//file/goodsImgPath/TB1mhjlKFXXXXbWXXXXXXXXXXXX_!!0-item_pic.jpg"/>
						   </ProductList.Item>
						   <ProductList.Item title="Dr.He/何医生退热贴 4贴装/盒" subtitle="¥17.5">
							   <img style={{width:"100%"}} src="https://sq.968309.com/pic//file/goodsImgPath/TB1mhjlKFXXXXbWXXXXXXXXXXXX_!!0-item_pic.jpg"/>
						   </ProductList.Item>
						   <ProductList.Item title="Dr.He/何医生退热贴 4贴装/盒" subtitle="¥17.5">
							   <img style={{width:"100%"}} src="https://sq.968309.com/pic//file/goodsImgPath/TB1mhjlKFXXXXbWXXXXXXXXXXXX_!!0-item_pic.jpg"/>
						   </ProductList.Item>
	            	   </ProductList>
	            	   <ProductList title="健康服务" 	avgcls="am-avg-sm-4">
	            	   		<ProductList.Button icon="iconfont icon-yibaoqia" title="医保专区" />
	            	   		<ProductList.Button icon="iconfont icon-daiban-copy" title="小熊代办" />
	            	   		<ProductList.Button icon="iconfont icon-zhibo" title="医生直播" />
	            	   		<ProductList.Button icon="iconfont icon-zixun" title="咨询医生" />
	            	   		<ProductList.Button icon="iconfont icon-xiaomishu" title="健康秘书" />
	            	   </ProductList>                
	                <TabBar/>
				</Container>
				<Footer selectIndex="0"/>
            </div>
		)
	}
});

ReactDOM.render(<Root/>, document.getElementById('merry'));