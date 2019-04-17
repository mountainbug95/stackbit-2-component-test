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
        const {title} = this.props;
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

                <CTA />

                <Footer {...this.props.footer}/>
            </div>
        )
    }
}

export default BlogPostLayout;