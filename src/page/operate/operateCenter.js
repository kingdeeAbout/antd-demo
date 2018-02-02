/**
 * Created by dadawang on 2018/2/1.
 */
import React from 'react'
import Atest from '../../api/operateCenterApi'

const api = new Atest();

export default class OperateCenter extends React.Component{
    constructor(props) {
        super (props);

        this.state = {
            center: ""
        };
    }

    componentDidMount() {
        this.getdata();
    }
    getdata() {
        api.gettext('').then((data) => {
           console.log(data.name);
            this.setState({
                center: data.name
            });
        })
    }
    componentWillUnmount() {

    }
    render() {
        return (
            <div>
                <h1>运营中心页面</h1>
                <h2>{this.state.center}</h2>
            </div>
        );
    }
}