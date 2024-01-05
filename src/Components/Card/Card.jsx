
 
import styled from 'styled-components'
import styles from './Card.module.css'

//generar colores ramdon
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export const Card = ({pokemon}) => { 

   
  if(!pokemon || !pokemon.sprites || !pokemon.sprites.front_default){
    return <div></div>;
  }

  //'getstat' es una funcion que hace busquedas espesificas
  const getStat = (pokemon, statName) => {
    //toma el nombre de estadisticas que deseas buscar en el objeto correspondiente del arreglo 'stats'
    const foundStat = pokemon.stats.find(stat => stat.stat.name === statName);
    // si encuentra la estadistica debuelve 'base_stat' sino la encuentra debuelve 'N-A'
    return foundStat ? foundStat.base_stat : 'N/A';
};

return (  
    // resibe la propiedad types
  <Cards  types={pokemon.types}   className={styles.card}>
    <h2 className={styles.nombre}>{pokemon.name}</h2>
    <img  className={styles.imagen} src={pokemon.sprites.front_default} alt={pokemon.name} />
     <h5>{pokemon.type} </h5>
     <div className={styles.descripcion}>
           
            <table className={styles.table}>
                <tr className={styles.tr}> 
                    <td className={styles.td}>PS:</td>
                    <td className={styles.td}>{getStat(pokemon, 'hp')}</td>
                </tr>
                <tr> 
                    <td className={styles.td}>Ataque:</td>
                    <td className={styles.td}>{getStat(pokemon, 'attack')}</td>
                </tr>
                <tr> 
                    <td className={styles.td}>Defensa:</td>
                    <td className={styles.td}>{getStat(pokemon,  'defense')}</td>
                </tr>
                <tr> 
                    <td className={styles.td}>Velocidad:</td>
                    <td className={styles.td}>{getStat(pokemon,  'speed')}</td>
                </tr>
                <tr> 
                    <td className={styles.td}>Ataque especial:</td>
                    <td className={styles.td}>{getStat(pokemon,  'special-attack')}</td>
                </tr>
                <tr> 
                    <td className={styles.td}>Defensa especial:</td>
                    <td className={styles.td}>{getStat(pokemon,  'special-defense')}</td>
                </tr>
            </table>
             
     </div>
  </Cards>

)
}


const Cards = styled.div`
/* Estilos generales de la tarjeta */
//para cambiar el color de fondo 
background-color: ${(props) => {
        // mapea la propiedad resivida de cards para acceder al tipo de pokemon y cambiar el color
        const types = props.types.map(type => type.type.name.toLowerCase());
        if (types.includes('fire') && types.includes('water')) {
            return '#7d2181'; // Cambia por el color que desees para esta combinación
        } else if (types.includes('fire')) {
            return '#FF8C00'; // Ejemplo de color para tipo fuego
        } else if (types.includes('water')) {
            return '#6495ED'; // Ejemplo de color para tipo agua
        }else if (types.includes('electric')) {
            return ' #F8D030';  
        }else if (types.includes('grass')) {
            return '#78C850';  
        }else if (types.includes('ice')) {
            return '#98D8D8'; 
        }else if (types.includes('fighting')) {
            return '#C03028';  
        }else if (types.includes('poison')) {
            return '#A040A0';  
        }else if (types.includes('ground')) {
            return '#E0C068';  
        }else if (types.includes('flying')) {
            return '#A890F0';  
        }else if (types.includes('psychic')) {
            return '#F85888';  
        }else if (types.includes('bug')) {
            return '#A8B820';  
        }else if (types.includes('rock')) {
            return '#B8A038';  
        }else if (types.includes('ghos')) {
            return '#705898';  
        }else if (types.includes('dragon')) {
            return '#7038F8';  
        }else if (types.includes('dark')) {
            return '#705848';  
        }else if (types.includes('steel')) {
            return '#B8B8D0';  
        }else if (types.includes('fairy')) {
            return '#EE99AC';  
        }
        // Otros casos para diferentes combinaciones de tipos de Pokémon
        return getRandomColor(); // Color por defecto si no se encuentra coincidencia
    }};
`;