import React, { Component } from 'react';
import { ResponsiveEmbed } from 'react-bootstrap';
import { withPrefix } from 'gatsby';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

import '../../static/assets/css/single-column-layout.scss';
import '../../static/assets/css/blog-post-layout.scss';

class BlogPostLayout extends Component {
    render() {
        const {title, url} = this.props;
        return (
            <div className="blog-post single-column">
                <Header 
                    {...this.props.header} 
                    backgroundImage={"images/detail-bg.jpg"}
                />
                <div className="container s-page post-outer">
                    <section className="hero">
                        <ResponsiveEmbed className="hero-image">
                            <img src={withPrefix(this.props.thumbnail)} className="thumbnail"/>
                        </ResponsiveEmbed>

                        <div className="info">
                            <h1>{title}</h1>
                        </div>
                    </section>

                    <section className="content">
                        <article className="container">
                            {this.props.children}
                        </article>
                    </section>
                </div>

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

                <CTA />

                <Footer {...this.props.footer}/>
            </div>
        )
    }
}

export default BlogPostLayout;