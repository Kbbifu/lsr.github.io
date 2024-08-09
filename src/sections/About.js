import React from 'react'
import Navmobile from './mobile/Navmobile'
import Mobilefooter from './mobile/Mobilefooter'
import Nav from './Nav';
import SectionFive from './SectionFive';

function About() {
  return (
    <div>
      <div className='aboutDesktop'>
        <Nav />
        <div className='aboutHolder'>
          <h1 className='aboutHeader'>A propos de nous</h1>
          <p className='about-content'>
            <div className='govt'>
              <div className='govtholder'>
                <div className='govtImg'>
                  <img src='/govt.jpeg' alt='' />
                </div>
                <div className='govtChair'>
                  <img src='/honorable.jpeg' alt='' />
                </div>
              </div>
            </div>
            <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
              Wase Rock Broadcasting Service is a diversified broadcasting
              platform with holdings in Radio, Television among other
              businesses. . <br />
              It is made up of Wase Rock FM and Wase Rock TV with the following
              live channels: <br />
              <li>Informations</li>
              <li>Affaires en cours</li>
              <li>Jeunesse & Sports</li>
              <li>Divertissements</li>
              <li>Agriculture and Commerce</li> <br />
              <br />
              <h1 className='headersFont'>Our Vision</h1>
              Our vision is to serve our community with the most credible and
              trusted information for growth and development. <br />
              <h1 className='headersFont'>Our Mission</h1>
              Our mission is to use broadcasting as a tool for unity, peace,
              growth and development. <br />
              <h1 className='headersFont'>Our Core Values</h1>
              <li>Respect and value for local knowledge and innovations</li>
              <li>Value for the environment and ecosystems</li>
              <li>Professional, effective, and informed by relevant science</li>
              <li>Creative, flexible, and innovative</li>
              <li>Sensitive to gender</li>
              <li>Quality, equality, and ethics</li>
              <li>Passion. </li>
            </p>
          </p>{' '}
        </div>
        <SectionFive />
      </div>
      <div className='AboutMobile'>
        <Navmobile />
        <div className='aboutHolder'>
          <h1 className='m-abtheader'>A propos de nous</h1>
          <div className='imageDesrip'>
            <div className='imaged1'>
              <img src='/govt.jpeg' alt='' />
            </div>
            <div className='imaged2'>
              <img src='/honorable.jpeg' alt='' />
            </div>
          </div>
          <p className='about-content'>
            <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
              Wase Rock Broadcasting Service is a diversified broadcasting
              platform with holdings in Radio, Television among other
              businesses. . <br />
              <br />
              It is made up of Wase Rock FM and Wase Rock TV with the following
              live channels: <br />
              <br />
              <li>Informations</li>
              <li>Affaires en cours</li>
              <li>Jeunesse & Sports</li>
              <li>Divertissements</li>
              <li>Agriculture and Commerce</li> <br />
              <br />
              <h1 className='headersFont'>Our Vision</h1>
              Our vision is to serve our community with the most credible and
              trusted information for growth and development. <br />
              <h1 className='headersFont'>Our Mission</h1>
              Our mission is to use broadcasting as a tool for unity, peace,
              growth and development. <br />
              <h1 className='headersFont'>Our Core Values</h1>
              <ul>
                <li>Respect and value for local knowledge and innovations</li>
                <li>Value for the environment and ecosystems</li>
                <li>
                  Professional, effective, and informed by relevant science
                </li>
                <li>Creative, flexible, and innovative</li>
                <li>Sensitive to gender</li>
                <li>Quality, equality, and ethics</li>
                <li>Passion. </li>
              </ul>
            </p>
          </p>{' '}
        </div>
        <Mobilefooter />
      </div>
    </div>
  );
}

export default About