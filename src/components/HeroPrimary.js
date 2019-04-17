
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../static/assets/css/hero-primary.scss';

class HeroPrimary extends Component {
    render() {
        const {
            className,
            title, 
            subtitle, 
            buttonTitle, 
            buttonHref, 
            imageSectionTitle, 
            imageSectionImage, 
            videoSource
        } = this.props;
        return (
            <section className={`hero-primary ${className || ''}`}>
                <div className="container">
                    <article className="content">
                        <h1>{title}</h1>
                        {subtitle ? <h2>{subtitle}</h2> : null}
                        <a href={buttonHref} className="btn-primary">{buttonTitle}</a>
                        {imageSectionImage ? (
                            <div className="mooseheads">
                                {imageSectionTitle ? <p>{imageSectionTitle}</p> : null}
                                <img src={imageSectionImage}/>
                            </div> 
                        ) : null}
                    </article>
                    {videoSource ? (
                    <div className="hero-img">
                        <video autoPlay loop muted>
                            <source src={videoSource} type="video/mp4"/>
                        </video>
                    </div>
                    ) : null}
                </div>
            </section>
        );
    }
}

HeroPrimary.propTypes = {
    title: PropTypes.string, 
    subtitle: PropTypes.string, 
    buttonTitle: PropTypes.string,
    buttonHref: PropTypes.string,
    imageSectionTitle: PropTypes.string,
    imageSectionImage: PropTypes.string,
    videoSource: PropTypes.string
};

export default HeroPrimary;