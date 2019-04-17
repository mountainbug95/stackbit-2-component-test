import React, { Component } from 'react';
import { ResponsiveEmbed } from 'react-bootstrap';
import { withPrefix } from 'gatsby';

import '../../static/assets/css/blog-posts.scss';

class BlogPosts extends Component {

    singlePost(post) {
        return (
            <div className="post-container">
                <div className="thumbnail-container">
                    <ResponsiveEmbed>
                        <a href={post.href}>
                            <img src={withPrefix(post.thumbnail)} className="thumbnail"/>
                        </a>
                    </ResponsiveEmbed>
                </div>
                <div className="post-info">
                    <div><a href={post.href}><h1>{post.title}</h1></a></div>
                    <div>{post.excerpt}</div>
                    <div className="read-time">
                        <i class="fas fa-eye"></i>{post.readTimeMins} min
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const {posts} = this.props;
        return (
            <div className="blog-posts">
                {posts.map(this.singlePost)}
            </div>
        )
    }
}

export default BlogPosts;