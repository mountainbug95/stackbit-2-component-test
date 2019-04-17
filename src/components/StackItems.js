
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';

import '../../static/assets/css/stack-items.scss';
import '../../static/assets/css/aos.css';



class ActionBlock extends Component {
  render() {
      return (
      <div className={this.props.className}>
          <div className="icon">
          <img src={this.props.icon} alt="icon"/>
          <svg className="icon-blob" viewBox="0 0 1000 1000">
              <path id="themes-path1" className="path path1" d="M937.324746741621 370.07834243759163 C 977.211972192552 495.338394871515 931.8026267999351 730.011724964299 841.6770254782225 823.7209457443493 751.5514241565099 917.4301665243995 524.6788654083055 965.146284301139 396.57113881134563 932.3336671178931 268.4634122143858 899.5210499346473 113.2604404436913 753.34867268687 73.0306658964638 626.8452426448745 32.800891349236316 500.3418126028789 66.97199038195195 265.76052211659726 155.1924915279807 173.3130868659197 243.41299267400944 80.86565161524211 471.9982969036962 39.366421878863626 602.3536727726363 72.16063114080895 732.7090486415764 104.95484040275426 897.4375212906899 244.81829000366827 937.324746741621 370.07834243759163z"></path>
              <path id="themes-path2" className="path path2" d="M371.03503172766557 19.610247653069017 C 462.5947632029215 -0.5287116778529111 574.6185579637772 33.50557401476872 665.3882457354648 68.5356203822757 756.1579335071524 103.56566674978268 861.0653028590415 153.61354283792974 915.6531583577909 229.7905258581109 970.2410138565402 305.96750887829205 1003.6375021881515 433.1930895449388 992.9153787279611 525.5975185033625 982.1932552677706 618.0019474617861 914.0111584111775 715.9887820860584 851.3204175966478 784.217099608653 788.629676782118 852.4454171312476 704.2682368354476 906.8281770366348 616.7709338407831 934.96742363893 529.2736308461185 963.1066702412252 409.1377836430216 984.3712432458778 326.3365996286607 953.0525792224241 243.53541561429978 921.7339151989704 165.92985685558594 826.454339486854 119.96382975461759 747.055439498208 73.99780265364925 667.656539509562 51.196099167965315 569.6068564789484 50.540437022850554 476.65917929054837 49.88477487773579 383.71150210214824 62.61409109979319 265.54419830738715 116.02985688392903 189.36937636780726 169.44562266806486 113.19455442822736 279.4753002524096 39.749206983990945 371.03503172766557 19.610247653069017z"></path>
              <g className="dot-container"></g>
          </svg>
          </div>
          <h2>{this.props.subtitle} <span className="accent">{this.props.title}</span></h2>
          <p>{this.props.description}</p>
          {this.props.buttonHref ? (
              <a href={this.props.buttonHref} className="btn-primary with-arrow">{this.props.buttonTitle} <img src={require("../../static/images/stack-items/right-arrow.svg")} className="svg"/></a>
          ) : null}
        </div>
      )
  }
}

ActionBlock.propTypes = {
  icon: PropTypes.string, 
  title: PropTypes.string, 
  subtitle: PropTypes.string, 
  buttonTitle: PropTypes.string,
  buttonHref: PropTypes.string,
};

class StackItems extends Component {

    componentDidMount() {
        AOS.init({
            duration: 500,
            easing: 'ease-out-sine'
        });
    }

    render() {
        const {
            themeLayer,
            genLayer,
            cmsLayer,
            deploymentLayer,
            ctaLayer
        } = this.props;

        return (
<div className="stack-items">
  <section className="primary-sections">
      <div className="grid">
          <div className="dashed-line"></div>
      </div>
      <article id="themes" className="container">
        <ActionBlock 
            className="content"
            icon={themeLayer.icon}
            subtitle={themeLayer.subtitle}
            title={themeLayer.title}
            description={themeLayer.description}
            buttonHref={themeLayer.buttonHref}
            buttonTitle={themeLayer.buttonTitle}
        />
        <div className="layer">
          <div className="animation" data-aos="move-layer-down" data-aos-anchor="#deployment .content" data-aos-offset="-80" data-aos-anchor-placement="top-center">
            <div className="animation" data-aos="move-layer-down" data-aos-anchor="#cms .content" data-aos-offset="-80" data-aos-anchor-placement="top-center">
              <div className="animation" data-aos="move-layer-down" data-aos-anchor="#generators .content" data-aos-offset="-80" data-aos-anchor-placement="top-center">
                <img data-aos="fade-down" data-aos-anchor="#themes .content" data-aos-offset="-80" data-aos-anchor-placement="top-center" src={require("../../static/images/stack-items/themes-layer.png")} height="170" width="378"/>
              </div>
            </div>
          </div>
        </div>
        <div id="themes-art" className="art">
          <img data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-anchor="#themes .content" data-aos-offset="-100" data-aos-delay="300" className="themes-art" src={require("../../static/images/stack-items/themes-art.png")} width="519" height="411"/>
          <img data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-anchor="#themes .content" data-aos-offset="-100" data-aos-delay="200" className="themes-bg3" src={require("../../static/images/stack-items/themes-bg3.svg")} width="222" height="292"/>
          <img data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-anchor="#themes .content" data-aos-offset="-100" data-aos-delay="100" className="themes-bg2" src={require("../../static/images/stack-items/themes-bg2.svg")} width="225" height="224"/>
          <img data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-anchor="#themes .content" data-aos-offset="-100" className="themes-bg1" src={require("../../static/images/stack-items/themes-bg1.png")} width="450" height="411"/>
        </div>
      </article>
      <article id="generators" className="container">
        <ActionBlock 
            className="content"
            icon={genLayer.icon}
            subtitle={genLayer.subtitle}
            title={genLayer.title}
            description={genLayer.description}
            buttonHref={genLayer.buttonHref}
            buttonTitle={genLayer.buttonTitle}
        />
        <div className="layer">
          <div className="animation" data-aos="move-layer-down" data-aos-anchor="#deployment .content" data-aos-offset="-100" data-aos-anchor-placement="top-center">
            <div className="animation" data-aos="move-layer-down" data-aos-anchor="#cms .content" data-aos-offset="-100" data-aos-anchor-placement="top-center">
              <img data-aos="fade-up" data-aos-anchor="#generators .content" data-aos-offset="-100" data-aos-anchor-placement="top-center" src={require("../../static/images/stack-items/gen-layer.png")} height="170" width="378"/>
            </div>
          </div>
        </div>
        <div id="gen-art" className="art">
          <img data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-anchor="#generators .content" data-aos-offset="-100" data-aos-delay="1000" className="gen-orb-next" src={require("../../static/images/stack-items/gen-orb-next.png")} width="88" height="88"/>
          <img data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-anchor="#generators .content" data-aos-offset="-100" data-aos-delay="900" className="gen-orb-vuepress" src={require("../../static/images/stack-items/gen-orb-vuepress.png")} width="115" height="115"/>
          <img data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-anchor="#generators .content" data-aos-offset="-100" data-aos-delay="800" className="gen-orb-hexo" src={require("../../static/images/stack-items/gen-orb-hexo.png")} width="83" height="83"/>
          <img data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-anchor="#generators .content" data-aos-offset="-100" data-aos-delay="700" className="gen-orb-jekyll" src={require("../../static/images/stack-items/gen-orb-jekyll.png")} width="96" height="96"/>
          <img data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-anchor="#generators .content" data-aos-offset="-100" data-aos-delay="600" className="gen-orb-gatsby" src={require("../../static/images/stack-items/gen-orb-gatsby.png")} width="96" height="96"/>
          <img data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-anchor="#generators .content" data-aos-offset="-100" data-aos-delay="500" className="gen-orb-hugo" src={require("../../static/images/stack-items/gen-orb-hugo.png")} width="107" height="107"/>
          <img data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-anchor="#generators .content" data-aos-offset="-100" data-aos-delay="400" className="gen-bg3" src={require("../../static/images/stack-items/gen-bg3.svg")} width="180" height="308"/>
          <img data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-anchor="#generators .content" data-aos-offset="-100" data-aos-delay="300" className="gen-bg2" src={require("../../static/images/stack-items/gen-bg2.svg")} width="283" height="297"/>
          <img data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-anchor="#generators .content" data-aos-offset="-100" data-aos-delay="200" className="gen-code2" src={require("../../static/images/stack-items/gen-code2.png")} width="327" height="120"/>
          <img data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-anchor="#generators .content" data-aos-offset="-100" data-aos-delay="100" className="gen-code1" src={require("../../static/images/stack-items/gen-code1.png")} width="301" height="166"/>
          <img data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-anchor="#generators .content" data-aos-offset="-100" className="gen-bg1" src={require("../../static/images/stack-items/gen-bg1.png")} width="419" height="344"/>
        </div>
      </article>
      <article id="cms" className="container">
          <ActionBlock 
              className="content"
              icon={cmsLayer.icon}
              subtitle={cmsLayer.subtitle}
              title={cmsLayer.title}
              description={cmsLayer.description}
              buttonHref={cmsLayer.buttonHref}
              buttonTitle={cmsLayer.buttonTitle}
          />
        <div className="layer">
          <div className="animation" data-aos="move-layer-down" data-aos-anchor="#deployment .content" data-aos-offset="-100" data-aos-anchor-placement="top-center">
            <img data-aos="fade-up" data-aos-anchor="#cms .content" data-aos-offset="-100" data-aos-anchor-placement="top-center" src={require("../../static/images/stack-items/cms-layer.png")} height="170" width="378"/>
          </div>
        </div>
        <div id="cms-art" className="art">
          <img data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-anchor="#cms .content" data-aos-offset="-100" data-aos-delay="600" className="cms-orb-type" src={require("../../static/images/stack-items/cms-orb-type.svg")} width="82" height="71"/>
          <img data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-anchor="#cms .content" data-aos-offset="-100" data-aos-delay="500" className="cms-orb-paint" src={require("../../static/images/stack-items/cms-orb-paint.svg")} width="144" height="114"/>
          <img data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-anchor="#cms .content" data-aos-offset="-100" data-aos-delay="400" className="cms-orb-img" src={require("../../static/images/stack-items/cms-orb-img.svg")} width="101" height="117"/>
          <img data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-anchor="#cms .content" data-aos-offset="-100" data-aos-delay="300" className="cms-laptop" src={require("../../static/images/stack-items/cms-laptop.png")} width="519" height="384"/>
          <img data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-anchor="#cms .content" data-aos-offset="-100" data-aos-delay="200" className="cms-bg3" src={require("../../static/images/stack-items/cms-bg3.svg")} width="409" height="275"/>
          <img data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-anchor="#cms .content" data-aos-offset="-100" data-aos-delay="100" className="cms-bg2" src={require("../../static/images/stack-items/cms-bg2.svg")} width="224" height="299"/>
          <img data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-anchor="#cms .content" data-aos-offset="-100" className="cms-bg1" src={require("../../static/images/stack-items/cms-bg1.png")} width="464" height="427"/>
        </div>
      </article>
      <article id="deployment" className="container">
          <ActionBlock 
              className="content"
              icon={deploymentLayer.icon}
              subtitle={deploymentLayer.subtitle}
              title={deploymentLayer.title}
              description={deploymentLayer.description}
              buttonHref={deploymentLayer.buttonHref}
              buttonTitle={deploymentLayer.buttonTitle}
          />
        <div className="layer">
          <img data-aos="fade-up" data-aos-anchor="#deployment .content" data-aos-offset="-100" data-aos-anchor-placement="top-center" src={require("../../static/images/stack-items/deployment-layer.png")} height="170" width="378"/>
        </div>
        <div id="deployment-art" className="art">
          <img data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-anchor="#deployment .content" data-aos-offset="-100" data-aos-delay="200" className="deployment-bg2" src={require("../../static/images/stack-items/deployment-bg2.svg")} width="64" height="82"/>
          <img data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-anchor="#deployment .content" data-aos-offset="-100" data-aos-delay="100" className="deployment-art" src={require("../../static/images/stack-items/deployment-art.png")} width="441" height="407"/>
          <img data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-anchor="#deployment .content" data-aos-offset="-100" className="deployment-bg1" src={require("../../static/images/stack-items/deployment-bg1.svg")} width="375" height="175"/>
        </div>
      </article>
    </section>
    <section id="bottom-cta" className="bottom-cta container">
        <article className="quote">
          <blockquote>
            {ctaLayer.quote}
            <cite>
              <img src={ctaLayer.image} width="40" height="40"/>
              {ctaLayer.name}<br/>
              <a href={ctaLayer.linkHref}>{ctaLayer.linkTitle}</a>
            </cite>
          </blockquote>
        </article>
        <article className="cta">
          <div className="layer">
            <img src={require("../../static/images/stack-items/cube.png")} width="254" height="252"/>
          </div>
          <h2><span className="accent">{ctaLayer.title}</span>{ctaLayer.subtitle}</h2>
          <a href={ctaLayer.buttonHref} className="btn-primary">{ctaLayer.buttonTitle}</a>
        </article>
    </section>
</div>
        );
    }
}

export default StackItems;