import React, {useState} from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri';
import { PiSpeakerSimpleHighFill } from 'react-icons/pi';

function Nav() {
const [active, setActive] = useState('active')

function hide(e){
  e.preventDefault()
  if(active === 'active'){
    setActive('dropItems');
  }else{
    setActive('active')
  }
}



  return (
    <div>
      <div className='navContainer'>
        <div className='navLogo'>
          <a href="/">
          <img src='/favicon.ico' alt='site logo' />
          </a>
        </div>
        <div className='navCategories'>
          <li>
            <a href='/' className='navlink'>
              Accueil
            </a>
          </li>
          <li>
            <a href='/about' className='navlink'>
              A propos de nous
            </a>
          </li>
          <li className='service' onClick={(e) => hide(e)}>
            <div className='text'>Nos Services</div>
            <div className='dropd'>
              <RiArrowDropDownLine size={'1.5rem'} />
            </div>
          </li>
          <div className={active}>
            <li>
            <a href='/news' className='navlink'>
              Informations
            </a>
            </li>
            <li>
            <a href='/programes' className='navlink'>
              Programmes
            </a>
            </li>
            {/* <li>Presentateurs</li> */}
          </div>
        </div>
        <div className='navListener'>
          <button className='navlistenBtn'>
            <span className='text'>Ecouter en Live</span>
            <span className='navlistIcon'>
              <PiSpeakerSimpleHighFill style={{ color: '#ee2625' }} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav