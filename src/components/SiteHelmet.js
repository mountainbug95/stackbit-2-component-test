import React, { Component } from "react";
import { Helmet } from "react-helmet";



export default class SiteHelmet extends Component {

    render() {
        const title = this.props.title && this.props.title !== 'Stackbit' ? `${this.props.title} | Stackbit` : 'Stackbit';
        const description = this.props.description || 'Build Modern JAMstack Websites in Minutes. Combine any Theme, Site Generator and CMS without complicated integrations.';
        return (
            <Helmet>
                <title>{title}</title>
                <meta charset="utf-8"/>
                <meta httpEquiv="Content-type" content="text/html; charset=UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
                <meta name="apple-mobile-web-app-title" content="Stackbit"/>
                <meta name="application-name" content="Stackbit"/>
                <meta name="msapplication-config" content="https://www.stackbit.com/img/favicon/browserconfig.xml"/>
                <meta name="theme-color" content="#ffffff"/>
                <meta name="description" content={description}/>
                <meta itemprop="name" content={title}/>
                <meta itemprop="description" content={description}/>
                <meta itemprop="image" content="https://www.stackbit.com/img/meta-image.jpg"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@stackbithq"/>
                <meta name="twitter:title" content={title}/>
                <meta name="twitter:description" content={description}/>
                <meta name="twitter:creator" content="@stackbithq"/>
                <meta name="twitter:image" content="https://www.stackbit.com/img/meta-image.jpg"/>
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={description}/>
                <meta property="og:image" content="https://www.stackbit.com/img/meta-image.jpg"/>
                <meta property="og:image:secure_url" content="https://www.stackbit.com/img/meta-image.jpg"/>
                <meta property="og:site_name" content="Stackbit"/>
                <link rel="apple-touch-icon" sizes="120x120" href="https://www.stackbit.com/img/favicon/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="https://www.stackbit.com/img/favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="https://www.stackbit.com/img/favicon/favicon-16x16.png"/>
                <link rel="manifest" href="https://www.stackbit.com/img/favicon/manifest.json"/>
                <link rel="mask-icon" href="https://www.stackbit.com/img/favicon/safari-pinned-tab.svg" color="#0495f3"/>
                <link rel="shortcut icon" href="https://www.stackbit.com/img/favicon/favicon.ico"/>
            </Helmet>
        );
    }
}

