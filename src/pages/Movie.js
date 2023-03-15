import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import noposter from '../img/noposter.jpg'
import logo from '../img/bmovie.svg'


const MoviePage = () => {
	const [MovieInfo, setMovieInfo] = useState([])
	const { id } = useParams();
	const url =`http://www.omdbapi.com/?i=${id}&apikey=65ab64d5`
	
	useEffect(() => {
		fetchMovie();
		console.log()
	  },[]);

	  const fetchMovie = async () => {  // get info of selected movie
		const data = await fetch(url);
		const info = await data.json();
		console.log(info);
		setMovieInfo(info)
	  };

	return (
		<>
		<div className='container4'>
			<img id='logo' src={logo} style={{alignItems:'center',width:'300px'}}></img>
          <div className="movie_card" id="bright">
				<div class="info_section">
					<div class="movie_header">
							<div className="card-content2">
								<img className ="locandina"src={MovieInfo?.Poster  !== 'N/A' ? MovieInfo?.Poster : noposter}/>
								<h1>{MovieInfo?.Title}</h1>
								<h4>{MovieInfo?.Year}, {MovieInfo?.Director}</h4>
								<p class="minutes">{MovieInfo?.Runtime}</p>
								<p class="type">{MovieInfo?.Genre}</p>
								<p class="type">IMDB: {MovieInfo?.imdbRating}</p>
							</div>
					</div>
					<div class="movie_desc">
						<p class="text">
						{MovieInfo.Plot}      
						</p>
					</div>
			 </div>    
          </div>
	   </div>
	
      
			
		</>
	);
};

export default MoviePage;