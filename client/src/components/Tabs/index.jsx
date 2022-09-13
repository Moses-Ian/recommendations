import React, { useState } from 'react';
import Tab from '../Tab';

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
	
	const clickHandler = event => {
		setActiveTab(event.currentTarget.dataset.title);
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
			<div className={`full-height bg-${activeTab}`}>
			</div>
		</>
	);
};

export default Tabs;