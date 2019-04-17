import React, { Component } from 'react';
import '../../static/assets/css/generic-section.css';
import markdownify from '../utils/markdownify';

class GenericSection extends Component {
    render() {
        return (
            <div class="generic-outer">
                {
                    this.props.heading ?
                    <h1>{this.props.heading}</h1>
                    : null
                }
                {
                    this.props.subheading ?
                    <h2>{this.props.subheading}</h2>
                    : null
                }
                {
                    this.props.content ?
                    <>
                        {markdownify(this.props.content)}
                    </>
                    : null
                }
            </div>
        );
    }
}

export default GenericSection;