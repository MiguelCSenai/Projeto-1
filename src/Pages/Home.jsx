import React from 'react';
import './Home.css';
import Perfil from '../Images/perfil.png';

const profiles = [
  { name: 'MÃE', image: Perfil},
  { name: 'PAI', image: Perfil},
  { name: 'João', image: Perfil},
  { name: 'Kids', image: Perfil},
];

function Home() {

    function Perfil(){

        setTimeout(() => {
            window.location.href = '/filmes';
        }, 1000);

    }

  return (
    <div className="profile-selection">
      <h1>Quem está assistindo?</h1>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="profile"
          >
            <img src={profile.image} alt={profile.name}  onClick={Perfil}/>
            <span>{profile.name}</span>
          </div>
        ))}
        <div className="profile add-profile">
          <div className="add-icon">+</div>
          <span>Adicionar perfil</span>
        </div>
      </div>
    </div>
  );
};

export default Home;