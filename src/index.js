import React, { Component, Fragment } from 'react'
import ReactDOM from "react-dom";

import './styles.css';
import Head from './components/header.js';
import Main from './components/main.js';






export default class Header extends Component{
    render() {
        return (

            <Fragment>
                <Head />
                <Main />
            </Fragment>
        )
    }
}
ReactDOM.render(<Header />, document.getElementById('root'));
