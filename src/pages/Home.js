import { useEffect, useState } from 'react';
import '../App.css';
import InputField from '../components/InputField';
import MovieList from '../components/MovieList';
import AddFavourites from '../components/AddFavourites.js';
import RemoveFavourites from '../components/RemoveFavourites.js';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import applogo from '../img/bmovie.svg'
import Pagination from "react-js-pagination";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';




function Home() {
  const [activePage, setActivePage] = useState(1); //pagination
  const [totalResult, setTotalResult] = useState(0);
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("man");
  const [favourites, setFavourites] = useState([]);
  const [year, setYear] = useState();
  const [type, setType] = useState('');


  const getMovie = async () => {  
    const url = `http://www.omdbapi.com/?s=${searchMovie}&y=${year}&type=${type}&apikey=65ab64d5&Page=${activePage}`
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    setTotalResult(responseJson.totalResults)
    if (responseJson.Search){
    setMovies(responseJson.Search);
    }
  }


  useEffect(() => {
    searchQuery();
    setActivePage(1);
  }, []);

  const searchQuery = () => {
    getMovie();
  }
 
  useEffect(() => {
    getMovie();
  }, [activePage,year,searchMovie,type]);

  useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('favourite-movies')
		);
		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

  const saveToLocalStorage = (items) =>{
    localStorage.setItem('favourite-movies', JSON.stringify(items));     //save to local storage
  }
  
  const AddFavouriteMovie = (movie) => {
      console.log(favourites)
      const checkFavourites = obj => obj.imdbID === movie.imdbID;
      if (favourites.some(checkFavourites)===false){                    // check if movie already exists in favourite list
      const newFavouriteList = [...favourites, movie];
		  setFavourites(newFavouriteList);
		  saveToLocalStorage(newFavouriteList);
    }
  }

	const RemoveFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

  const  handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  }

  return (
    <div>
        <div class="container2">
            <img src={applogo} style={{padding:'20px',marginTop:'50px'}}></img>
            <div class="search-box">
                <input type="text" 
                        onChange={(event)=> setSearchMovie(event.target.value)} class="search-input" placeholder="Search Movie..."/>

                <button class="search-button">
                  <FontAwesomeIcon icon={faMagnifyingGlass} style={{color:'whitesmoke'}}/>
                </button>
            </div>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '14ch', marginTop:'25px'},
                }}
                noValidate
                autoComplete="off"
                >
                <TextField id="outlined-basic" type="number" label="Year" variant="outlined" color="warning" onChange={(event)=> setYear(event.target.value)}/>
                <FormControl fullWidth sx={{color:'white'}}>
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="outlined-basic"
                      value={type}
                      label="Type"
                      onChange={(event)=> setType(event.target.value)}
                    >
                      <MenuItem value='movie'>Movie</MenuItem>
                      <MenuItem value='series'>Series</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>
        <div className='movie-list'>
          <section className='movies'> 
            <div className='container'>
          
              <div className="row"> 
                  <MovieList movies={movies} handleFavouritesClick={AddFavouriteMovie} favouriteComponent={AddFavourites} /> 
              </div>
            </div>
            <div className='container3'>
            <Pagination
              itemClass="page-item"
              linkClass="page-link"
              breakLabel="..."
              nextLabel="next >"
              previousLabel="< previous"
              activePage={activePage}
              itemsCountPerPage={10}
              totalItemsCount={totalResult}
              pageRangeDisplayed={3}
              onChange={handlePageChange}
            />
          </div>
          </section>
        </div>  
      
        {favourites != 0 &&
        <section className='favourites'>
          <div classname='container'> 
          <h1 style={{textAlign:'center'}}>Favourites</h1>
            <div className="row">  
              <MovieList movies={favourites} handleFavouritesClick={RemoveFavouriteMovie} favouriteComponent={RemoveFavourites} />  
            </div>
          </div>
        </section>
      }
    </div>
  );
}
export default Home;