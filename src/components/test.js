import React from 'react';
import { Component } from 'react'
import data from "../data/ads.json";


const socialMediaList = data.img;

class Example1 extends Component {
    render() {
        return (
            <ul>
                {socialMediaList.map(s => (<li>{s}</li>))}
            </ul>
        );
    }
}
export default Example1;