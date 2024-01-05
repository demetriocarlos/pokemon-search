

import { IoSearchSharp } from "react-icons/io5";
import style from './Search.module.css'

export const Search = ({setPokemonName, fetchPokemonData,pokemonName}) => {

  //datos del input
    const handleInputChange = (event) => {
        setPokemonName(event.target.value);
      };
    
      //se envia para hacer una peticion a la api
      const handleSubmit = (event) => {
        event.preventDefault();
        fetchPokemonData();
      }; 
  return (
    <div> 
        <form  className={style.search} onSubmit={handleSubmit}>
            <div className={style.searchBox}> 
            <input
              className={style.searchInput}
              type="text"
              placeholder="Enter Pokemon name"
              value={pokemonName}
              onChange={handleInputChange}
            />
            <button className={style.searchButton} type="submit"> <IoSearchSharp size={20}/></button>
            </div>
        </form>
    </div>
  )
}
