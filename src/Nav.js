import './nav.css'
import React from 'react';


class Nav extends React.Component{
    constructor(props) {
        super(props);
        this.state = {show:false}
    }

    componentWillMount() {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                this.setState({show:true})
            }else{this.setState({show:false})}
        })
    }

    render() {
        return(
            <div className={`nav ${this.state.show && "nav__black"}`}>
                <img
                    className={"nav__logo"}
                    src = "./netflix.png"
                    alt = "Netflix Logo"
                />

                <img
                    className={"nav__avatar"}
                    src = "./smile.png"
                    alt = "Netflix Logo"
                />
            </div>
        )
    }
}

export default Nav;