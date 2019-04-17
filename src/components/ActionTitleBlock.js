
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../static/assets/css/action-title-block.scss';


class ActionTitleBlock extends Component {

    render() {
        const {title, subtitle, actionTitle, actionHref} = this.props;
        return (
            <div className="action-title-block">
                <div class="container">
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                    <p><a href={actionHref} class="text-link with-arrow">{actionTitle}</a></p>
                </div>
            </div>
        );
    }
}

export default ActionTitleBlock;