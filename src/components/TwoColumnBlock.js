
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../static/assets/css/two-column-block.scss';


class TwoColumnBlock extends Component {
    render() {
        const {column1, column2} = this.props;
        return (
            <div className="container">
                <div className="two-column-block">
                    <div className="half">
                        <h3>{column1.title}</h3>
                        <p>{column1.text}</p>
                    </div>
                    <div className="half">
                        <h3>{column2.title}</h3>
                        <p>{column2.text}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TwoColumnBlock;