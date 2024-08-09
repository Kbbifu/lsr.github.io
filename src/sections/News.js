import React from 'react'
import Nav from './Nav'
import Sectiontwo from './Sectiontwo'
import SectionFive from './SectionFive'

function News() {
  return (
    <div>
        <Nav/>
        <div className="newsContent">
            <div className="NewsGridPage">
                <Sectiontwo/>
            </div>
        </div>
        <SectionFive/>
    </div>
  )
}

export default News