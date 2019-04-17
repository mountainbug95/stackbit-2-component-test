
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../static/assets/css/jobs.scss';


class Jobs extends Component {

    jobItem(job) {
        const {href, title, location} = job;
        return (
            <a key={href} href={href}>
                <div className="card">
                    <h3>{title}</h3>
                    <p>{location}</p>
                </div>
            </a>
        );
    }

    render() {
        const {title, jobs} = this.props;
        return (
            <div id="open-positions" className="jobs">
                <div className="container">
                    <h1>{title}</h1>  
                    <div className="job-list">
                        {jobs.map(job => this.jobItem(job))}
                    </div>
                    <div className="passive-cta">
                        Don't see a position that fits your skill set? <a href="mailto:jobs@stackbit.com" className="text-link">Contact us</a>.
                    </div>
                </div>
            </div>
        );
    }
}

export default Jobs;