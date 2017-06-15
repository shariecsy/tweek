/**
 * Created by ucs_chenshaoyi on 2017/6/12.
 */
var BindCard = React.createClass({
    render:function(){
        return (
            <div className="bindCard-box">
                <section className="csn-m-scroll">
                    <ul className="csn-box csn-list">
                        <li>
                            <label>姓名</label>
                            <input type="text" className="input-txt" placeholder="请输入持卡人姓名" />
                        </li>
                        <li>
                            <label>身份证号</label>
                            <input type="text" className="input-txt" placeholder="请输入持卡人身份证号"/>
                        </li>
                    </ul>
                    <a href="javascript:void(0);" className="csn-btn" >验证身份</a>
                    <footer className="csn-footer">
                        <div>本服务由信账宝提供支持</div>
                    </footer>
                </section>
            </div>
        )
    }
});

module.exports = BindCard;