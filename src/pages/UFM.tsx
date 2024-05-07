// External Libraries
import React, { useEffect } from 'react';

// CSS
// import '../styles/main.css';

// Components
import Header from '../components/Header';
import Tenants from '../components/Tenants'
import SideBar from '../components/SideBar';
import UfmProfile from '../components/UfmProfile';

const UFM = () => {
	return (
		<div className='w-100 overflow-hidden'>
			<Header />
			<UfmProfile />
		</div>
	);
};

export default UFM;