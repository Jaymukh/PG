// External Libraries
import React, { useEffect } from 'react';

// CSS
// import '../styles/main.css';

// Components
import Header from '../components/Header';
import Tenants from '../components/Tenants'
import SideBar from '../components/SideBar';
import TenantsGrid from '../components/TenantsGrid';

const Administrator = () => {
	return (
		<div className='w-100 primary-bg fixed-header overflow-hidden'>
			<Header />
			<Tenants />			
			{/* <TenantsGrid /> */}
		</div>
	);
};

export default Administrator;