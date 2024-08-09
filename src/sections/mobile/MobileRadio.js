import React, { useState, useEffect } from 'react';
import Navmobile from './Navmobile'
import Mobilefooter from './Mobilefooter'
import Nav from '../Nav';
import SectionFive from '../SectionFive';

function MobileRadio() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <div className="dRadio">
        <Nav/>
        <div className="desktopRadioContent">
        <div className='radioDesktop'>
          <div className='desktopHider'>
            <div className='desktopHiderHolder'>
              <div className='d_radioEVT'>
              <h3 className='time' style={{color:'white'}}>{time.toLocaleTimeString()}</h3>
                <h4 style={{ display: 'flex', alignItems:'center', color:'white',padding: '10px', gap:'10px' }}>
                  <span
                    style={{
                      color: 'red',
                      borderRadius: '5px',
                    }}
                  >
                    On Air:
                  </span>
                  <span>Music</span>
                </h4>
                <h4 style={{ display: 'flex',alignItems:'center', justifyContent:'space-between', color:'white',padding: '10px', gap:'10px' }}>
                  <span
                    style={{
                      color: 'red',
                      borderRadius: '5px',
                    }}
                  >
                    Up Next:
                  </span>
                  <span> News</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="d_Radiobanner">
      
          <iframe
            src='https://zeno.fm/player/wase-rock-93-9-fm'
            width='100%'
            height='100%'
            frameborder='0'
            scrolling='no'
          ></iframe>

          </div>
        </div>
        </div>
        <SectionFive/>
      </div>

{/* Mobile view */}

      <div className="mobileradioHoler">
      <Navmobile />
      <div className='mobileradiofooterholder'>
        <div className='radiomobile'>
          <div className='mobileHider'>
            <div className='mobileHiderHolder'>
              <h3 className='time'>{time.toLocaleTimeString()}</h3>
              <div className='radioEVT'>
                <h4 style={{ display: 'flex', flexDirection: 'column' }}>
                  <span
                    style={{
                      color: 'red',
                      padding: '2px 3px',
                      backgroundColor: 'white',
                      borderRadius: '5px',
                      marginBottom: '5px',
                    }}
                  >
                    On Air:
                  </span>
                  <span>Music</span>
                </h4>
                <h4 style={{ display: 'flex', flexDirection: 'column' }}>
                  <span
                    style={{
                      color: 'red',
                      padding: '2px 3px',
                      backgroundColor: 'white',
                      borderRadius: '5px',
                      marginBottom: '5px',
                    }}
                  >
                    Up Next:
                  </span>
                  <span> News</span>
                </h4>
              </div>
            </div>
          </div>

          <iframe
            src='https://zeno.fm/player/wase-rock-93-9-fm'
            width='100%'
            height='100%'
            frameborder='0'
            scrolling='no'
          ></iframe>
        </div>
      </div>
      <Mobilefooter />
      </div>
    </div>
  );
}

export default MobileRadio