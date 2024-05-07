// External Libraries
import React, { useEffect } from 'react';

// CSS
// import '../styles/main.css';

// Components
import Header from '../components/Header';
import Tenants from '../components/Tenants'
import SideBar from '../components/SideBar';
import UfmProfile from '../components/UfmProfile';
import { useRecoilValue } from 'recoil';
import { sidebarAnchorState } from '../states';

const UFM = () => {
	const sidebarAnchor = useRecoilValue(sidebarAnchorState);
	
	return (
		<div className='d-flex flex-row w-100 h-100 primary-bg fixed-header overflow-hidden'>
			<SideBar />
			<div style={{width: Boolean(sidebarAnchor) ? '84vw' : '100vw'}} className=''>
				<Header />
				<UfmProfile />
			</div>
		</div>
	);
};

export default UFM;