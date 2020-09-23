import React, { Component } from "react";

export default class ScrollToTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_visible: false
        };
    }

    componentDidMount() {
        var scrollComponent = this;
    }



    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
      
        return (
            <div className="scroll-to-top">
            
                    <div onClick={() => this.scrollToTop()}>
                    برگشت به بالا
                    </div>
              
            </div>
        );
    }
}
