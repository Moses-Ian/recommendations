import React, { useEffect, useState } from 'react';

const url = poster_path => `http://image.tmdb.org/t/p/w200${poster_path}`;

const Recommendation = ({ item }) => {
	
	if (item.type !== 'film' || !item.poster_path)
		return '';
	
	return (
		<div>
			<img 
				src={url(item.poster_path)} 
				className='recommendation m-1'
			/>
		</div>
	);
};

export default Recommendation;