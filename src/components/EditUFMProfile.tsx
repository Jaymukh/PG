import React, { useState, useEffect } from 'react';
import Drawer from '../components/ui/Drawer';
import {Input} from '../components/ui/input/Input';
import Select, { SelectSize }from '../components/ui/select/Select';
import { Button, ButtonTheme, ButtonSize, ButtonVariant } from './ui/button/Button';
import * as Constants from '../utils/Constants';
interface rowData{
    'Id': string;
    'Environment': string;
    'Profile Name': string;
    'Primary Site': string;
    'Secondary Site': string;
    'Gitrepo': string;
    'Last git backupon': string;
}
interface UFMProfileNewProps{
    selectedData: rowData
    handleCloseDialog: () => void;
    handleUpdate: (updatedRow: any) => void;
}
const EditUFMProfile: React.FC<UFMProfileNewProps> = ({ selectedData, handleCloseDialog, handleUpdate }) => {
    const handleUpdateClick = () => {
            handleUpdate(selectedData);
            // setError({ type: 'Error', message: 'All fields are mendatory!' });
        
    };
    return (
    <div>
     <Drawer
                id='newufmprofile'
                title='Edit UFP Profile'
                isOpen={handleCloseDialog!= null}
                toggleFunction={handleCloseDialog}
            >
                <div className='d-flex justify-content-center flex-column px-3'>
                    <h6 className='mt-1 font-87-5 text-start'>Profile Name</h6>
                    <Input
                        type="text"
                        placeholder="Enter here profile name"
                        value={selectedData.Environment}
                        name='profile name'
                    />     
                    <h6 className='my-1 font-87-5 text-start'>Enviroment</h6>
                    <Select
                        options={Constants?.Environment}
                        value={selectedData.Environment}
                        labelKey='value'
                        valueKey='value'
                        name='role'
                        size={SelectSize.large}
                    />
                    <h6 className='mt-1 font-87-5 text-start'>Primary Site</h6>
                    <Select
                        options={Constants?.Primarysite}
                        value={selectedData['Primary Site']}
                        labelKey='value'
                        valueKey='value'
                        size={SelectSize.large}
                        name='company'
                        
                    />
                    <h6 className='mt-1 font-87-5 text-start'>Secondary Site</h6>
                    <Select
                        options={Constants?.Secondarysite}
                        value={selectedData['Secondary Site']}
                        labelKey='value'
                        valueKey='value'
                        size={SelectSize.large}
                        name='company_type'
                    />
                    <h6 className='mt-1 font-87-5 text-start'>Git</h6>
                    <Select
                        options={Constants?.Git}
                        value={selectedData.Gitrepo}
                        labelKey='value'
                        valueKey='value'
                        size={SelectSize.large}
                        name='company_type'
                    />
                    <h6 className='mt-1 font-87-5 text-start'>State</h6>
                    <Select
                        options={Constants?.State}
                        value=""
                        labelKey='value'
                        valueKey='value'
                        size={SelectSize.large}
                        name='company_type'
                    />
                    {/* <p className='my-3 Note d-flex justify-content-center align-items-center'>Note: Admins will be able to invite users to the platform</p> */}
                    <Button
                        theme={ButtonTheme.primary}
                        size={ButtonSize.large}
                        variant={ButtonVariant.bordered}
                        onClick={() => handleUpdateClick()}
                        classname='mt-4 mb-3'
                        
                    >
                        Update
                    </Button>
                    
                </div>
            </Drawer>
    </div>
  )
}

export default EditUFMProfile;