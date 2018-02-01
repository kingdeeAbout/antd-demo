/**
 * Created by dadawang on 2018/2/1.
 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink ,Link} from 'react-router-dom'
import AAA from '../page/a'
import BBB from '../page/b'

export default class LeftMenu extends React.Component{
    render() {
        return (
            <Router>
                <div>
                    <div style={{width: '20%', float: 'left'}}>
                        <Link to="/">默认</Link>
                        <Link to="/a">A</Link>
                        <Link to="/b">B</Link>
                    </div>
                    <div style={{float: 'right', width: '80%'}}>
                        <Route path="/a" component={AAA}/>
                        <Route path="/b" component={BBB}/>
                    </div>
                </div>
            </Router>
        );
    }
}