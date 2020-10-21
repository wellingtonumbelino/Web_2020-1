import React, { Component } from 'react';

import Card from './Card';
import '../styles/Navigate.css';

export default class Navigate extends Component {

    constructor(props) {
        super(props);
        this.state = { num1: '', num2: '' }
        this.setNum1 = this.setNum1.bind(this);
        this.setNum2 = this.setNum2.bind(this);
    }

    setNum1(e) {
        this.setState({ num1: e.target.value });
    }

    setNum2(e) {
        this.setState({ num2: e.target.value });
    }

    resolve(n1, n2) {
        this.props.setNovoNum1(n1);
        this.props.setNovoNum2(n2);

        this.setState({ num1: '', num2: '' });
    }

    render() {
        return (
            <Card title='Calculadora'>
                <div className='navigate'>
                    <input
                        type='number'
                        placeholder='Número 1'
                        value={this.state.num1}
                        onChange={this.setNum1}
                    />
                    <input
                        type='number'
                        placeholder='Número 2'
                        value={this.state.num2}
                        onChange={this.setNum2}
                    />
                    <button className='btn btn-success' onClick={() => this.resolve(this.state.num1, this.state.num2)}>Resolver</button>
                </div>
            </Card>
        )
    }
}
