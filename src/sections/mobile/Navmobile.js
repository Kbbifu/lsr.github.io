import React, {useState} from 'react';
import { TiThMenu } from 'react-icons/ti';

function Navmobile() {
  const [active, setActive] = useState('dropDownMenuM');

  function Mobilehide(e) {
    e.preventDefault();
    if (active === 'dropDownMenuM') {
      setActive('mobileDeactive');
    } else {
      setActive('dropDownMenuM');
    }
  }
  return (
    <div>
      <div className='navmobile'>
        <div className='mobileNavlogo'>
          <a href='/' className='m-navlink'>
            <img src='/favicon.ico' alt='Logo of the website' />
          </a>
        </div>
        <div className='mobileTogggle'>
          <TiThMenu className='menuIcon'  onClick={(e) => Mobilehide(e)} />
          <div className={active}>
            <li>
              <a href='/' className='m-navlink'>
                Accueil
              </a>
            </li>
            <li>
              <a href='/waserock_93.9' className='m-navlink'>
                LSR FM 88.5 Mhz
              </a>
            </li>
            <li>
              <a href='/wase_rocktv' className='m-navlink'>
                LSR TV
              </a>
            </li>
            <li>
              <a href='/wase_podcast' className='m-navlink'>
                Podcast
              </a>
            </li>
            <li>
              <a href='#' className='m-navlink'>
                Contactez-nous
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navmobile