import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div id="header__logo" className="header__logo"></div>
                <div className="header__greeting">
                    {this.props.text}
                </div>
            </header>
        );
    }
}

export default Header;
