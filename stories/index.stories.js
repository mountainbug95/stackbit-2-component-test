import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';


import CheckList from '../src/components/CheckList';
import Features from '../src/components/Features';
import GenericSection from '../src/components/GenericSection';
import OpenFile from '../src/components/OpenFile';
import Tweets from '../src/components/Tweets';
import VideoSection from '../src/components/VideoSection';
import Footer from '../src/components/Footer';


import '../src/assets/css/hero.css';
import '../src/assets/css/features.css';
import '../src/assets/css/generic-section.css';
import '../src/assets/css/index.css';
import '../src/assets/css/open-file.css';
import '../src/assets/css/video-section.css';
import '../static/assets/css/footer.scss';
import '../static/assets/css/title-block.scss';
import '../static/assets/css/jobs.scss';
import '../static/assets/css/two-column-block.scss';
import '../static/assets/css/banner.scss';
import '../static/assets/css/hero-primary.scss';
import '../static/assets/css/aos.css';
import '../static/assets/css/hero-primary.scss';
import '../static/assets/css/main.scss';
import '../static/assets/css/header.scss';


storiesOf('Checklist', module)
  .add('basic checklist', () => (
    <CheckList 
    listItems={
    [
    {text: 'Completly FREE'},
    {text: 'Own Your Content'},
    {text: 'Fast, Scalable and Cheap'}
    ]
    }
    />
  ));

storiesOf('Features', module)
  .add('Features Section', () => (
    <Features 
    heading='This is a title that has not yet been defined'
    subheading= 'How it works'
    content='Fusce auctor convallis purus, non ornare quam lobortis semper. Pellentesque condimentum sed orci pharetra consectetur. In blandit maximus libero et dictum. Quisque iaculis sit amet metus et lobortis. Ut volutpat at purus ac molestie. Quisque elementum turpis a nibh blandit, non volutpat ex viverra. Nulla commodo feugiat tristique. Ut malesuada a ex vel congue. In pharetra faucibus vestibulum. Pellentesque a felis at lorem auctor pulvinar. &#13;&#13;Curabitur in lectus semper, laoreet lectus non, blandit tellus. Proin velit dolor, lacinia vitae elementum ut, faucibus id quam. Maecenas interdum molestie fermentum. Aenean augue nibh, sodales vel lobortis a, rhoncus vitae erat. Nunc vehicula nunc laoreet facilisis rutrum. Praesent dignissim est velit, in scelerisque dui finibus vel. Nam sem ex, imperdiet in mi nec, dapibus ultrices nibh. Sed sed tempor nisi, quis pulvinar dui.'
    featuresList={
    [
    {
    image: 'hour-glass.svg',
    title: 'Import Your Medium Blog',
    text: 'Fusce auctor convallis purus, non ornare quam lobortis semper. Pellentesque condimentum sed orci pharetra'
    },
    {
    image: 'circles.svg',
    title: 'Adjust Your Theme\'s Appearence',
    text: 'Fusce auctor convallis purus, non ornare quam lobortis semper. Pellentesque condimentum sed orci pharetra'
    },
    {
    image: 'connection.svg',
    title: 'Voilà! It’s live 🎉',
    text: 'Fusce auctor convallis purus, non ornare quam lobortis semper. Pellentesque condimentum sed orci pharetra'
    }
    ]
    }
    />
  ));

storiesOf('Generic', module)
  .add('Generic Section', () => (
    <GenericSection 
    heading='Start your migration'
    subheading='Drag & Drop your ZIP into the window'
    content='Fusce auctor convallis purus, non ornare quam lobortis semper. Pellentesque condimentum sed orci pharetra consectetur. In blandit maximus libero et dictum. Quisque iaculis sit amet metus et lobortis. Ut volutpat at purus ac molestie. Quisque elementum turpis a nibh blandit, non volutpat ex viverra. Nulla commodo feugiat tristique. Ut malesuada a ex vel congue. In pharetra faucibus vestibulum. Pellentesque a felis at lorem auctor pulvinar. Curabitur in lectus semper, laoreet lectus non, blandit tellus. Proin velit dolor, lacinia vitae elementum ut, faucibus id quam. Maecenas interdum molestie fermentum. Aenean augue nibh, sodales vel lobortis a, rhoncus vitae erat. Nunc vehicula nunc laoreet facilisis rutrum. Praesent dignissim est velit, in scelerisque dui finibus vel. Nam sem ex, imperdiet in mi nec, dapibus ultrices nibh. Sed sed tempor nisi, quis pulvinar dui.'
    />
  ));

storiesOf('Open File', module)
  .add('OFD with directions', () => (
    <>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <OpenFile 
    displayDirections='true'
    directions=
    {
    [
    {text: 'Go to "medium" settings'},
    {text: 'Scroll down to the "accounts" section and click "download.zib"'},
    {text: 'Drag and drop the .zip from medium to this screen'},
    {text: 'test'}
    ]
    }
    />
    </>
  ))
  .add('OFD no directions', () => (
    <>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <OpenFile 
    displayDirections={false}
    />
    </>
  ));

storiesOf('Tweets', module)
  .add('Tweets Section', () => (
    <Tweets 
    heading='What are people saying?'
    tweetImage={true}
    />
  ));

storiesOf('Video Section', module)
  .add('Video with directions', () => (
    <VideoSection 
    heading='Watch the demo'
    URL='https://www.youtube.com/embed/Kob0G2hE8IY'
    directions=
    {
    [
    {text: 'Go to Medium "Settings"'},
    {text: 'Scroll down to the "Accounts" section and click "Download .zip"'},
    {text: 'Drag and drop your .zip from Medium to this screen'}
    ]
    }
    />
  ))
  .add('Video no directions', () => (
    <VideoSection 
    heading='Watch the demo'
    URL='https://www.youtube.com/embed/Kob0G2hE8IY'
    />
  ));

storiesOf('Footer Section', module)
    .add('Footer', () => (
    <Footer 
    links=
    {
    [
    {
    href: 'https://www.stackbit.com/jobs/',
    title: 'Jobs'
    },
    {
    href: 'https://www.stackbit.com/tos/',
    title: 'Terms'
    },
    {
    href: 'https://www.stackbit.com/license/',
    title: 'License'
    },
    {
    href: 'https://www.stackbit.com/privacy/',
    title: 'Privacy'
    }
    ]
    }
    copyright='Copyright © 2018 Stackbit'
    />
));

storiesOf('Title Block Section', module)
    .add('Title Block', () => (
    <div class="title-block container"><h1>Join The Team</h1><h2>Make building and maintaining modern websites easy.</h2></div>
));

storiesOf('Jobs Section', module)
    .add('Jobs', () => (
    <div class="jobs"><div class="container"><h1>Open Positions</h1><div class="job-list"><div class="card"><h3>Full Stack Developer</h3><p>Stackbit HQ (San Francisco), Remote</p></div></div><div class="passive-cta">Don't see a position that fits your skill set? <a href="mailto:jobs@stackbit.com" class="text-link">Contact us</a>.</div></div></div>
));

storiesOf('Two Column Block Section', module)
    .add('Two Column Block', () => (
        <div class="container">
            <div class="two-column-block">
                <div class="half">
                    <h3>About Stackbit</h3>
                    <p>Websites are the building blocks of the internet and many millions of new ones are created every year. The way we create and engineer websites is changing thanks to the constant evolution of tools, best practices and needs. We're seeing websites being statically generated, served from CDNs, edited using Headless CMSs and wired up with a myriad of developer workflows. New ideas like the JAMstack, Serverless computing and GitOps enable us to create more performant and secure websites.</p>
                </div>
                <div class="half">
                    <h3>Building The New Internet</h3>
                    <p>One side effect of new, raw technologies is that they can increase the level of expertise required to get the job done. We recognize this gap between the available technologies and the needs of professionals as the product gap. At Stackbit our mission is to solve this gap - We're creating technology, products and services to help professionals "Get Websites Done".</p>
                </div>
            </div>
        </div>
    ));

storiesOf('Banner Section', module)
    .add('Banner Section', () => (
        <div class="banner">
            <div class="container">
                <h2>Stackbit was founded in late 2018 by a team of serial entrepreneurs and is backed by top tier VCs. We maintain a small HQ in San-Francisco and our team is fully distributed around the world.</h2>
                <div class="items">
                    <div class="item">
                        <div><img src={require("../static/images/jobs/founded-icon.svg")} /></div>
                        <h3>Founded in 2018 <span>by a team of serial entrepreneurs</span></h3></div>
                    <div class="item">
                        <div><img src={require("../static/images/jobs/funded-icon.svg")} /></div>
                        <h3>Funded by top-tier VCs &amp; Angels <span></span></h3></div>
                    <div class="item">
                        <div><img src={require("../static/images/jobs/employees-icon.svg")} /></div>
                        <h3>A lean and tight team <span></span></h3></div>
                    <div class="item">
                        <div><img src={require("../static/images/jobs/location-icon.svg")} /></div>
                        <h3>HQ in San Francisco <span>with a remote team around the world</span></h3></div>
                </div>
            </div>
        </div>
));

//storiesOf('Hero Sections', module)
//    .add('Hero (Medium)', () => (
//    <>hold</>
//    ))
//    .add('Hero (Primary)', () => (
//        <section class="hero-primary ">
//            <div class="container">
//                <article class="content">
//                    <h1>Build Modern JAMstack Websites in Minutes</h1>
//                    <h2>Combine any Theme, Site Generator and CMS without complicated integrations</h2><a href="#" class="btn-primary">JOIN THE BETA</a>
//                    <div class="mooseheads">
//                        <p>Works with</p><img src={require("../static/images/mooseheads.png")} /></div>
//                </article>
//                <div class="hero-img">
//                    <video autoplay="" loop="">
//                        <source src="https://assets.stackbit.com/videos/product-demo.mp4" type="video/mp4" />
//                    </video>
//                </div>
//            </div>
//        </section>
//    ));
