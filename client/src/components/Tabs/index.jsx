import 'bulma/css/bulma.min.css';
import React, { useState } from 'react';
import Tab from '../Tab';

const tabList = [
	{
		title: 'films',
		text: 'Films',
		color: 'rgb(234, 229, 217)'
	}, {
		title: 'books',
		text: 'Books',
		color: 'rgb(126, 175, 148)'
	}, {
		title: 'podcasts',
		text: 'Podcasts',
		color: 'rgb(115, 115, 115)'
	}
];

const Tabs = () => {
	const [activeTab, setActiveTab] = useState('films');
	
	const clickHandler = event => {
		setActiveTab(event.currentTarget.dataset.title);
	}
	
	return (
		<div className="tabs is-boxed">
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
	);
};

export default Tabs;