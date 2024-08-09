import React, { useContext, useEffect, useState } from 'react';
import { FaRadio } from 'react-icons/fa6';
import { PiTelevisionFill } from 'react-icons/pi';
import { GiNewspaper } from 'react-icons/gi';
import { BsWindowSidebar } from 'react-icons/bs';
import { MdCoPresent } from 'react-icons/md';
import { FaPodcast } from 'react-icons/fa6';
import { DataContext } from './App';
import { PiSpeakerSimpleHighFill } from 'react-icons/pi';

function Sectionthree() {
  const category = useContext(DataContext)
  const [section, setSection] = useState([])
  const [visible, setVisible] = useState(4)

  useEffect(()=>{
    let feed = category.programmes;
    setSection(feed);
  },[])

  const showMoreItem = () => {
    setVisible((prev) => prev + 4);
  }


  return (
    <div>
      <div className='sectionThreeHolder'>
        <div className='sectionthreeheader'>
          <h1 style={{ color: '#ee2625' }}>Emissions</h1>
          {/* <p>
            "Our services are top notch with up-to-date insite on the latest
            happenings within and outsie the cuntry Nigeria"
          </p> */}
        </div>
        <div className='desktopprogramGrid'>
          {section.slice(0, visible).map((data) => {
            return (
              <div>
                <div className='programmesCard'>
                  <div className='pcdimg'>
                    <img src={data.image} alt='' />
                  </div>
                  <div className='pcdtitle'>{data.title}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='viewmorebtn'>
          <button className='navlistenBtn' onClick={showMoreItem} >
            <span className='text'>Voir plus</span>
            <span className='navlistIcon'>
              <PiSpeakerSimpleHighFill style={{ color: '#ee2625' }} />
            </span>
          </button>
        </div>
        {/* <div className='sectionThreeGrid'>
          <div className='card'>
            <div className='cardIcon'>
              <FaRadio style={{ color: '#ee2625' }} />
            </div>
            <h3 className='cardTitle' style={{ color: '#2a166f' }}>
              Radio
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, exercitationem repudiandae commodi et asperiores
              consectetur consequuntur!
            </p>
          </div>
          <div className='card'>
            <div className='cardIcon'>
              <PiTelevisionFill style={{ color: '#ee2625' }} />
            </div>
            <h3 className='cardTitle' style={{ color: '#2a166f' }}>
              Television
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, exercitationem repudiandae commodi et asperiores
              consectetur consequuntur!
            </p>
          </div>
          <div className='card'>
            <div className='cardIcon'>
              <GiNewspaper style={{ color: '#ee2625' }} />
            </div>
            <h3 className='cardTitle' style={{ color: '#2a166f' }}>
              News
            </h3>
            <p>
              "Our services are top notch with up-to-date insite on the latest
              happenings within and outsie the country Nigeria"
            </p>
          </div>
          <div className='card'>
            <div className='cardIcon'>
              <BsWindowSidebar style={{ color: '#ee2625' }} />
            </div>
            <h3 className='cardTitle' style={{ color: '#2a166f' }}>
              Programs
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, exercitationem repudiandae commodi et asperiores
              consectetur consequuntur!
            </p>
          </div>
          <div className='card'>
            <div className='cardIcon'>
              <MdCoPresent style={{ color: '#ee2625' }} />
            </div>
            <h3 className='cardTitle' style={{ color: '#2a166f' }}>
              Presenters
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, exercitationem repudiandae commodi et asperiores
              consectetur consequuntur!
            </p>
          </div>
          <div className='card'>
            <div className='cardIcon'>
              <FaPodcast style={{ color: '#ee2625' }} />
            </div>
            <h3 className='cardTitle' style={{ color: '#2a166f' }}>
              Podcast
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, exercitationem repudiandae commodi et asperiores
              consectetur consequuntur!
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Sectionthree