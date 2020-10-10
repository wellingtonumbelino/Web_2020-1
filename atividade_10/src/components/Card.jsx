import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        return (
            <div className='card text-white bg-primary'>
                <div className='card-header'>
                    {this.props.title}
                </div>
                <div className='card-body'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}