import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import '../../static/assets/css/tweets.css';

class Tweets extends Component {

    hideAllExcept(index, numSlides){
        for (var i = 0; i < numSlides; i++)
        {
            document.getElementById(i).setAttribute("style", "display: none;");
        }
        document.getElementById(index).setAttribute("style", "display: inline-block;");
    }

    render() {
        let index = -1;
        return (
            <div class="hero-tweets">
                {
                    this.props.heading ?
                    <>
                    <h2>{this.props.heading}</h2>
                    <hr  class="underline" /></>
                    : null
                }
                <div className="carousel">
                    <ul className="slides">
                        {this.props.tweets_carousel.map((tweet, index) => 
                            <>
                                {console.log(this.index = this.props.tweets_carousel.length)}
                                {
                                    index > 0 ?
                                    <li id={index} style={{display: 'none'}} dangerouslySetInnerHTML={{__html: tweet.embed}}></li>
                                    : 
                                    <li id={index} dangerouslySetInnerHTML={{__html: tweet.embed}}></li>
                                }
                            </>
                        )}
                    </ul>
                    <ul className="indexer">
                        {this.props.tweets_carousel.map((button, index) =>
                                <li><button onClick={() => 
                                    {this.hideAllExcept(index, this.index)}
                                 }></button></li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Tweets;