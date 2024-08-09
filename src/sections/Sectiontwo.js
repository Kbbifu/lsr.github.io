import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '../App';
import { Link } from 'react-router-dom';
import { SiDropbox } from 'react-icons/si';
import { PiSpeakerSimpleHighFill } from 'react-icons/pi';

function Sectiontwo() {
  const category = useContext(DataContext)
  const [section, setSection] = useState([])
  const [visible, setVisible] = useState(4)

  useEffect(()=>{
    let feed = category.news;
    setSection(feed);
  }, [])

  const showmoreItem = () =>{
    setVisible((previousvalue) => previousvalue + 4);
  }

  return (
    <div>
      <div className='sectionTwoholder'>
        <h1 style={{ color: '#ee2625' }}>News</h1>
        <div className='desktopNewsGrid'>
          {section.slice(0, visible).map((data) => {
            return (
              <div>
                <Link to={`/news/${data.id}`} key={data.id} className='newlink'>
                  <div className='newscardD'>
                    <div className='ncdimg'>
                      {/* <img src={data.image} alt='' /> */}
                      {data.images.slice(0, 2).map((pic) => {
                        return <img src={pic.pic} alt='' />;
                      })}
                    </div>
                    <div className='ncdTitle'>{data.title}</div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className='viewmorebtn'>
          <button className='navlistenBtn' onClick={showmoreItem} >
            <span className='text'>Voir plus</span>
            <span className='navlistIcon'>
              <PiSpeakerSimpleHighFill style={{ color: '#ee2625' }} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sectiontwo