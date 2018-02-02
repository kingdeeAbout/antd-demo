/**
 * Created by dadawang on 2018/2/1.
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import OperateCenter from '../page/operate/operateCenter'
import BBB from '../page/b'
import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;

export default class LeftMenu extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            current: '1',
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {

    }

    componentWillUnmount() {

    }

    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key
        });
    }


    render() {
        return (
            <Router>
                <div>
                    <div style={{width: '20%', float: 'left'}}>
                        {/*<Menu theme="light" defaultSelectedKeys={['1']} mode="inline">*/}
                            {/*<Menu.Item key="1">*/}
                                {/*<Icon type="pie-chart"/>*/}
                                {/*<Link to="/a"><span>运营中心</span></Link>*/}
                            {/*</Menu.Item>*/}
                            {/*<Menu.Item key="2">*/}
                                {/*<Icon type="desktop"/>*/}
                                {/*<Link to="/b"><span>订单管理</span></Link>*/}
                            {/*</Menu.Item>*/}
                        {/*</Menu>*/}
                        <Menu onClick={this.handleClick}
                              style={{width:240}}
                              defaultOpenKeys={['sub1']}
                              selectedKeys={[this.state.current]}
                              mode="inline">
                            <SubMenu key="sub1" title={<span><i className="anticon anticon-mail"></i><span>运营数据</span></span>}>
                                <Menu.Item key="1"><Link to="/a">运营中心</Link></Menu.Item>
                                <Menu.Item key="2"><Link to="/b">下单渠道</Link></Menu.Item>
                                <Menu.Item key="3">选项3</Menu.Item>
                                <Menu.Item key="4">选项4</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><i className="anticon anticon-appstore"></i><span>导航二</span></span>}>
                                <Menu.Item key="5">选项5</Menu.Item>
                                <Menu.Item key="6">选项6</Menu.Item>
                                <SubMenu key="sub3" title="三级导航">
                                    <Menu.Item key="7">选项7</Menu.Item>
                                    <Menu.Item key="8">选项8</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu key="sub4" title={<span><i className="anticon anticon-setting"></i><span>导航三</span></span>}>
                                <Menu.Item key="9">选项9</Menu.Item>
                                <Menu.Item key="10">选项10</Menu.Item>
                                <Menu.Item key="11">选项11</Menu.Item>
                                <Menu.Item key="12">选项12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                    <div style={{float: 'right', width: '80%'}}>
                            <Route path="/a" component={OperateCenter}/>
                            <Route path="/b" component={BBB}/>
                    </div>
                </div>
            </Router>
        );
    }
}