import React from 'react'
import { FaRadio } from 'react-icons/fa6';
import { PiTelevisionFill } from 'react-icons/pi';
import { GiNewspaper } from 'react-icons/gi';
import { BsWindowSidebar } from 'react-icons/bs';
import { MdCoPresent } from 'react-icons/md';
import { FaPodcast } from 'react-icons/fa6';

function Mobilesectwo() {
  return (
    <div>
      <div className='MobilesectwoHolder'>
        <h1 style={{ color: '#ee2625' }}>Programmes</h1>
        {/* <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          omnis, beatae vitae sapiente alias quam vero molestias tenetur unde.
          Voluptatibus!
        </p> */}
        {/* <div className='mobilesectwogrid'>
          <div className='mobilesectwocard'>
            <div className='mcardicon2'>
              <FaRadio style={{ color: '#ee2625' }} />
            </div>
            <h3 className='cardTitle' style={{ color: '#2a166f' }}>
              Radio
            </h3>
            2a166f
          </div>
          <div className='mobilesectwocard'>
            <div className='mcardicon2'>
              <PiTelevisionFill style={{ color: '#2a166f' }} />
            </div>
            <h3 className='cardTitle' style={{ color: '#2a166f' }}>
              Television
            </h3>
          </div>
          <div className='mobilesectwocard'>
            <div className='mcardicon2'>
              <GiNewspaper style={{ color: '#2a166f' }} />
            </div>
            <p>News</p>
          </div>
          <div className='mobilesectwocard'>
            <div className='mcardicon2'>
              <BsWindowSidebar style={{ color: '#2a166f' }} />
            </div>
            <p>Programs</p>
          </div>
          <div className='mobilesectwocard'>
            <div className='mcardicon2'>
              <MdCoPresent style={{ color: '#2a166f' }} />
            </div>
            <h3 className='cardTitle' style={{ color: '#2a166f' }}>
              Podcast
            </h3>
          </div>
          <div className='mobilesectwocard'>
            <div className='mcardicon2'>
              <FaPodcast style={{ color: '#ee2625' }} />
            </div>
            <p>Podcast</p>
          </div>
        </div> */}
        <div className='mobileSect2Stack'>
          <div className='stack2card'>
            <div className='stackimg'>
              <img src='sirinNoma.jpeg' alt='' />
            </div>
            <div className='stackTitle'>Sirin Noma</div>
          </div>
          <div className='stack2card'>
            <div className='stackimg'>
              <img src='/llimin.jpeg' alt='' />
            </div>
            <div className='stackTitle'>Ilimin Kasuwanci</div>
          </div>
          <div className='stack2card'>
            <div className='stackimg'>
              <img src='/dogarodakai.jpeg' alt='' />
            </div>
            <div className='stackTitle'>Dogaro da Kai</div>
          </div>
          <div className='stack2card'>
            <div className='stackimg'>
              <img src='/kasuwarwuse.jpeg' alt='' />
            </div>
            <div className='stackTitle'>Kasuwar Wase</div>
          </div>
          <div className='stack2card'>
            <div className='stackimg'>
              <img src='/siyasa.jpeg' alt='' />
            </div>
            <div className='stackTitle'>Siyasa ba Gaba ba</div>
          </div>
          <div className='stack2card'>
            <div className='stackimg'>
              <img src='/tattalin.jpeg' alt='' />
            </div>
            <div className='stackTitle'>Tattalin Arzikin Mu</div>
          </div>
          <div className='stack2card'>
            <div className='stackimg'>
              <img src='/kacici.jpeg' alt='' />
            </div>
            <div className='stackTitle'>Kacici Kacici</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobilesectwo