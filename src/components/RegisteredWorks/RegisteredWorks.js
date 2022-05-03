import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SingleRegister from '../SingleRegister/SingleRegister';

const RegisteredWorks = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [registeredWorks, setRegsteredWorks] = useState([]);
  useEffect(() => {
    const url = `https://ancient-shore-53831.herokuapp.com/registration?email=${email}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setRegsteredWorks(data)
      })

  }, [email])

  const handleDeleteRegisteredWork = (id) => {
    // console.log(id);
    const proceed = window.confirm('Are you sure that you want to cancel this work?');
    if (proceed) {
      fetch(`https://ancient-shore-53831.herokuapp.com/registration/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          const remainingRegisters = registeredWorks.filter(registeredWork => registeredWork._id !== id);
          setRegsteredWorks(remainingRegisters);
        })
    }
  }

  console.log(registeredWorks);

  return (
    <div className='container py-5'>

      <div className="row gy-5">
        {
          registeredWorks.map(registeredWork => <SingleRegister key={registeredWork._id} registeredWork={registeredWork} handleDeleteRegisteredWork={handleDeleteRegisteredWork} />)
        }
      </div>

    </div>
  );
};

export default RegisteredWorks;