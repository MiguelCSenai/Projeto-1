import React, { useState, useEffect } from 'react';
import './Pages.css'; // Certifique-se de que o caminho está correto para o arquivo CSS
import axios from 'axios';

function Filmes() {
  
  const [filme1, setFilme1] = useState({
    titulo: "",
    sinopse: "",
    capa: "",
    trailer: "",
    fav: "",
    categoria: "",
    imagem1: "",
    imagem2: "",
  });

  const [filmes, setFilmes] = useState([]);






  useEffect(() => {
    function requests(){
    axios.get('http://143.198.156.185/api/home')
      .then(function (response) {
        const data = response.data[0];
        setFilme1({
          titulo: data.titulo,
          sinopse: data.sinopse,
          capa: data.url_thumbnail,
          trailer: data.url_video,
          fav: data.qtd_favoritos,
          categoria: data.categoria,
          imagem1: data.imagens[0].url,
          imagem2: data.imagens[1].url,
        });
        setFilmes(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });} requests();


  }, []);
 


  return (
    <div className='body'>
      <div className='content'>
        <div className='movie-details'>
          <h1 className='titulo fontTitle'>{filme1.titulo}</h1>
          <div className='info'>
            <span className='rating'>❤{filme1.fav}</span>
            <span className='genero'>{filme1.categoria}</span>
          </div>
          <div className='descricao'>
            {filme1.sinopse}
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
          <div className='title' ></div>
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
      <div className='titles'>


  {filmes.map((item) => {
    if (item.id === 1) {
      return <div className='title'><img src={item.url_thumbnail} /></div>;
    }
  })}





</div>

    </div>
  );
}

export default Filmes;
