import React, { Component } from 'react';
import '../../static/assets/css/hero.css';
import OpenFile from './OpenFile';
import CheckList from './CheckList';
import Tweets from './Tweets';

class Hero extends Component {
    render() {
        return (
            <div class="hero-container">
                <div class="hero-content">
                    <div class="hero-col1">
                        <div class="hero-headline">
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
                                this.props.contact ?
                                <div class="hh-contact">
                                    {
                                        this.props.displayImage ?
                                        <img src={require("../../static/images/icons/Ohad-thumbnail.jpg")} class="contact-thumbnail" alt="Contact Us" />
                                        : null
                                    }
                                    <span>
                                        {
                                            this.props.contact.text ?
                                            <>
                                                {this.props.contact.text}
                                                <br />
                                            </>
                                            : null
                                        }
                                        {
                                            this.props.contact.link ?
                                                <a href="{this.props.contact.link.url}">{this.props.contact.link.text}</a>
                                            : null
                                        }
                                    </span>
                                </div>
                                : null
                            }
                        </div>
                        {
                            this.props.tweets ?
                            <Tweets 
                                {...this.props.tweets}
                            />
                            : null
                        }
                    </div>
                    <div class="hero-col2">
                        {
                            this.props.openFile?
                            <OpenFile 
                                    {...this.props.openFile}
                            />
                            : null
                        }
                        {
                            this.props.checklist ?
                            <CheckList 
                                {...this.props.checklist}
                            />
                            : null
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;