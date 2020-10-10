import React, { Component } from 'react';

import Card from './Card';

export default class Multiplicacao extends Component {
    render() {
        function mult(num1, num2) {
            return num1 * num2;
        }

        return (
            <Card title='Multiplicação'>
                {mult(this.props.num1, this.props.num2)}
            </Card>
        )
    }
}
