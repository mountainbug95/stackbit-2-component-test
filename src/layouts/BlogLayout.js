import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogPosts from '../components/BlogPosts';

import '../../static/assets/css/single-column-layout.scss';
import '../../static/assets/css/blog-layout.scss';

class BlogLayout extends Component {
    render() {
        const {posts} = this.props;
        console.log(this.props)
        return (
            <div className="blog-post single-column">
                <Header 
                    {...this.props.header} 
                    backgroundImage={"images/detail-bg.jpg"}
                />
                <div className="container s-page">
                    <h1>Recent Posts</h1>
                    <BlogPosts posts={posts}/>
                    {this.props.children}
                </div>
                <Footer {...this.props.footer}/>
            </div>
        )
    }
}

export default BlogLayout;