// src/components/Header/index.js

import React from "react";
import ReactDOM from 'react-dom';
import './Card.css'
import Create from '../Create';

class CardList extends React.Component {
    // This creates the Feed
    cardTime(date) {
        date = new Date(date);
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    render() {
        return (
            <div className="container">
                {
                    Object.keys(this.props.cards).reverse().map(function(key) {
                        return <div
                                className="card"
                                id={key}
                                style = {{'whiteSpace': 'pre-wrap'}}
                            >
                                <div className='cardImage'>
                                    {console.log('../../../img/' + this.props.cards[key][1])}
                                    {/* <img src={'./' + this.props.cards[key][0]} alt='image'></img> */}
                                    <img
                                        // TODO
                                        src='https://i.pinimg.com/736x/d6/a9/57/d6a957f1d8045c9c973c12bf5968326f.jpg'
                                        className = 'cardImageContent'
                                    />
                                    <div className='cardTime'>
                                        {this.cardTime(key)}
                                    </div>
                                </div>
                                <div className='cardHeading'>
                                    <h2>{this.props.cards[key][0]}</h2>
                                </div>
                                <div className='cardText'>
                                    {this.props.cards[key][2]}
                                </div>
                                
                            </div>
                    }.bind(this))
                }
            </div>
        );
    }
}

class Posts extends React.Component{
// This creates the HomePage
    constructor() {
        super();
        this.state = {
            cards : {
                'card-1' : ['Heading','abcd','Post 1'],
                'card-2' : ['Heading','abcd','Post 1'],
                'card-3' : ['Heading','abcd','Post 1'],
                'card-4' : ['Heading','abcd','Post 1'],
                'card-5' : ['Heading','abcd','Post 1'],
                'card-6' : ['Heading','abcd','Post 1'],
                'card-7' : ['Heading','abcd','Post 1'],
                'card-8' : ['Heading','2.jpg','Post 1']
            }
        };
        this.addCard = this.addCard.bind(this);
    }

    addCard(card) {
        var timestamp = (new Date()).getTime();
        this.state.cards[ timestamp ] = [card[0], card[0] , card[1]];
        this.setState({ cards : this.state.cards });
    }
    
    render() {
        // this.setState({create:this.props.create});
        if(this.props.tool=='closeCreate'){
            return (
                <div className="component-wrapper">
                    <Create addCard={this.addCard} />
                </div>
            );
        }
        else if(this.props.tool=='create'){
            return (
                <div className="component-wrapper">
                    <CardList cards={this.state.cards} />
                </div>
            );
        }
    }
}

export default Posts;