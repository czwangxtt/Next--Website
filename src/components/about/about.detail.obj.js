import React, { Fragment } from 'react';
import './about.style.desktop.scss';
import './about.style.mobile.scss';
import { AboutTitle } from '../subcomponents/about_titlepage/titlepage.obj';
import { AboutCategory } from '../subcomponents/about_category/category.obj';
import data from '../../data/data.about.json';


export default class AboutBranchPage extends React.Component {
  render() {
    const { aboutBranch } = this.props.match.params;
    const info = data.chapter[aboutBranch];
    const errorQuote = "I'm afraid I can't do that Michael...";

    return info === null || info === undefined
      ? <div className="error"><p>{errorQuote}</p></div>
      : <AboutPage {...info} />
  }
}

  export function AboutPage(data) {
  
    const contactus = "Contact Us";
  
    return (
      <div className="about">

        <div className={`about__background about__background__${data.shortName}`}/>
        <div className={`about__icon about__icon__${data.shortName}`}/>

        <div className="about__textgrid">
          <div className="about__title"><p>{data.name}</p></div>
          <div className="about__description"><p>{data.description}</p></div>
          <div className="about__seehow"><p>See How</p></div>
          <div className="about__back"><p>Back</p></div>
        </div>
      </div>
    )
  }
