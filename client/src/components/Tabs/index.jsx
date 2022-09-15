import React, { useState } from 'react';
import Tab from '../Tab';
import Shelf from '../Shelf';
import Detail from '../Detail';

const tabList = [
	{
		title: 'films',
		text: 'Films',
		color: 'bg-films'
	}, {
		title: 'books',
		text: 'Books',
		color: 'bg-books'
	}, {
		title: 'podcasts',
		text: 'Podcasts',
		color: 'bg-podcasts'
	}
];

const Tabs = () => {
	const [activeTab, setActiveTab] = useState('films');
	const [detailId, setDetailId] = useState('');
	
	const clickHandler = event => {
		setActiveTab(event.currentTarget.dataset.title);
		setDetailId('');
	}
	
	const shelfClickHandler = event => {
		setDetailId(event.target.dataset.tmdb_id);
	}
	
	return (
		<>
			<div className="tabs is-boxed mb-0">
				<ul>
					{tabList.map(tab => (
						<Tab
							key={tab.title}
							activeTab={activeTab}
							clickHandler={clickHandler}
							title={tab.title}
							text={tab.text}
							color={tab.color}
						/>
					))}
				</ul>
			</div>
			{detailId ?
				<Detail
					activeTab={activeTab}
					detailId={detailId}
				/>
			:
				<Shelf 
					activeTab={activeTab}
					shelfClickHandler={shelfClickHandler}
				/>
			}
		</>
	);
};

export default Tabs;