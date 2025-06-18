import React from 'react'
import PeliculaCard from '../components/pelicula/PeliculaCard'
import peliculas from '../data/peliculas.json'

export default function Peliculas() {

  // Creo un array para almacenar generos. Luego obtengo los generos desde el JSON y evito que se repitan en el array
  const generos = [];
  peliculas.forEach(pelicula => {
    const generosPeliculas = pelicula.genero.split(',').map(g => g.trim()); // Divido los generos por coma y elimino espacios
    generosPeliculas.forEach(genero => {
      if (!generos.includes(genero)) { // Verifico si el genero ya esta en la lista
        generos.push(genero); // Si no esta, lo agrego a la lista de generos  
      }
    })
  });

  const [generoSeleccionado, setGeneroSeleccionado] = React.useState(''); // Estado para el genero seleccionado
  // Filtrado de peliculas por genero seleccionado
  const peliculasFiltradas = peliculas.filter(pelicula => {
    if (!generoSeleccionado) return true; // Si no hay genero seleccionado, mostrar todas las peliculas
    const generos = pelicula.genero.split(',').map(g => g.trim()); // Divido los generos por coma y elimino espacios
    return generos.includes(generoSeleccionado); // Verifico si el genero seleccionado esta en la lista de generos de la pelicula
  })

  return (
    // Creo un container para mostrar las peliculas
    <div className="container mx-auto px-4 py-8">
      <div className='flex justify-between items-center mb-6'>
        <h1 className="text-3xl font-bold mb-6">Películas</h1>
        {/* Utilizo un Select para filtrar por genero */}
        <select 
          value={generoSeleccionado} 
          onChange={(e) => setGeneroSeleccionado(e.target.value)} 
          className="mb-6 p-2 border rounded cursor-pointer focus:outline-none"
          style={{ display: 'block' }}
        >
          {/* Opciones de genero a listar */}
          <option value="">Todos</option>
          {generos.map((genero, idx) => (
            <option key={idx} value={genero}>{genero}</option>
          ))}
        </select>
      </div>
      {/* Utilizo GRID para ordenar las tarjetas de a dos por fila y se controla el colapso mediante BREAKPOINTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Utilizo MAP para agregar la informacion del JSON a cada CARD */}
        {peliculasFiltradas.map((pelicula, idx) => (
          // Utilizo el componente importado PELICULACARD y le asigno los datos desde el JSON
          <PeliculaCard
            key={idx}
            titulo={pelicula.titulo}
            imagenUrl={pelicula.imagen}
            // Limito la descripcion a 300 caracteres para mantener un diseño limpio
            descripcion={pelicula.descripcion.slice(0, 300)}
            año={pelicula.año}
          />
        ))}
      </div>
    </div>
  )
}
