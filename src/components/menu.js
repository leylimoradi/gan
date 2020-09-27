import React from 'react';

import { Fragment } from 'react';
import { Component } from 'react';
import data from "../data/catagory.json"

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false
        };
        this.handleMenuHover = this
            .handleMenuHover
            .bind(this);
        this.state = {
            data: data
        }
    }
    handleMenuHover() {
        this.setState({
            isHovered: !this.state.isHovered
        });
    }
    render() {
        const menuActive = this.state.isHovered
            ? "active"
            : "";
        const menuOpen = this.state.isHovered
            ? "openMenu"
            : "";
        return (
            <Fragment>
                <div
                    className={"menu-icon " + menuActive}
                    onMouseEnter={this.handleMenuHover}
                    onMouseLeave={this.handleMenuHover}>
                    <div className="line_one"></div>
                    <div className="line_two"></div>
                    <div className="line_three"></div>
                </div>
                <div
                    className={"second-level " + menuOpen}
                    onMouseEnter={this.handleMenuHover}
                    onMouseLeave={this.handleMenuHover}>
                    <div>
                        {data.Category.map((cat, index) => {
                            return (
                                <div className="cat" key={index}>
                                    <div className="catLi">{cat.Title}
                                        <ul>{cat.Items.map((categoryItems, index) => {
                                            return (
                                                <li key={index}>{categoryItems.Name}
                                                </li>
                                            );
                                        })
                                        }
                                        </ul>
                                    </div>
                                </div>
                            );
                        })
                        }
                    </div>
                </div>
            </Fragment>
        );
    }
}
