import React, { useState, useEffect } from 'react';
import Recommendation from '../Recommendation';
import Auth from '../../utils/auth';

const Shelf = ({ activeTab }) => {

	const [recommendations, setRecommendations] = useState([]);
	const type = activeTab.slice(0, -1);
	
	useEffect(() => {
		const getData = async () => {
			// use the jwt token
			const token = Auth.getToken();
			if (!token)
				return;
			const _id = Auth.decodeToken(token).data._id;
			
			// do a fetch
			console.log('fetch');
			const result = await fetch(`http://localhost:3001/api/recommendation/received/${_id}`, 
				{
					method: 'GET',
					mode: 'cors',
					headers: { 
						'Content-Type': 'applications/json',
						'Authorization': `Bearer ${token}`
					},
				}
			);
			const data = await result.json();
			
			// set recommendations based on that fetch
			setRecommendations(data);
		};
		
		getData();
	}, []);
	
	console.log(recommendations);
	console.log(recommendations.filter(item => item.type === type));
	
	return (
		<div className={`full-height bg-${activeTab} is-flex is-flex-wrap-wrap is-justify-content-space-around p-4`}>
			{recommendations.filter(item => item.type === type).map((item, index) => (
				<Recommendation
					key={index}
					item={item}
				/>
			))}
		</div>
	);
};

export default Shelf;