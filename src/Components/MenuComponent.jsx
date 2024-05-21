import React from 'react';
import './Components.css';

function Menu() {
  return (
    <div className='header'>
      <div className='logo'>Movie Cave</div>
      <nav>
        <a href='/'>Home</a>
        <a href='/filmes'>Filmes</a>
        <a href='/livros'>Livros</a>
      </nav>
      <div className='auth-buttons'>
        <button className='login'>Login</button>
        <button>Sign-in</button>
      </div>
    </div>
  );
}

export default Menu;
