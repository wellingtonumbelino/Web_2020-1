import React, { Component } from 'react';

import Card from './Card';

export default class Soma extends Component {
    render() {
        function soma(num1, num2) {
            return num1 + num2;
        }

        return (
            <Card title='Soma'>
                {soma(this.props.num1, this.props.num2)}
            </Card>
        )
    }
}
