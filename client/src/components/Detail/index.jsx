import React, { useState, useEffect } from 'react';
import { format_runtime } from '../../utils';

const contentRating = detailData => detailData.releases.countries.filter(c => c.iso_3166_1 === 'US' && c.certification)[0].certification;

const Detail = ({ activeTab, detailItem }) => {
	
	const [detailData, setDetailData] = useState(undefined);
	
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
		
		getData();
	}, [detailItem]);
	
	if (!detailData)
		return (
			<div className={`full-height bg-${activeTab}`}></div>
		);
	
	return (
		<div className={`full-height bg-${activeTab}`}>
			<p>{detailData.title}</p>
			<p>{detailData.release_date.split('-')[0]}</p>
			<p>{contentRating(detailData)}</p>
			<p>{format_runtime(detailData.runtime)}</p>
			<p>{detailData.overview}</p>
		</div>
	);
};

export default Detail;