import React, { useEffect, useState } from 'react';
import Work from '../Work/Work';

const Home = () => {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    fetch('https://ancient-shore-53831.herokuapp.com/works')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setWorks(data);
      })
  }, [])
  return (
    <div className='container pb-5'>
      <h2 className='text-center text-primary py-5'>Your lovable volunteer works are listed here:</h2>
      {/* <h3>No of works : {works.length}</h3> */}
      <div className="row g-5">
        {
          works.map(work => <Work key={work._id} work={work} />)
        }
      </div>

    </div>
  );
};

export default Home;