import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

  if (loading || googleLoading) {
    return <p>Loading...</p>;
  }
  const handleEmailPassLogin = (e) => {
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(email, password);
  }

  if (user || googleUser) {
    console.log(user);
    navigate(from, { replace: true });
  }
  return (
    <div className='w-50 mx-auto'>
      <h3 className='text-center'>Please Login!!!</h3>
      <Form onSubmit={handleEmailPassLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Your Email" name="email" required />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" required />
        </Form.Group>

        <div className='w-25 mx-auto'>
          <Button className='w-100' variant="primary" type="submit">
            Login
          </Button>
        </div>
      </Form>

      <div className='d-flex mt-5 justify-content-center'>
        <div className='half-line'></div>
        <span style={{ marginTop: '-15px' }}>or</span>
        <div className='half-line'></div>
      </div>

      <div className='w-50 mx-auto'>
        <button className='googleBtn' onClick={() => signInWithGoogle()}>continue with google</button><br />
        <span>Don't have an account?</span><Link to="/signup"><span className='text-primary text-underline'>Create an account</span></Link>

      </div>

    </div>
  );
};

export default Login;