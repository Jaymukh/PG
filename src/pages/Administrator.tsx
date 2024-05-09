// External Libraries
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

// CSS
// import '../styles/main.css';

// Components
import Header from '../components/Header';
import SideBar from '../components/ui/SideBar';
import GridView from '../components/GridView';
import { sidebarAnchorState } from '../states';
import * as Constants from '../utils/Constants';
import TableView from '../components/ui/TableView';
import EditTenants from '../components/EditTenants';

const Administrator = () => {
	const sidebarAnchor = useRecoilValue(sidebarAnchorState);
	const [gridView, setGridView] = useState(false);
	const [selectedData, setSelectedData] = useState<Constants.Tenant | null>(null);
	const [tenants, setTenants] = useState(Constants.tenants);
	const handleEditClick = (row: Constants.Tenant) => {
		setSelectedData(row);
	};
	const handleCloseDialog = () => {
		setSelectedData(null);
	};
	const handleUpdate = (updatedRow: Constants.Tenant) => {
		// Find the index of the updated tenant in the tenants array
		const index = tenants.findIndex(tenant => tenant['Id'] === updatedRow['Id']);
		
		if (index !== -1) {
			// Create a copy of the tenants array
			const updatedTenants = [...tenants];
			
			// Update the tenant object at the found index
			updatedTenants[index] = updatedRow;
	
			// Set the state with the updated array
			setTenants(updatedTenants);
		}	
		setSelectedData(null);
	};

	const handleDelete = (id: string) => {
		// Filter out the tenant with the provided ID
		const updatedTenants = tenants.filter(tenant => tenant['Id'] !== id);
		
		// Update the tenants state with the filtered array
		setTenants(updatedTenants);
	};

	// searchbar function
	const [searchTerm, setSearchTerm] = useState('');
	var [suggestions, setSuggestions] = useState<Constants.Tenant[]>([]);

	const handleInputChange = (value: string) => {
		setSearchTerm(value);
	};

	useEffect(() => {
		if (!searchTerm) {
			setSuggestions([]);
		} else {
			const lowercasedValue = searchTerm.toLowerCase();
			const result = tenants?.filter((item: Constants.Tenant) => {
				const lowercasedName = item['Name']?.toLowerCase();
				const lowercasedId = item['Id']?.toLowerCase();
				const lowercasedEnvironment = item['Environment']?.toLowerCase();
				const lowercasedState = item['State']?.toLowerCase();
				const lowercasedHostUrl = item['Host Url']?.toLowerCase();
				const lowercasedCreatedBy = item['Created By']?.toLowerCase();
				const lowercasedCreatedOn = item['Created On']?.toLowerCase();

				return (
					lowercasedName.includes(lowercasedValue) ||
					lowercasedId.includes(lowercasedValue) ||
					lowercasedEnvironment.includes(lowercasedValue) ||
					lowercasedState.includes(lowercasedValue) ||
					lowercasedHostUrl.includes(lowercasedValue) ||
					lowercasedCreatedBy.includes(lowercasedValue) ||
					lowercasedCreatedOn.includes(lowercasedValue)
				);
			});

			setSuggestions(result || []);
		}
	}, [searchTerm]);

	return (
		<div className='d-flex flex-row w-100 h-100 primary-bg fixed-header overflow-hidden'>
			<SideBar sidebarData={Constants.sidebarData} />
			<div style={{ width: Boolean(sidebarAnchor) ? '84vw' : '100vw' }} className=''>
				<Header />
				{
					gridView ?
						<GridView setGridView={setGridView} gridName='Tenants' tData={tenants} searchTerm={searchTerm} handleInputChange={handleInputChange} suggestions={suggestions} handleEditClick={handleEditClick}  handleDelete={handleDelete} />
						: <TableView setGridView={setGridView} tableName='Tenants' tData={tenants} searchTerm={searchTerm} handleInputChange={handleInputChange} suggestions={suggestions} handleEditClick={handleEditClick}  handleDelete={handleDelete} />						
				}
				{selectedData &&
				<EditTenants selectedData={selectedData} handleCloseDialog={handleCloseDialog} handleUpdate={handleUpdate} />}
			</div>

		</div>
	);
};

export default Administrator;