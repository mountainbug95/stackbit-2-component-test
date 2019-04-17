
import React, { Component } from 'react';

import '../../static/assets/css/cta.scss';


class CTA extends Component {
    render() {
        return(
            <section class="bottom-cta">
                <div class="container">
                    <article class="cta">
                        <div class="layer">
                            <img src="https://d33wubrfki0l68.cloudfront.net/a12c12731159d74e21af4709f650e6f5abfb3dd5/3c66d/img/full-cube.png" width="254" height="252" srcset="https://d33wubrfki0l68.cloudfront.net/a12c12731159d74e21af4709f650e6f5abfb3dd5/3c66d/img/full-cube.png 1x, https://d33wubrfki0l68.cloudfront.net/d3a97f4a4ace15b2152c8ab64a0f290cf5aed265/12449/img/full-cube@2x.png 2x, https://d33wubrfki0l68.cloudfront.net/b0bc8ac68007b073c0f1f53ee23ee49f9881b6b8/ebac1/img/full-cube@3x.png 3x" />
                        </div>
                        <h2><span class="accent">Your Bit</span>stacked your way.</h2>
                        <a href="https://app.stackbit.com/wizard" class="btn-primary">Build your bit</a>
                    </article>
                </div>
            </section>
        );
    }
}

export default CTA;