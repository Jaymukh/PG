// External Libraries
import React, { useEffect,useState } from 'react';

// CSS
// import '../styles/main.css';

// Components
import { useRecoilValue } from 'recoil';
import * as Constants from '../utils/Constants';
import Header from '../components/Header';
import SideBar from '../components/ui/SideBar';
import { sidebarAnchorState } from '../states';
import TableView from '../components/ui/TableView';
import GridView from '../components/ui/GridView';
import EditUFMProfile from '../components/EditUFMProfile';
import ConfirmDelete from '../components/ConfirmDelete';
import UFMProfileNew from '../components/UFMProfileNew';

const UFM = () => {
	const sidebarAnchor = useRecoilValue(sidebarAnchorState);
    const [gridView, setGridView] = useState(false);
    const [selectedData, setSelectedData] = useState<Constants.UfmProfile | null>(null);
	const [UfmProfile, setUFMProfile] = useState(Constants.UFMProfile);
	const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
	const [selectedUserId, setSelectedUserId] = useState<string>('');
	const [openAddNew, setOpenAddNew] = useState(false);
	const [openInviteSent, setOpenInviteSent] = useState(false);

	const handleEditClick = (row: Constants.UfmProfile) => {
		setSelectedData(row);
	};
	const handleCloseDialog = () => {
		setSelectedData(null);
	};
	const handleUpdate = (updatedRow: Constants.UfmProfile) => {
		// Find the index of the updated tenant in the tenants array
		const index = UfmProfile.findIndex(UfmProfile => UfmProfile['Id'] === updatedRow['Id']);
		
		if (index !== -1) {
			// Create a copy of the tenants array
			const updatedGitAccounts = [...UfmProfile];
			
			// Update the tenant object at the found index
			updatedGitAccounts[index] = updatedRow;
	
			// Set the state with the updated array
			setUFMProfile(updatedGitAccounts);
		}	
		setSelectedData(null);
	};

	
	// searchbar function
	const [searchTerm, setSearchTerm] = useState('');
	var [suggestions, setSuggestions] = useState<Constants.GitAccount[]>([]);

	const handleInputChange = (value: string) => {
		setSearchTerm(value);
	};

	// useEffect(() => {
	// 	if (!searchTerm) {
	// 		setSuggestions([]);
	// 	} else {
	// 		const lowercasedValue = searchTerm.toLowerCase();
	// 		const result = UfmProfile?.filter((item: Constants.UfmProfile) => {
	// 			const lowercasedName = item['Name']?.toLowerCase();
	// 			const lowercasedId = item['Id']?.toLowerCase();
	// 			const lowercasedEnvironment = item['Environment']?.toLowerCase();
	// 			const lowercasedState = item['State']?.toLowerCase();
	// 			const lowercasedHostUrl = item['Host Url']?.toLowerCase();

	// 			return (
	// 				lowercasedName.includes(lowercasedValue) ||
	// 				lowercasedId.includes(lowercasedValue) ||
	// 				lowercasedEnvironment.includes(lowercasedValue) ||
	// 				lowercasedState.includes(lowercasedValue) ||
	// 				lowercasedHostUrl.includes(lowercasedValue) 
	// 			);
	// 		});

	// 		setSuggestions(result || []);
	// 	}
	// }, [searchTerm]);

	// Confirm Delete Model
	const handleDelete = (id: string) => {
		setShowConfirmDeleteModal(true);
		setSelectedUserId(id);	
	};

	const closeConfirmDeleteModal = () => {
		setShowConfirmDeleteModal(false);
	};

	// function for Delete
	const handleDeleteClick = () => {
		// setSpinner(true);
		// userService.deleteInvite(selectedUserId!)
		// 	.then((response: any) => {
		// 		if (response) {
		// 			userService.getAll();
		// 			setSpinner(false);
		// 			setShowConfirmDeleteModal(false);
		// 		}
		// 	})
		// 	.catch(error => {
		// 		setSpinner(false);
		// 		const errorMsg = error?.response?.data?.message ? error?.response?.data?.message : "Something went wrong. Please try again."
		// 		toast.error(errorMsg);
		// 	});
		// Filter out the tenant with the selected ID
		const updatedUfmProfile = UfmProfile.filter(UfmProfile => UfmProfile['Id'] !== selectedUserId);
		// set UFMProfile data with Updated data
		setUFMProfile(updatedUfmProfile);
		// Close the delete dialogue
		setShowConfirmDeleteModal(false);
	};
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
            <div style={{ width: Boolean(sidebarAnchor) ? '84vw' : '100vw' }} className=''>
                <Header />
                {
					gridView ?
						<GridView setGridView={setGridView} gridName='UFM Profiles' tData={UfmProfile} searchTerm={searchTerm} handleInputChange={handleInputChange} suggestions={suggestions} handleEditClick={handleEditClick}  handleDelete={handleDelete} handleAddNewDrawer={handleAddNew}/>
						: <TableView setGridView={setGridView} tableName='UFM Profiles' tData={UfmProfile} searchTerm={searchTerm} handleInputChange={handleInputChange} suggestions={suggestions} handleEditClick={handleEditClick}  handleDelete={handleDelete} handleAddNewDrawer={handleAddNew}/>						
				}
				{selectedData &&
				<EditUFMProfile selectedData={selectedData} handleCloseDialog={handleCloseDialog} handleUpdate={handleUpdate}/>}
				{showConfirmDeleteModal &&
				<ConfirmDelete showConfirmDeleteModal={showConfirmDeleteModal}
					closeConfirmDeleteModal={closeConfirmDeleteModal} handleDeleteClick={handleDeleteClick} />}
				{openAddNew &&
				<UFMProfileNew openInviteNew={openAddNew}  handleCloseInviteNew={handleCloseAddNew} setOpenInviteSent={setOpenInviteSent} />}
            </div>

        </div>
	);
};

export default UFM;