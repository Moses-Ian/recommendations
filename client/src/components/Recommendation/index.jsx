import React, { useEffect, useState } from 'react';

const url = poster_path => `http://image.tmdb.org/t/p/w200${poster_path}`;

const Recommendation = ({ item, shelfClickHandler }) => {
	
	if (item.type !== 'film' || !item.poster_path)
		return '';
	
	return (
		<div className='recommendation m-1'>
			<img 
				src={url(item.poster_path)} 
				className='is-2by3'
				data-tmdb_id={item.tmdb_id}
				onClick={shelfClickHandler}
			/>
		</div>
	);
};

export default Recommendation;