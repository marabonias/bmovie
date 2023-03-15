import {Link} from 'react-router-dom';
import noposter from "../img/noposter.jpg"

const MovieComponent = (props)=> {
 
    const FavouriteComponent = props.favourite;
    const {Title,Year,Poster} = props.movie;
        
    return(
        <div className='movie'>
                   <div className='image-container' >
                     <div className="card-wrap">
                        <div  onClick={()=>props.onMovieSelected(props.movie.imdbID)}>
                        <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${props.movie.imdbID}`} >
                           <img class="card-header one" src={Poster !== 'N/A' ? Poster : noposter} />          
                           <div className="card-content">
                              <h1 className="card-title">{Title}</h1>
                              <p className='card-text'>{Year}</p>
                           </div>
                       </Link>
                       </div>
                        <div 
                         onClick={() => props.handleFavouritesClick(props.movie)}
                         className='favourite_overlay'
                        > 
                         <FavouriteComponent/>
                        </div>
                     </div>
                  </div>
               </div>
    )
}
export default MovieComponent;