import React, { Component } from 'react'

import './menuContent.css'

class MenuContent extends Component {
  constructor(props) {
    super(props)

    this.items = [
      <h1>Hi User</h1>,
      "My Profile",
      "About",
      "Contact Us"
    ]
    // for (let i=1; i<=5; i++) {
    //   this.items.push(i)
    // }
  }

  render() {
    return (
      <div className="menu">
        {this.items.map(i => <div className="menu-item" key={i}>
          <a
            href="https://github.com/Middlerun/cheeseburger-menu"
            onClick={this.props.closeCallback}
            target="_blank">
            <h3>{i}</h3>
          </a>
        </div>)}

        <p className="hint">Click outside the menu to close it, or swipe it closed on touch device</p>
        <p className="credits">Developed with &#10084;&#65039;<br/> ~sramako</p>
      </div>
    )
  }
}

export default MenuContent
