import React from 'react';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RemoveFavourites = () => {

    return(
        <>
			<span className='mr-2'>Remove from favourites </span>&nbsp;
			<FontAwesomeIcon icon={faRectangleXmark} />
		</>
    )
}
export default RemoveFavourites;