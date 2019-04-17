import _ from 'lodash';
import React, { Component } from 'react';

import ContainerLayout from './layouts/ContainerLayout';
import SingleColumnLayout from './layouts/SingleColumnLayout';
import MediumLayout from './layouts/MediumLayout';
import BetaSignUp from './layouts/BetaSignUp';
import HeroPrimary from './components/HeroPrimary';
import StackItems from './components/StackItems';
import GenericSection from './components/GenericSection';
import Checklist from './components/CheckList';
import Features from './components/Features';
import Hero from './components/Hero';
import OpenFile from './components/OpenFile';
import Tweets from './components/Tweets';
import VideoSection from './components/VideoSection';
import TitleBlock from './components/TitleBlock';
import TwoColumnBlock from './components/TwoColumnBlock';
import Banner from './components/Banner';
import CTA from './components/CTA';
import ActionTitleBlock from './components/ActionTitleBlock';

import _Header from './components/Header';
import _Footer from './components/Footer';
import _JobLayout from './layouts/JobLayout';
import _Jobs from './components/Jobs';
import _BlogLayout from './layouts/BlogLayout';
import _BlogPostLayout from './layouts/BlogPostLayout';


function withTransform(Component, transform) {
    return (props) => {
        return <Component {...transform(props)}/>
    }
}

const Footer = withTransform(_Footer, props => {
    return Object.assign(_.get(props, 'context.site.siteMetadata.footer', {}), props);
});

const Header = withTransform(_Header, props => {
    return Object.assign(_.get(props, 'context.site.siteMetadata.header', {}), props);
});

const Jobs = withTransform(_Jobs, props => {
    return Object.assign({
        jobs: _.get(props, 'context.pages', [])
                    .filter(page => page.relativeDir === 'jobs')
                    .map(page => {
                        return {
                            ...page.frontmatter,
                            href: page.url
                        }
                    })
    }, props);
});

const JobLayout = withTransform(_JobLayout, props => {
    return Object.assign({
        header: _.get(props, 'context.site.siteMetadata.header', {}),
        footer: _.get(props, 'context.site.siteMetadata.footer', {}),
        url: props.context.url, 
        ...props.context.frontmatter
    }, props);
});

const BlogPostLayout = withTransform(_BlogPostLayout, props => {
    return Object.assign({
        header: _.get(props, 'context.site.siteMetadata.header', {}),
        footer: _.get(props, 'context.site.siteMetadata.footer', {}),
        url: props.context.url, 
        ...props.context.frontmatter
    }, props);
});

const BlogLayout = withTransform(_BlogLayout, props => {
    return Object.assign({
        header: _.get(props, 'context.site.siteMetadata.header', {}),
        footer: _.get(props, 'context.site.siteMetadata.footer', {}),
        posts: _.get(props, 'context.pages', [])
                    .filter(page => page.relativeDir === 'blog')
                    .map(page => {
                        return {
                            ...page.frontmatter,
                            href: page.url
                        }
                    })
    }, props);
});

export default {
    ContainerLayout,
    SingleColumnLayout,
    MediumLayout,
    BetaSignUp,
    JobLayout,
    BlogPostLayout,
    BlogLayout,
    Footer,
    Header,
    HeroPrimary,
    StackItems,
    GenericSection,
    Checklist,
    Features,
    Hero,
    OpenFile,
    Tweets,
    VideoSection,
    TwoColumnBlock,
    TitleBlock,
    Jobs,
    Banner,
    CTA,
    ActionTitleBlock
};
