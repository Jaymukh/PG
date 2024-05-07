// External Libraries
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

// CSS
// import '../styles/main.css';

// Components
import Header from '../components/Header';
import Tenants from '../components/Tenants'
import SideBar from '../components/SideBar';
import TenantsGrid from '../components/TenantsGrid';
import { sidebarAnchorState } from '../states';

const Administrator = () => {
	const sidebarAnchor = useRecoilValue(sidebarAnchorState);
	const [gridView, setGridView] = useState(false);

	return (
		<div className='d-flex flex-row w-100 h-100 primary-bg fixed-header overflow-hidden'>
			<SideBar />
			<div style={{ width: Boolean(sidebarAnchor) ? '84vw' : '100vw' }} className=''>
				<Header />
				{
					gridView ?
						<TenantsGrid setGridView={setGridView} />
						: <Tenants setGridView={setGridView} />
				}
			</div>

		</div>
	);
};

export default Administrator;