import React, { useState, useEffect } from 'react';
import { format_runtime } from '../../utils';

const contentRating = detailData => detailData.releases.countries.filter(c => c.iso_3166_1 === 'US' && c.certification)[0].certification;
const url = poster_path => `http://image.tmdb.org/t/p/w200${poster_path}`;


const Detail = ({ activeTab, detailItem }) => {
	
	const [detailData, setDetailData] = useState(undefined);
	const [videoData, setVideoData] = useState(undefined);
	
	useEffect(() => {
		const getData = async () => {
			// do a fetch
			const result = await fetch(`http://localhost:3001/api/media/${detailItem.id}`,
				{
					method: 'GET',
					mode: 'cors',
					headers: {'Content-Type': 'application/json'}
				}
			);
			const data = await result.json();

			// set the data
			setDetailData(data);
		};
		
		const getVideoData = async () => {
			// do a fetch
			const result = await fetch(`http://localhost:3001/api/media/videos/${detailItem.id}`,
				{
					method: 'GET',
					mode: 'cors',
					headers: {'Content-Type': 'application/json'}
				}
			);
			const data = await result.json();
			
			// set the data
			setVideoData(data);
		};
		
		getData();
		// worry about embedding trailers later
		// getVideoData();
	}, [detailItem]);
	
	const watchedButtonHandler = event => {
		console.log('You watched it');
	}
	
	console.log(detailData);
	console.log(videoData);
	
	if (!detailData)
		return (
			<div className={`full-height bg-${activeTab}`}></div>
		);
	
	return (
		<div className={`detail full-height bg-${activeTab}`}>
			<div className='movie-info'>
				<div className='poster-border'>
					<img 
						src={url(detailData.poster_path)} 
						className='poster'
					/>
				</div>
				<div className='movie-data'>
					<h1>{detailData.title}</h1>
					<h2>{detailData.release_date.split('-')[0]} | {contentRating(detailData)} | {format_runtime(detailData.runtime)}</h2>
					<p>{detailData.overview}</p>
				</div>
			</div>
			<div className='recommendation-info'>
				<button 
					className='button is-rounded is-green pt-0 mt-3 watched-button'
					onClick={watchedButtonHandler}
				>
					WATCHED
					<div className='weird-border'></div>
				</button>
				<h3 className='mt-3'>Recommended by</h3>
				<ul>
					{detailItem.recommendation.from.map((user, index) => (
						<li key={index}>{user}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Detail;