
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../static/assets/css/title-block.scss';


class TitleBlock extends Component {
    render() {
        const {title, subtitle} = this.props;
        return (
            <div className="title-block container">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
        );
    }
}

export default TitleBlock;