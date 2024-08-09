import React from 'react'

function SectionFour() {
  return (
    <div>
      <div className='sectionFourHolder'>
        <h1 style={{ color: '#ee2625' }}>Actualités</h1>
        <p>
          "Our services are top notch with up-to-date insite on the latest
          happenings within and outsie the country Nigeria"
        </p>

        <div className='sectionFourGrid'>
          <div className='sec4Card'>
            <div className='sec4img'>
              <img src='llimin.jpeg' alt='' />
            </div>
            <p className='sec4descp'>Llimin</p>
            <div className='sec4btn'>Lire plus</div>
          </div>
          <div className='sec4Card'>
            <div className='sec4img'>
              <img src='/dogarodakai.jpeg' alt='' />
            </div>
            <p className='sec4descp'>Dogarodakai</p>
            <div className='sec4btn'>Lire plus</div>
          </div>
          <div className='sec4Card'>
            <div className='sec4img'>
              <img src='/Kasuwarwuse.jpeg' alt='' />
            </div>
            <p className='sec4descp'>Kasuwarwuse</p>
            <div className='sec4btn'>Lire plus</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour