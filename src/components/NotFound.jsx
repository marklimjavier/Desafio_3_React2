import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const Regreso = useNavigate()
  const Lobby = () => {
    Regreso('/')
  }
  return (
    <article>
 <button onClick={Lobby}><img src="https://cdn.dribbble.com/users/4040675/screenshots/10545158/media/85a3329e4202059593616d3b42f16e8d.png?resize=768x576&vertical=center" alt="Pokeperdido" /></button>
    
    </article>
   
  )
}

export default NotFound