import React from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import noposter from "../img/noposter.jpg"


const AddFavourites = () => {
	return (
		<>
			<span className='mr-2'>Add to favourites </span>&nbsp;
			<FontAwesomeIcon icon={faHeart} style={{color:'red'}}/>
		</>
	);
};

export default AddFavourites;