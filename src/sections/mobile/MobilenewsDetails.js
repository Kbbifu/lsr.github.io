import React, {useState, useEffect, useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import { DataContext } from '../../App';
import { BsDot } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import { BsTwitterX } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { SiFacebook } from 'react-icons/si';
import Navmobile from './Navmobile';
import Nav from '../Nav';
import SectionFive from '../SectionFive';


function MobilenewsDetails() {
    const category = useContext(DataContext);
  const { id } = useParams();
  let data = category.news;
  const imageStyle = {
    fontSize:'12px',
     width: '25px',
    height: '25px'
  }

  return (
    <div>
      <div className="NewsDetailsPage">
        <Nav/>
        <div className="newsDtails">
        <div className='NewsDetailsImg'></div>
        <div className='newDetailsContent'>
          {data.map((item) => {
            if (item.id == id) {
              return (
                <div key={item.id}>
                  <h1 className='d_headersFont'>{item.title}</h1>

                  <p className=' details-content-author'>
                    {item.author} <BsDot size={'1rem'} />{' '}
                    <span>{item.date}</span>
                  </p>
                  <div className='newdimagcontainer'>
                    <div className='d_dtailsBannerimage'>
                      {item.images.map((pic, index) => {
                        return (
                          <div className='d_nwsdcarddet'>
                            <div className='d_dbannerimg'>
                              <img src={pic.pic} key={index} alt='' />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {item.content.split('\n').map((paragraph, index) => (
                    <p
                      key={index}
                      className='d-banner-content'
                      style={{ fontSize: '18px', lineHeight: '1.5' }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              );
            }
          })}
        </div>
        <Link to={-1} style={{ textDecoration: 'none', textAlign: 'center' }}>
          <button className='d_sec3btn'>
            <span>Go back</span>
          </button>
        </Link>
        </div>
        <SectionFive/>
      </div>
      <div className="mobileNewsdetailsHolder">
      <Navmobile />
      <div className='mNewsDetails'>
        <div className='mNewsDetailsImg'></div>
        <div className='mnewDetailsContent'>
          {data.map((item) => {
            if (item.id == id) {
              return (
                <div key={item.id}>
                  <h3 className='m-headersFont'>{item.title}</h3>

                  <p className=' mdetails-content-author'>
                    {item.author} <BsDot size={'1rem'} />{' '}
                    <span>{item.date}</span>
                  </p>
                  <div className='newdimagcontainer'>
                    <div className='m-dtailsBannerimage'>
                      {item.images.map((pic, index) => {
                        return (
                          <div className='nwsdcarddet'>
                            <div className='mdbannerimg'>
                              <img src={pic.pic} key={index} alt='' />
                            </div>
                          </div>
                        );
                      })}
                      
                      {/* <div className='nwsdcarddet'>
                        <div className='mdbannerimg'>
                          <img src={item.image} alt='' />
                        </div>
                      </div> */}
                    </div>
                  </div>
                  {item.content.split('\n').map((paragraph, index) => (
                    <p
                      key={index}
                      className='m-banner-content'
                      style={{ fontSize: '18px', lineHeight: '1.5' }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              );
            }
          })}
        </div>
        <Link to={-1} style={{ textDecoration: 'none' }}>
          <button className='sec3btn'>
            <span style={{ width: '50px', height: '50px' }}>
              {/* <img src='/go_back_icon.png' alt='' style={imageStyle} /> */}
            </span>
            <span>Go back</span>
            <span style={{ width: '50px', height: '50px' }}>
              {/* <img src='/go_back_icon.png' alt='' style={imageStyle} /> */}
            </span>
          </button>
        </Link>
      </div>
      <div className='mobileFooter'>
        <div className='mobilefooterholdertv'>
          <div className='termMobiletv'>
            <li>
              <h5>Terms/Condition</h5>
            </li>
            <li>
              <h5>Contact</h5>
                <p className="mobile_fut_media">
                <li>
                  <a href='#' className='m-navlink'>
                    <SiFacebook size={'1.2rem'} style={{color:'white'}} />
                  </a>
                </li>
                <li>
                  <IoLogoWhatsapp size={'1.2rem'} />
                </li>
                <li>
                  <BsTwitterX size={'1.2rem'} />
                </li>
                <li>
                  <FaInstagramSquare size={'1.2rem'} />
                </li>
                <li>
                  <SiGmail size={'1.2rem'} />
                </li>
                </p>
            </li>
          </div>
          <div className='mobileaddress'>
            <li>
              <h5>Address</h5>
              <p>Plateau, Jos</p>
            </li>
          </div>
        </div>
        <div className='Jomiah'>&copy; 2023 Created by JomiahCreations</div>
      </div>
    </div>
      </div>
  );
}

export default MobilenewsDetails