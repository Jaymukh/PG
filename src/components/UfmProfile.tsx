// External Libraries
import React, { useEffect, useState } from 'react';
import { Heading, TypographyColor, TypographyType, TypographyWeight } from './ui/typography/Heading';
import * as Constants from '../utils/Constants';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import { MdDeleteSweep, MdModeEdit } from 'react-icons/md';
import { Button, ButtonSize, ButtonTheme, ButtonVariant } from './ui/button/Button';
import { CiSearch } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import UFMProfileNew from '../components/UFMProfileNew';
import Search from './ui/search/Search';
import EditUFMProfile from '../components/EditUFMProfile';

// CSS
import '../styles/main.css';
interface rowData{
    'Id': string;
    'Environment': string;
    'Profile Name': string;
    'Primary Site': string;
    'Secondary Site': string;
    'Gitrepo': string;
    'Last git backupon': string;
}
// import UFMProfileNew from './UFMProfileNew';

// Components

const UfmProfile = () => {
    const [buttonState, setButtonState] = useState<[number, boolean]>([0, false]);
    const [UfmProfile, setUfmProfile] = useState(Constants.UFMProfile);
    const [openInviteNew, setOpenInviteNew] = useState(false);
    const [openInviteSent, setOpenInviteSent] = useState(false);
    const [selectedData, setSelectedData] = useState<rowData | null>(null);

    
    // function for sorting
    const handleSortTable = (item: Constants.TenantHeader, order: string, index: number) => {
        setButtonState([index, order === 'asc' ? true : false]);
        let sortedTable = Constants.UFMProfile.slice().sort((a: any, b: any) => {
            const actualKey = item.key + 'ActualValue';
            const hasActualValue = Constants.UFMProfile.some((obj: any) => obj.hasOwnProperty(actualKey));
            if (a[item.key] === null && b[item.key] === null) {
                return 0;
            } else if (a[item.key] === null) {
                return 1;
            } else if (b[item.key] === null) {
                return -1;
            } else if (typeof a[item.key] === 'string' && typeof b[item.key] === 'string') {
                if (hasActualValue) {
                    return order === 'desc' ? a[actualKey] - b[actualKey] : b[actualKey] - a[actualKey];
                }
                return order === 'desc' ? a[item.key].localeCompare(b[item.key]) : b[item.key].localeCompare(a[item.key]);
            } else if (typeof a[item.key] === 'number' && typeof b[item.key] === 'number') {
                if (hasActualValue) {
                    return order === 'desc' ? a[actualKey] - b[actualKey] : b[actualKey] - a[actualKey];
                }
                return order === 'desc' ? b[item.key] - a[item.key] : a[item.key] - b[item.key];
            } else {
                return 0;
            }
        });
        setUfmProfile([...sortedTable])
    }

    // invite new drawer
	const handleOpenInviteNew = () => {
		setOpenInviteNew(true);
	};
	const handleCloseInviteNew = () => {
		setOpenInviteNew(false);
	};

    const handleEditClick = (row: rowData) => {
		setSelectedData(row);
	};
	const handleCloseDialog = () => {
		setSelectedData(null);
	};
	
    return (
        <div className='col-lg-12 col-md-12 col-sm-12 col-12 z-index-0 px-0 d-flex flex-column justify-content-center align-items-center ' style={{ height: '91vh' }}>
            {/* <div className="row w-100 d-flex flex-row justify-content-between align-items-center px-2 m-auto" style={{ height: '10%' }}> */}
            <div className='row d-flex flex-row justify-content-between w-100 px-2 m-auto mt-3' style={{ height: '10%' }}>
                <Heading
                    title='UFM Profiles'
                    type={TypographyType.h2}
                    color={TypographyColor.primary}
                    weight={TypographyWeight.semiBold}
                    classname='col-2 mb-0 text-start mt-3 mx-2'
                />
                <div className='d-flex flex-row justify-content-end w-50 margin-right-2 mt-2'>
                    <div className='input-group mb-3 search-container  w-25  margin-right-3'>
                        <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
                        <span className="input-group-text" id="basic-addon2"><CiSearch /></span>
                    </div>
                    
					
                    {/* <button type="button" className="btn btn-primary rounded-circle w-10 h-75" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" ><IoMdAdd /></button> */}
                    <button type="button" className="btn btn-primary rounded-circle w-10 h-75" onClick={() => handleOpenInviteNew()} ><IoMdAdd /></button>
                </div>
            </div>
            {/* <hr className='my-0 w-100' /> */}
            <div className='d-flex flex-row justify-content-center align-items-center' style={{ height: '90%', width: '100%' }}>
                <div className="tenant-table-container">
                    <table>
                        <thead>
                            <tr>
                                {Constants.UFMProfileHeader.map((item, index) => (
                                    <th className='text-start'>
                                        <div className='d-flex flex-row align-items-center'>
                                            {/* <p className='padding-top-3 padding-right-2'>{item.value}</p> */}
                                            <Heading
                                                title={item.value}
                                                type={TypographyType.h4}
                                                color={TypographyColor.primary}
                                                weight={TypographyWeight.semiBold}
                                                classname='padding-right-2'
                                            />
                                            <div className='d-flex flex-column'>
                                                <BiSolidUpArrow name='desc' className="fs-9" color={`${(buttonState[0] === index) && !buttonState[1] ? '#003da5' : '#939393'}`} onClick={() => handleSortTable(item, 'desc', index)} />
                                                <BiSolidDownArrow name='asc' className="fs-9" color={`${(buttonState[0] === index) && buttonState[1] ? '#003da5' : '#939393'}`} onClick={() => handleSortTable(item, 'asc', index)} />
                                            </div>
                                        </div>
                                    </th>
                                ))}
                                <th className='text-center'>
                                    <Heading
                                        title='Action'
                                        type={TypographyType.h4}
                                        color={TypographyColor.primary}
                                        weight={TypographyWeight.semiBold}
                                    // classname='padding-right-2'
                                    />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {UfmProfile.map((row) => (
                                <tr
                                    key={row.Id}>
                                    <td>{row.Environment}</td>
                                    <td>{row['Profile Name']}</td>
                                    <td>{row['Primary Site']}</td>
                                    <td>{row['Secondary Site']}</td>
                                    <td>{row.Gitrepo}</td>
                                    <td>{row['Last git backupon']}</td>
                                    <td className='text-center' style={{ whiteSpace: 'nowrap' }}>
                                        <Button
                                            theme={ButtonTheme.muted}
                                            size={ButtonSize.default}
                                            variant={ButtonVariant.transparent}
                                        onClick={() => handleEditClick(row)}
                                        
                                        >
                                            <MdModeEdit className="fs-20"/>
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.warning}
                                            size={ButtonSize.default}
                                            variant={ButtonVariant.transparent}
                                        // onClick={() => openConfirmDeleteModal(true, row.user_id)}
                                        >
                                            <MdDeleteSweep className="fs-20" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            
            {openInviteNew &&
				<UFMProfileNew openInviteNew={openInviteNew}  handleCloseInviteNew={handleCloseInviteNew} setOpenInviteSent={setOpenInviteSent} />}
            {/* {selectedData &&
				<EditUFMProfile selectedData={selectedData} handleCloseDialog={handleCloseDialog} />} */}

        </div>
    );
};

export default UfmProfile;