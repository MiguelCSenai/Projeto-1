import React, { useState, useEffect } from 'react';
import './Pages.css';
import axios from 'axios';

function Livros() {
  
  const [exibir, setExibir] = useState(0);
  const [Livros, setLivros] = useState([]);

  useEffect(() => {
    function requests(){
    axios.get('http://143.198.156.185/api/livros')
      .then(function (response) {
        setLivros(response.data);
        console.log();

      })
      .catch(function (error) {
        console.log(error);
      });} requests();


  }, []);

  const obterInfoDolivro = (id) => {
    const livro = Livros.find(livro => livro.id === id);
    return livro ? { 
      titulo: livro.titulo,
      sinopse: livro.sinopse,
      qtd_favoritos: livro.qtd_favoritos,
      imagens: livro.imagens.map(imagem => imagem.url),
      categoria: livro.categoria,
      capa: livro.url_thumbnail,
    } : {};
  }

  const livroInfo = obterInfoDolivro(exibir);

  return (
    <div className='body'>
      <div className='content'>
        <div className='movie-details'>
          <div className="mainInfo"><h1 className='titulo fontTitle'>{livroInfo.titulo}</h1><img className='Capa' src={livroInfo.capa} alt=""/></div>
          <div className='info'>
            <span className='rating'>{livroInfo.qtd_favoritos}</span>
            <span className='genero'>{livroInfo.categoria}</span>
          </div>
          <div className='descricao'>
          {livroInfo.sinopse}
          </div>
          <div className='buttons'>
            <button className='trailer'>Mais Informações</button>
          </div>
        </div>
      </div>
      <div className='similar-titles'>
        <h2 className='subtitulo'>Livros</h2>
        <div className='titles'>
          {Livros.map((livro, index) => (
            <div className='title' key={index} onClick={() => setExibir(livro.id)}>
              <img src={livro.url_thumbnail} alt={livro.titulo} />
              
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}

export default Livros;