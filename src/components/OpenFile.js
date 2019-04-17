import React, { Component } from 'react';
import '../../static/assets/css/open-file.css';

class OpenFile extends Component {
    render() {
        return (
            <div class="hero-ofd">
                <div>
                    {
                        this.props.displayDirections ?
                        <ol>
                        {this.props.directions.map(direction => <li>{direction.text}</li>).reduce((prev, curr) => [prev, <hr />, curr])}
                        </ol>
                        : null
                    }
                    <div class="file-drop">
                        <span>
                            <i class="far fa-file-archive"></i>
                        </span>
                        <div class="fd-cta"><a href="#">click here</a> to browse and upload</div>
                    </div>
                    <div  class="ofd-cta">You will need a Stackbit account. Don't have one? <a href="#">Sign up for FREE</a></div>
                </div>
            </div>
        );
    }
}

export default OpenFile;