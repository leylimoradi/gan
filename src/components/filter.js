import React from 'react';

import {Component} from 'react';
import data from "../data/ads.json"

console.clear();
const ads = data.ads;

const FILTER_DEFS = {
    'None': company => company,
    'MostLiked': company => company.MostLiked,
    'Mostviewed': company => company.Mostviewed,
    'Off': company => company.off
};

export default class BB extends Component {
    componentDidMount() {
        document.getElementById("ddd").click()
    }
    state = {
        activeIdx: 0
    };

    constructor(props) {
        super(props);
      
        this.state = {
            list: ads,
            filterKey: 'None',
            selectedButton: null,
            activeIndex: null
        }

    }

    buttonSelected = selectedButton => ev => {
        this.setState({selectedButton})
    }
    setActive = index => {
        this.setState({ activeIndex: index });
    };
    
    render() {

        const {list, filterKey} = this.state;
        const filteredList = list.filter(FILTER_DEFS[filterKey]);
        return (
            <article>
                <div className="filterBtn">
                    <p>
                        مرتب‌سازی بر اساس :
                    </p>
                    <div className="btnContainer">
                        <button id="ddd" type="button" className={this.state.activeIndex === 0
                        ? "is-current"
                            : ""}
                        onClick={() => { this.setState({ filterKey: 'None' }), this.setActive(0)}
                                 }>چيدمان تصادفي</button>

                    <button type="button" className={this.state.activeIndex === 1
                        ? "is-current"
                        : ""}
                        onClick={() => { this.setState({ filterKey: 'MostLiked' }), this.setActive(1) }
                                }>محبوب‌ترين</button>

                    <button type="button" className={this.state.activeIndex === 2
                        ? "is-current"
                        : ""}
                        onClick={() => { this.setState({ filterKey: 'Mostviewed' }), this.setActive(2) }
                    }>پرنظرترين</button>
                    <button type="button" className={this.state.activeIndex === 3
                        ? "is-current"
                        : ""}
                        onClick={() => { this.setState({ filterKey: 'Off' }), this.setActive(3) }
                    }>تخفيف‌دار</button>
                    <div className="underline"></div>

                    </div>

                </div>

              

                <ul className="listingItems">

                    {
                        filteredList.map(
                            company => <li key={company.uniqueId}>
                                <div className="itemDetails"></div>
                                <div className="itemDes">
                                    <img src={ads.img} alt={company.uniqueId}/>
                                    <div className="adsName">{company.name}</div>
                                    <div className="rowcode_star">
                                        <div className="codeBox">{company.code}</div>
                                        <div className="squreBox">{company.star}</div>
                                    </div>
                                </div>
                            </li>
                        )
                    }
                </ul>

            </article>
        );

    }
}
