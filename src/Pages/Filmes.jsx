import React, { useState, useEffect } from 'react';
import './Pages.css';
import axios from 'axios';

function Filmes() {
  
  const [exibir, setExibir] = useState(0);
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    function requests(){
    axios.get('http://143.198.156.185/api/filmes')
      .then(function (response) {
        setFilmes(response.data);
        console.log();

      })
      .catch(function (error) {
        console.log(error);
      });} requests();


  }, []);

  const obterInfoDoFilme = (id) => {
    const filme = filmes.find(filme => filme.id === id);
    return filme ? { 
      titulo: filme.titulo,
      sinopse: filme.sinopse,
      qtd_favoritos: filme.qtd_favoritos,
      imagens: filme.imagens.map(imagem => imagem.url),
      categoria: filme.categoria,
      capa: filme.url_thumbnail,
    } : {};
  }

  const filmeInfo = obterInfoDoFilme(exibir);

  return (
    <div className='body'>
      <div className="containerContent">

        <div className='content'>
          <div className='movie-details'>
            <div className="mainInfo"><h1 className='titulo fontTitle'>{filmeInfo.titulo}</h1><img className='Capa' src={filmeInfo.capa} alt=""/></div>
            <div className='info'>
              <span className='rating'>❤{filmeInfo.qtd_favoritos}</span>
              <span className='genero'>{filmeInfo.categoria}</span>
            </div>
            <div className='descricao'>
            {filmeInfo.sinopse}
            </div>
            <div className='buttons'>
              <button className='trailer'>Mais Informações</button>
            </div>
          </div>
        </div>


      </div>
      <div className='similar-titles'>
        <h2 className='subtitulo'>Filmes</h2>
        <div className='titles'>
          {filmes.map((filme, index) => (
            <div className='title' key={index} onClick={() => setExibir(filme.id)}>
              <img src={filme.url_thumbnail} alt={filme.titulo} />
              
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}

export default Filmes;
