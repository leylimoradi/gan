import React from 'react';
import { Component } from 'react';
import { Fragment } from 'react';
import { RiArrowLeftSLine } from 'react-icons/ri';

import App from '../components/modal';
import State from '../components/stateBar.js';
import Tag from '../components/tag.js';
import BB from '../components/filter.js'





export default class Main extends Component {
    render() {
        return (
            <Fragment>
                <main>
                <div className="mapBar">
                    <div className="container">
                        <ul>
                            <li>
                                <a className="activeR" href="/#">ایرانگان</a>
                                <RiArrowLeftSLine size={10} color="grey" /></li>
                            <li>
                                <a href="/#">خودرو</a>
                            </li>
                        </ul>
                        <App />
                    </div>
                </div>
                <div className="container">
                    <div className="mainSection">

                            <State />
                          
                           <BB />
                    
                    </div>


                    <aside className="sideSection">
                        <div className="titleSide">کلیدواژه</div>
                        <Tag />
                    </aside>
                    </div>
                </main>
            </Fragment>
        )
    }
}
