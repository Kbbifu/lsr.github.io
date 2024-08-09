import React,{useState, useEffect, useContext} from 'react'
import { DataContext } from '../../App';
import { Link } from 'react-router-dom';

function Mobilesecthree() {
  const category = useContext(DataContext)
  const [section, setSection] = useState([])
  const [data,setData] = useState([]);
 const [visible, setVisible] = useState(4);

  useEffect(()=>{
    let feed = category.news;
      setSection(feed);
      console.log(feed);
  },[])
  const showMoreItem = () =>{
    setVisible((previousValue) => previousValue + 4);
  }
  return (
    <div>
      <div className='mobilesec3holder'>
        <h1 style={{ color: '#ee2625' }}>News</h1>

        <div className='section3grid'>
          {section.slice(0, visible).map((sec) => {
            return (
              <div>
                <Link to={`/news/${sec.id}`} key={sec.id} className='newlink'>
                  <div className='sec3card'>
                    <div className='sec3cardimg'>
                      {sec.images.slice(0, 2).map((pic) => {
                        return <img src={pic.pic} alt='' />;
                      })}
                    </div>
                    <div className='sec3carddescp'>{sec.title}</div>
                    <div className='sec3cardbtn'></div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className='viewmorebtn'>
          <button className='navlistenBtn' onClick={showMoreItem}>
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mobilesecthree