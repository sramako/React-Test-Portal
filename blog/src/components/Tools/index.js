// src/components/Tools/index.js

import React from "react";
import './Tool.css';
import 'font-awesome/css/font-awesome.min.css';
import Posts from '../Posts';

class ToolBar extends React.Component {
    constructor() {
        super();
        this.state = {
            button: 'create'
        };
        this.toggleCreate = this.toggleCreate.bind(this);
    }

    toggleCreate(){
        if(this.state.button=='create') {
            this.props.update('closeCreate');
            this.setState({button: 'closeCreate'})
        }
        else if(this.state.button=='closeCreate') {
            this.props.update('create');
            this.setState({button: 'create'})
        }
    }

    render() {
        if(this.state.button=='create') {
            return (
                <div>
                    <a href="#" className="float" onClick={this.toggleCreate}>
                        <i className="fa fa-plus my-float"></i>
                    </a>
                    <div className="footer">
                        <p>Copyright @ sramako</p>
                    </div>
                </div>
            );
        }
        else if(this.state.button=='closeCreate') {
            return (
                <div>
                    <a href="#" className="float" onClick={this.toggleCreate}>
                        <i className="fa fa-times my-float"></i>
                    </a>
                    <div className="footer">
                        <p>Copyright @ sramako</p>
                    </div>
                </div>
            );
        }
    }
}
export default ToolBar;