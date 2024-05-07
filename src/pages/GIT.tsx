// External Libraries
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

// CSS
// import '../styles/main.css';

// Components
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { sidebarAnchorState } from '../states';
import GitAccounts from '../components/GitAccounts';
import * as Constants from '../utils/Constants';
import TableView from '../components/TableView';

const GIT = () => {
    const sidebarAnchor = useRecoilValue(sidebarAnchorState);
    const [gridView, setGridView] = useState(false);

    return (
        <div className='d-flex flex-row w-100 h-100 primary-bg fixed-header overflow-hidden'>
            <SideBar sidebarData={Constants.sidebarData} />
            <div style={{ width: Boolean(sidebarAnchor) ? '84vw' : '100vw' }} className=''>
                <Header />
                {/* <GitAccounts setGridView={setGridView} /> */}
                <TableView setGridView={setGridView} tableName='Git Accounts' tableHeader={Constants.tenantHeader} tData={Constants.tenants} />
            </div>

        </div>
    );
};

export default GIT;