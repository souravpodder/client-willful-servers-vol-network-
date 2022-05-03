import React from 'react';
import './SingleRegister.css';

const SingleRegister = ({ registeredWork, handleDeleteRegisteredWork }) => {
  const { workName } = registeredWork;
  // console.log(registeredWork)

  return (
    <div className='d-flex col-md-6'>
      <div className='me-3'>
        <img className='image' src="https://i.ibb.co/191Vjw1/river-Clean.png" alt="" />
      </div>
      <div className='d-flex flex-column justify-content-center'>
        <h3>{workName}</h3>
        <button onClick={() => handleDeleteRegisteredWork(registeredWork._id)}>Cancel</button>
      </div>
    </div>
  );
};

export default SingleRegister;