/**
 * Created by dadawang on 2018/2/1.
 */
import React from 'react'
import Atest from '../api/atest'

const api = new Atest();

export default class AAA extends React.Component{
    constructor(props) {
        super (props)
    }

    componentDidMount() {
        this.getdata();
    }
    getdata() {
        api.gettext('').then((data) => {
           console.log(data.name);
        })
    }
    componentWillUnmount() {

    }
    render() {
        return (
            <div>A页面</div>
        );
    }
}