import React from 'react';
import './Pages.css';

function Filmes() {
  return (
    <div className='body'>
      <div className='content'>
        <div className='movie-details'>
          <h1 className='titulo fontTitle'>Homem Aranha Através do Aranhaverso</h1>
          <div className='info'>
            <span className='classificacao'>L</span>
            <span className='rating'>9.1 (15,563)</span>
            <span className='ano'>2023</span>
            <span className='duracao'>2h 20min</span>
            <span className='genero'>Ação/Comédia</span>
          </div>
          <div className='descricao'>
            Depois de se reunir com Gwen Stacy, Homem-Aranha é jogado no multiverso. Lá, o super-herói aracnídeo encontra uma numerosa equipe encarregada de proteger sua própria existência.
          </div>
          <div className='buttons'>
            <button className='trailer'>Assistir trailer</button>
            <button className='filme'>Assistir filme</button>
          </div>
        </div>
      </div>
      <div className='similar-titles'>
        <h2 className='subtitulo'>Títulos Semelhantes</h2>
        <div className='titles'>
          <div className='title'></div>
          <div className='title'></div>
          <div className='title'></div>
          <div className='title'></div>
          <div className='title'></div>
          <div className='title'></div>
          <div className='title'></div>
          <div className='title'></div>
          <div className='title'></div>
          <div className='title'></div>
          <div className='title'></div>
          <div className='title'></div>
        </div>
      </div>
    </div>
  );
}

export default Filmes;
