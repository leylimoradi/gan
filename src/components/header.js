import React from 'react';
import { Fragment } from 'react';
import { Component } from 'react'
import Logo from '../images/logoIrangan.svg';
import Menu from '../components/menu'


export default class Head extends Component {
    render() {
        return (

            <Fragment>
             <header>
                <div className="container">
                    <Menu />
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <input
                        className="searchField"
                        type="text"
                        placeholder="جستجو"
                        aria-label="جستجو" />
                    <div className="login">
                        <a href="/#">ورود</a>
                    </div>
                    </div>
                </header>
            </Fragment>
        )
    }
}