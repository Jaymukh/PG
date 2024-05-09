// External Libraries
import React, { useEffect } from 'react';

// CSS
// import '../styles/main.css';

// Components
import Header from '../components/Header';
import SideBar from '../components/ui/SideBar';
import UfmProfile from '../components/UfmProfile';
import { useRecoilValue } from 'recoil';
import { sidebarAnchorState } from '../states';
import * as Constants from '../utils/Constants';

const UFM = () => {
	const sidebarAnchor = useRecoilValue(sidebarAnchorState);
	
	return (
		<div className='d-flex flex-row w-100 h-100 primary-bg fixed-header overflow-hidden'>
			<SideBar sidebarData={Constants.sidebarData} />
			<div style={{width: Boolean(sidebarAnchor) ? '84vw' : '100vw'}} className=''>
				<Header />
				<UfmProfile />
			</div>
		</div>
	);
};

export default UFM;