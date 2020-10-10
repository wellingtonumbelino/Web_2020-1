import React, { Component } from 'react';

import Card from './Card';

export default class Maior extends Component {
    render() {
        function maior(num1, num2) {
            if (num1 > num2) {
                return (num1);
            } else if (num2 > num1) {
                return (num2);
            } else {
                return ('Iguais');
            }
        }

        return (
            <Card title='Maior'>
                {maior(this.props.num1, this.props.num2)}
            </Card>
        )
    }
}
