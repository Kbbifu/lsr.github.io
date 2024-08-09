import React from 'react'
import Navmobile from './Navmobile'
import Mobilefooter from './Mobilefooter'

function Mobilepodcast() {
  return (
    <div>
      <Navmobile/>
      <div className="podcastContainerMob">
      <div className="mpodHolder">
        <div className="mpodimg">
          <img src="favicon.ico" alt="" />
        </div>
        <h1>PODCAST</h1>
      </div>
      </div>
      <Mobilefooter/>
    </div>
  )
}

export default Mobilepodcast