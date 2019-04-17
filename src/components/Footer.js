
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../static/assets/css/footer.scss';


class Footer extends Component {

    render() {
        const {links, copyright} = this.props;
        return (
            <footer className="footer">
                <div className="container">
                    <a href="/"><img className="footer-logo" src={require("../../static/images/logo-white.svg")}  height="24" width="157"/></a>
                    <div className="copyright">
                        <div>
                            {links.map(link => <a key={link.href} href={link.href}>{link.title}</a>).reduce((prev, curr) => [prev, ' - ', curr])}
                        </div>
                        <div>{copyright}</div>
                    </div>
                    <div className="social-links">
                        <a href="https://twitter.com/stackbithq"><img alt="Twitter" src={require("../../static/images/footer/twitter-social-icon.svg")} className="svg"/></a>
                        <a href="https://github.com/stackbithq"><img alt="GitHub" src={require("../../static/images/footer/github-social-icon.svg")} className="svg"/></a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;