// src/components/Create/index.js

import React from "react";
import ReactDOM from 'react-dom';
import './Create.css'

class Create extends React.Component
{
    //This handles the upload
    constructor(props) {
        super(props);
        this.state = {
            createText: ''
        };
    }

    handleTextChange = (e) => {
        this.setState({ createText: e.target.value });
    }

    handleHeadChange = (e) => {
        this.setState({ createHead: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.createText);
        var cardText = this.state.createText;
        var cardHead = this.state.createHead;
        if(typeof cardText === 'string' && cardText.length > 0) {
            this.props.addCard([cardHead, cardText]);
        }
    }

    render() {
        return(
            <form className="create" ref="createCard">
                <div className="createContainer">
                    <div class="floating-label">      
                        <input
                            class="floating-input"
                            id="cardHead" type="text" 
                            placeholder="Type your topic here"
                            onChange={ this.handleHeadChange }
                        />
                        <label id="Heading">Heading</label>
                    </div>
                    <label>
                        <textarea
                            id="cardItem"
                            placeholder="Type something..."
                            onChange={ this.handleTextChange }
                            className="form-control"/>
                    </label>
                </div>
                {/* <h1>{this.state.createText}</h1> */}
                <a href="#" class="rainbow-button" alt="POST" onClick={this.handleSubmit}></a>
            </form>
        )
    }
}
export default Create;