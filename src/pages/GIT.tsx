// External Libraries
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

// CSS
// import '../styles/main.css';

// Components
import Header from '../components/Header';
import SideBar from '../components/ui/SideBar';
import { sidebarAnchorState } from '../states';
import * as Constants from '../utils/Constants';
import TableView from '../components/ui/TableView';
import CheckConnection from '../components/ui/CheckConnection';
import GridView from '../components/ui/GridView';
import EditTenants from '../components/EditTenants';
import EditGit from '../components/EditGit';

const GIT = () => {
    const sidebarAnchor = useRecoilValue(sidebarAnchorState);
    const [gridView, setGridView] = useState(false);

    const [selectedData, setSelectedData] = useState<Constants.GitAccount | null>(null);
	const [gitAccounts, setGitAccounts] = useState(Constants.gitAccounts);
	const [openAddNew, setOpenAddNew] = useState(false);
	const [openCheckConnection, setOpenCheckConnection] = useState(false);
	const [checkConnectionColor, setcheckConnectionColor] = useState(false);
	const handleEditClick = (row: Constants.GitAccount) => {
		setSelectedData(row);
	};
	const handleCloseDialog = () => {
		setSelectedData(null);
	};
	const handleUpdate = (updatedRow: Constants.GitAccount) => {
		// Find the index of the updated tenant in the tenants array
		const index = gitAccounts.findIndex(gitAccount => gitAccount['Id'] === updatedRow['Id']);
		
		if (index !== -1) {
			// Create a copy of the tenants array
			const updatedGitAccounts = [...gitAccounts];
			
			// Update the tenant object at the found index
			updatedGitAccounts[index] = updatedRow;
	
			// Set the state with the updated array
			setGitAccounts(updatedGitAccounts);
		}	
		setSelectedData(null);
	};

	const handleDelete = (id: string) => {
		// Filter out the tenant with the provided ID
		const updatedGitAccounts = gitAccounts.filter(gitAccount => gitAccount['Id'] !== id);
		
		// Update the tenants state with the filtered array
		setGitAccounts(updatedGitAccounts);
	};

	// searchbar function
	const [searchTerm, setSearchTerm] = useState('');
	var [suggestions, setSuggestions] = useState<Constants.GitAccount[]>([]);

	const handleInputChange = (value: string) => {
		setSearchTerm(value);
	};

	useEffect(() => {
		if (!searchTerm) {
			setSuggestions([]);
		} else {
			const lowercasedValue = searchTerm.toLowerCase();
			const result = gitAccounts?.filter((item: Constants.GitAccount) => {
				const lowercasedName = item['Name']?.toLowerCase();
				const lowercasedId = item['Id']?.toLowerCase();
				const lowercasedEnvironment = item['Environment']?.toLowerCase();
				const lowercasedState = item['State']?.toLowerCase();
				const lowercasedHostUrl = item['Host Url']?.toLowerCase();

				return (
					lowercasedName.includes(lowercasedValue) ||
					lowercasedId.includes(lowercasedValue) ||
					lowercasedEnvironment.includes(lowercasedValue) ||
					lowercasedState.includes(lowercasedValue) ||
					lowercasedHostUrl.includes(lowercasedValue) 
				);
			});

			setSuggestions(result || []);
		}
	}, [searchTerm]);

	 // Add new drawer
	 const handleAddNew = () => {
		setOpenAddNew(true);
	};
	const handleCloseAddNew = () => {
		setOpenAddNew(false);
	};

	//Check Connection
	const handleCheckConnection = () =>{
		setOpenCheckConnection(true);
		
	}

	const closeCheckConnectionModal = () =>{
		setOpenCheckConnection(false);
		setcheckConnectionColor(true);

	}

    return (
        <div className='d-flex flex-row w-100 h-100 primary-bg fixed-header overflow-hidden'>
            <SideBar sidebarData={Constants.sidebarData} />
            <div style={{ width: Boolean(sidebarAnchor) ? '84vw' : '100vw' }} className=''>
                <Header />
                {
					gridView ?
						<GridView setGridView={setGridView} gridName='Git Accounts' tData={gitAccounts} searchTerm={searchTerm} handleInputChange={handleInputChange} suggestions={suggestions} handleEditClick={handleEditClick}  handleDelete={handleDelete} handleAddNew={handleAddNew} handleCheckConnection={handleCheckConnection} checkConnectionColor={checkConnectionColor}/>
						: <TableView setGridView={setGridView} tableName='Git Accounts' tData={gitAccounts} searchTerm={searchTerm} handleInputChange={handleInputChange} suggestions={suggestions} handleEditClick={handleEditClick}  handleDelete={handleDelete} handleAddNew={handleAddNew}/>						
				}
				{openCheckConnection && 
					<CheckConnection openCheckConnection={openCheckConnection} closeCheckConnectionModal={closeCheckConnectionModal} handleCheckConnection={handleCheckConnection}/>}
                {selectedData &&
				<EditGit selectedData={selectedData} handleCloseDialog={handleCloseDialog} handleUpdate={handleUpdate} />}
            </div>

        </div>
    );
};

export default GIT;