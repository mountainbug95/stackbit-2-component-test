import _ from 'lodash';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import '../../static/assets/css/main.scss';

import COMPONENTS from '../index';
import SiteHelmet from '../components/SiteHelmet';

export default class Page extends React.Component {
    render() {
        const {frontmatter} = this.props.pageContext;
        const {template, sections} = frontmatter;

        const Layout = COMPONENTS[template];

        let layoutProps = {};
        Object.keys(this.props.pageContext.frontmatter).forEach((field) => {
            const prop = this.props.pageContext.frontmatter[field];
            if (prop.component) {
                const Component = COMPONENTS[prop.component];
                layoutProps[field] = <Component context={this.props.pageContext} {...prop}/>;
            } else {
                // layoutProps[field] = prop;
            }
        });

        const children = (sections || []).map((section, idx) => {
            const Component = COMPONENTS[section.component];
            return <Component key={`${section.component}${idx}`} context={this.props.pageContext} {...section}/>;
        });

        return (
            <Layout context={this.props.pageContext} {...layoutProps}>
                <SiteHelmet title={frontmatter.title}/>
                {children}
                {ReactHtmlParser(_.get(this.props, 'pageContext.html'))}
            </Layout>
        );
    }
}
