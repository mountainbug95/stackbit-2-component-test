import React, { Component } from 'react';
import '../../static/assets/css/form.scss';

class BetaSignUp extends Component {
    render() {
        return (
            <div className="background-image-beta header-beta">
                {this.props.header}
                <div className="contact">
                    <section className="container">
                        <h1>Join the Beta Waitlist</h1>
                        <form data-netlify="true" netlify-honeypot="bot-field" name="beta" action="/thank-you" id="contact-form" role="form">
                            <input type="email" tabIndex="1" name="_replyto" placeholder="Email Address" required/>
                            <button className="btn-primary knockout" tabIndex="2" type="submit" name="submit">Sign Me Up</button>
                            <input type="hidden" className="hidden" name="bot-field"/>
                            <input type="hidden" name="form-name" value="beta"/>
                        </form>
                    </section>
                </div>
                {this.props.children}
                {this.props.footer}
            </div>
        )
    }
}

export default BetaSignUp;