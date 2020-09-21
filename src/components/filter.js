
import React from 'react';

import { Component } from 'react';
import data from "../data/ads.json"

console.clear();
const ads = data.ads;



const FILTER_DEFS = {
    'None': company => company,
    'MostLiked': company => company.MostLiked,
    'Mostviewed': company => company.Mostviewed,
    'Off': company => company.off,

};



export default class BB extends Component {
    state = {
        activeIdx: 0
    };
    constructor(props) {
        super(props);

        this.state = {
            list: ads,
            filterKey: 'None',
            selectedButton: null
        }

    }

    buttonSelected = selectedButton => ev => {
        this.setState({ selectedButton })
    }

    render() {


        const { list, filterKey } = this.state;
        const filteredList = list.filter(FILTER_DEFS[filterKey]);
        return (
            <article>
                <div className="filterBtn">
                    <p>  مرتب‌سازی بر اساس : </p>
                    <button
                        type="button"
                        onClick={() => this.setState({ filterKey: 'None' })}
                    >چيدمان تصادفي</button>


                    <button
                        type="button"
                        onClick={() => this.setState({ filterKey: 'MostLiked' })}
                    >محبوب‌ترين</button>



                    <button
                        type="button"
                        onClick={() => this.setState({ filterKey: 'Mostviewed' })}
                    >پرنظرترين</button>
                    <button
                        type="button"
                        onClick={() => this.setState({ filterKey: 'Off' })}
                    >تخفيف‌دار</button>
                    <div className="underline"></div>

                </div>

                <ul className="listingItems">

                    {filteredList.map(company =>
                        <li key={company.uniqueId}>
                            <div className="itemDetails"></div>
                            <div className="itemDes">
                                <img src={company.img} alt={company.uniqueId} />
                                <div className="adsName">{company.name}</div>
                                <div className="rowcode_star">
                                    <div className="codeBox">{company.code}</div>
                                    <div className="squreBox">{company.star}</div>
                                </div>
                            </div>
                        </li>)}
                </ul>

            </article>
        );

    }
}




