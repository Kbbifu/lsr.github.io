import React from 'react';
import { FaFacebook } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';

function Mobilefooter() {
  return (
    <div>
      <div className='mobileFooter'>
        <div className='mobilefooterholder'>
          <div className='termMobile'>
            <li>
              <h5>Terms/Condition</h5>
            </li>
            <li>
              <h5>Contact</h5>
              <p className='contactIcons'>
                <li>
                <FaFacebook />
                </li>
                <li>
                <FaXTwitter />
                </li>
              </p>
            </li>
          </div>
          <div className='mobileaddress'>
            <li>
              <h5>Address</h5>
              <p> Wase, Plateau State, Nigeria</p>
            </li>
          </div>
        </div>
        <div className='Jomiah'>&copy; 2024 Created by kongo digital city</div>
      </div>
    </div>
  );
}

export default Mobilefooter