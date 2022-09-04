import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <section>
      <div className='error-container'>
        <h1>oops! it's a dead end</h1>
        <Link to='/'>back home</Link>
      </div>
      <Footer />
    </section>
  );
}
