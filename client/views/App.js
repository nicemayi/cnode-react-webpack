import React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../config/Routes';

export default class App extends React.Component {
    componentDidMount() {
        // do soemthing
    }

    render() {
        return [
            <div>
                <Link to="/">首页</Link>
                <br />
                <Link to="/topic-detail">详情页</Link>
            </div>,
            <Routes />,
        ];
    }
}
