import React from 'react';
import { Fragment } from 'react';
import { Component } from 'react';
import data from "../data/tag.json";

const tags = data.tags;
export default class Tag extends Component {
    render() {
        return (
            <Fragment>
                <ul className="tagsList">
                    {tags.map(s => (<li key={s}>{s}</li>))}
                </ul>
            </Fragment>
        );
    }
}
