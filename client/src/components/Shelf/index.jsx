import React, { useState, useEffect } from 'react';
import Auth from '../../utils/auth';

const Shelf = ({ activeTab }) => {

	const [recommendations, setRecommendations] = useState([]);
	
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
	
	return (
		<div className={`full-height bg-${activeTab} is-flex`}>
			{recommendations.map((item, index) => (
				<div key={index}>
					{item}
				</div>
			))}
		</div>
	);
};

export default Shelf;