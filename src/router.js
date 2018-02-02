/**
 * Created by Administrator on 2018/2/2.
 */
/**
 * Created by dadawang on 2018/2/1.
 */
import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import App from './App';
// import Login from './page/login'

export default class Routers extends React.Component{
    render() {
        return (
            <Router>
                <Route path="/" component={App}/>
            </Router>
        );
    }
}