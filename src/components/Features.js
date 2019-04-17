import React, { Component } from 'react';
import '../../static/assets/css/features.css';
import markdownify from '../utils/markdownify';

class Features extends Component {
    render() {
        const{features} = this.props
        return (
            <div class="features-outer">
                <div class="features-inner">
                    {
                        this.props.subheading ?
                        <>
                        <h2>{this.props.subheading}</h2>
                            <hr class="features-underline" />
                        </>
                        : null
                    }
                    {
                        this.props.heading ?
                        <h1>{this.props.heading}</h1>
                        : null
                    }
                    {
                        this.props.content ?
                        <>
                        {markdownify(this.props.content)}
                        </>
                        : null
                    }
                    {
                        this.props.featuresList ?
                        <ol class="features-list">
                            {this.props.featuresList.map(feature => 
                                <li>
                                    {
                                        feature.image ?
                                        <img src={require("../../static/images/" + feature.image)} alt="Import your medium blog" />
                                        : null
                                    }
                                    <p>
                                        {
                                            feature.title ?
                                            <h3>{feature.title}</h3>
                                            : null
                                        }
                                        {
                                            feature.text ?
                                            <>
                                                {feature.text}
                                            </>
                                            : null
                                        }
                                    </p>
                                </li>
                            )}
                        </ol>
                        : null
                    }
                </div>
            </div>
        );
    }
}

export default Features;