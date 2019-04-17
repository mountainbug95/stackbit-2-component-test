import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../../static/assets/css/single-column-layout.scss';
import '../../static/assets/css/job-layout.scss';

class JobLayout extends Component {
    render() {
        const {title, location, experienceLevel, url} = this.props;
        return (
            <div className="jobs-detail single-column">
                <Header 
                    {...this.props.header} 
                    backgroundImage={"images/detail-bg.jpg"}
                />
                <div className="container details">
                    <a href="/jobs#open-positions" className="text-link with-arrow reversed">Back to All Jobs</a>
                    <h1>{title}</h1>
                    <h3>
                        {   location ?
                            <>{location}<br/></>
                            : null
                        }
                        {
                            experienceLevel ?
                            <em>Experience Level: {experienceLevel}</em>
                            : null
                        }
                    </h3>
                </div>
                <div className="container s-page">
                    {this.props.children}
                    <div className="share">
                        <span className="label">Share: </span>
                        <div dangerouslySetInnerHTML={{__html: `
                            <script src="https://platform.linkedin.com/in.js" charset="utf-8"></script>
                        `}}/>
                        <script type="IN/Share" data-url={`https://www.stackbit.com${url}`}></script>
                        <div dangerouslySetInnerHTML={{__html: `
                            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-text="Apply to be a ${title} @stackbithq" data-url="https://www.stackbit.com${url}" data-show-count="false">Tweet</a>
                            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                        `}}/>
                        <div dangerouslySetInnerHTML={{__html: `
                            <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.stackbit.com${url}&layout=button&size=small&mobile_iframe=true&appId=1468854916664121&width=59&height=20" width="59" height="20" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                        `}}/>
                    </div>
                    <div className="cta">
                        <h2><span className="accent">Join our growing team of experts.</span></h2>
                        <a href="https://docs.google.com/forms/d/1MiogR57wPBK4atgv26nTcuOWG1zU5_YJpVxK5u6Hqng/edit?usp=sharing" className="btn-primary">APPLY TODAY</a>
                    </div>
                </div>
                <Footer {...this.props.footer}/>
            </div>
        )
    }
}

export default JobLayout;