
import { useEffect, useState } from 'react';
import axios from 'axios';
import style from './PokeGrid.module.css'
 
import { Search } from './Search/Search';
import { Card } from './Card/Card';
import { Spinner } from './Icono/Spinner';

export const PokeGrid = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonData, setPokemonData] = useState([] /*null*/);
    const [error, setError] = useState(null);

    const [loading,setLoading] = useState(false);
  
    //para acceder ala api de pokemon
    const fetchPokemonData = async () => {
      try {
        setLoading(true)                                                      //para hacer las busquedas
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
        setPokemonData([response.data] /*response.data*/);
        setError(null);
        setLoading(false)
         
      } catch (err) {
        setError('Pokemon not found!');
        setPokemonData(/*[]*/ null);
        setLoading(false)
      }
    };

    
    useEffect(() => {
       
      fetchPokemonData()
       
    },[])
   
  
     
  
    return (
      <div className={style.container}>
         
        <h2 className={style.titulo}>pokemon Search</h2>

        <div>
          {/**componente para hacer busquedas */}
          <Search  
            setPokemonName={setPokemonName} 
            pokemonName={pokemonName}  
            fetchPokemonData={fetchPokemonData}
          />
           
        </div>
         
  
        {error && <p className={style.error}>{error}</p>}
        
        {/* pokemonData && (
          <div>
            <h2>{pokemonData.name}</h2>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
            <p>Height: {pokemonData.height}</p>
            <p>Weight: {pokemonData.weight}</p>
          </div>
        ) */}
        
        {loading ? ( 
           <Spinner />   
           
        ) : ( 
        <div  className={style.grilla}>  
        { Array.isArray(pokemonData) && ( 
           pokemonData.map((pokemon, index) =>( 
            pokemon.id !== 0 && 
           <Card  key={pokemon.name} pokemon={pokemon}/>
           )))
           }
        </div>
          )}

      </div>
    );
}
