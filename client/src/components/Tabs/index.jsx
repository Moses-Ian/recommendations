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
	const [detailItem, setDetailItem] = useState('');
	
	const clickHandler = event => {
		setActiveTab(event.currentTarget.dataset.title);
		setDetailItem('');
	}
	
	const shelfClickHandler = event => {
		setDetailItem(event.target.dataset.tmdb_id);
	}
	
	console.log(detailItem);
	
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
			{detailItem ?
				<Detail
					activeTab={activeTab}
					detailItem={detailItem}
				/>
			:
				<Shelf 
					activeTab={activeTab}
					setDetailItem={setDetailItem}
				/>
			}
		</>
	);
};

export default Tabs;