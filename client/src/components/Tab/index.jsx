// import 'bulma/css/bulma.min.css';

const Tab = ({ activeTab, clickHandler, title, text, color }) => {
	
	const className = (activeTab === title ? 'is-active ' : ' ')
		+ color;
	
	return (
		<li 
			className={className} 
			data-title={title}
			onClick={clickHandler}>
			<a>{text}</a>
		</li>
	);
};

export default Tab;