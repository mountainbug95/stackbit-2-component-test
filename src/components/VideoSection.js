
import React, { Component } from 'react';

import '../../static/assets/css/video-section.css';


class VideoSection extends Component {

    render() {
        const {video} = this.props;
        return (
            <div class="video-section-outer">
                {
                    this.props.heading ?
                    <>
                    <h2>{this.props.heading}</h2>
                        <hr class="underline" />
                    </>
                    : null
                }
                <div class="video-container-inner">
                    {
                        this.props.URL ?
                        <iframe src={this.props.URL} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        : null
                    }
                    {
                        this.props.directions ?
                        <ol class="directions">
                            {this.props.directions.map(direction =>
                                <li>
                                    {direction.text}
                                </li>
                            )}
                        </ol>
                        : null
                    }
                </div>
            </div>
        )
    }
}

export default VideoSection;