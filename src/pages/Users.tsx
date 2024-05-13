// External Libraries
import React, { useEffect, useState } from 'react';

// CSS
// import '../styles/main.css';

// Components
import Header from '../components/Header';
import SideBar from '../components/ui/SideBar';
import { useRecoilValue } from 'recoil';
import { sidebarAnchorState } from '../states';
import * as Constants from '../utils/Constants';
import TableView from '../components/ui/TableView';
import GridView from '../components/ui/GridView';

const Users = () => {
	const sidebarAnchor = useRecoilValue(sidebarAnchorState);
    const [gridView, setGridView] = useState(false);
	const [selectedData, setSelectedData] = useState<Constants.User | null>(null);
	const [users, setUsers] = useState(Constants.users);
	const [openAddNew, setOpenAddNew] = useState(false);
	const handleEditClick = (row: Constants.User) => {
		setSelectedData(row);
	};
	const handleCloseDialog = () => {
		setSelectedData(null);
	};
	const handleUpdate = (updatedRow: Constants.User) => {
		// Find the index of the updated tenant in the tenants array
		const index = users.findIndex(user => user['Id'] === updatedRow['Id']);
		
		if (index !== -1) {
			// Create a copy of the tenants array
			const updatedUsers = [...users];
			
			// Update the tenant object at the found index
			updatedUsers[index] = updatedRow;
	
			// Set the state with the updated array
			setUsers(updatedUsers);
		}	
		setSelectedData(null);
	};

	const handleDelete = (id: string) => {
		// Filter out the tenant with the provided ID
		const updatedUsers = users.filter(user => user['Id'] !== id);
		
		// Update the tenants state with the filtered array
		setUsers(updatedUsers);
	};

	// searchbar function
	const [searchTerm, setSearchTerm] = useState('');
	var [suggestions, setSuggestions] = useState<Constants.User[]>([]);

	const handleInputChange = (value: string) => {
		setSearchTerm(value);
	};

	useEffect(() => {
		if (!searchTerm) {
			setSuggestions([]);
		} else {
			const lowercasedValue = searchTerm.toLowerCase();
			const result = users?.filter((item: Constants.User) => {
				const lowercasedFirstName = item['First Name']?.toLowerCase();
				const lowercasedId = item['Id']?.toLowerCase();
				const lowercasedLastName = item['Last Name']?.toLowerCase();
				const lowercasedExternalId = item['External ID']?.toLowerCase();
				const lowercasedEmailId = item['Email ID']?.toLowerCase();

				return (
					lowercasedFirstName.includes(lowercasedValue) ||
					lowercasedId.includes(lowercasedValue) ||
					lowercasedLastName.includes(lowercasedValue) ||
					lowercasedExternalId.includes(lowercasedValue) ||
					lowercasedEmailId.includes(lowercasedValue) 
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
	
	return (
		<div className='d-flex flex-row w-100 h-100 primary-bg fixed-header overflow-hidden'>
			<SideBar sidebarData={Constants.sidebarData} />
			<div style={{width: Boolean(sidebarAnchor) ? '84vw' : '100vw'}} className=''>
				<Header />
				{
					gridView ?
						<GridView setGridView={setGridView} gridName='Users' tData={users} searchTerm={searchTerm} handleInputChange={handleInputChange} suggestions={suggestions} handleEditClick={handleEditClick}  handleDelete={handleDelete} handleAddNewDrawer={handleAddNew}/>
						: <TableView setGridView={setGridView} tableName='Users' tData={users} searchTerm={searchTerm} handleInputChange={handleInputChange} suggestions={suggestions} handleEditClick={handleEditClick}  handleDelete={handleDelete} handleAddNewDrawer={handleAddNew}/>						
				}
			</div>
		</div>
	);
};

export default Users;