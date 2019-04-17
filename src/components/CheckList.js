import React, { Component } from 'react';

class CheckList extends Component {
    render() {
        return (
            <div class="hero-benefits">
                <ul>
                    {this.props.listItems.map(item => <li>{item.text}</li>)}
                </ul>
            </div>
        );
    }
}

export default CheckList;