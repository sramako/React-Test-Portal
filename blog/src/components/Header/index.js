// src/components/Header/index.js

import React, { Component } from "react";
import { render } from 'react-dom'
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import MenuContent from './menuContent'

const contentStyles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
}

class Menu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menuOpen: false,
        }
    }

    openMenu() {
        this.setState({ menuOpen: true })
    }

    closeMenu() {
        this.setState({ menuOpen: false })
    }

    render() {
        return <div>
            <CheeseburgerMenu  
                isOpen={this.state.menuOpen}
                closeCallback={this.closeMenu.bind(this)}>
                <MenuContent closeCallback={this.closeMenu.bind(this)}/>
            </CheeseburgerMenu>

            <HamburgerMenu
                isOpen={this.state.menuOpen}
                menuClicked={this.openMenu.bind(this)}
                width={40}
                height={30}
                strokeWidth={3}
                rotate={0}
                color='black'
                borderRadius={0}
                animationDuration={0.5}
            />

            <span style={contentStyles}>
            </span>
        </div>
    }
}

class Header extends React.Component{  
    render () {
        const headerStyles = {
            // 'borderStyle':'solid',
            'height':'50px',
            'top':'0',
            'left':'10px',
            'width':'95%',
            // 'position':'relative',
            'position': '-webkit-sticky',
            'position': 'sticky',
            'marginBottom':'10px',
            'paddingBottom':'0px',
            'backgroundColor':'white',
            'paddingTop':'20px'
        }
        const styles = {
            'position':'absolute',
            'left' : '50%',
            'transform': 'translate(-50%, 0)',
            'top': '20px',
            'backgroundColor': 'white'

        };
        const headerBackDrop = {
            'position': 'absolute',
            'z-index': '2',
            'width': '100px',
            'background-color': 'white',
            'height': '100px',
            'top': '0'
        }
        return (
            <div style={headerStyles}>
                <Menu/>
                <div style={styles}>
                    <h2>Srook</h2>
                </div>
                {/* <div style={headerBackDrop}/> */}
            </div>
        );
    }
}
export default Header;