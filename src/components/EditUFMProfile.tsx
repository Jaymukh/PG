import React, { useState, useEffect } from 'react';
import Drawer from '../components/ui/Drawer';
import {Input} from '../components/ui/input/Input';
import Select, { SelectSize }from '../components/ui/select/Select';
import { Button, ButtonTheme, ButtonSize, ButtonVariant } from './ui/button/Button';
import * as Constants from '../utils/Constants';
interface rowData{
    key: string;
    environment: string;
    profilename: string;
    primarysite: string;
    secondarysite: string;
    gitrepo: string;
    latsgitbackupon: string;
}
interface UFMProfileNewProps{
    selectedData: rowData
    handleCloseDialog: () => void;
}
const EditUFMProfile: React.FC<UFMProfileNewProps> = ({ selectedData, handleCloseDialog }) => {
    return (
    <div>
     <Drawer
                id='newufmprofile'
                title='New UFP Profile'
                isOpen={handleCloseDialog!= null}
                toggleFunction={handleCloseDialog}
            >
                <div className='d-flex justify-content-center flex-column px-3'>
                    <h6 className='mt-1 font-87-5 text-start'>Profile Name</h6>
                    <Input
                        type="text"
                        placeholder="Enter here profile name"
                        value={selectedData.environment}
                        name='profile name'
                    />     
                    <h6 className='my-1 font-87-5 text-start'>Enviroment</h6>
                    <Select
                        options={Constants?.Environment}
                        value={selectedData.environment}
                        labelKey='value'
                        valueKey='value'
                        name='role'
                        size={SelectSize.large}
                    />
                    <h6 className='mt-1 font-87-5 text-start'>Primary Site</h6>
                    <Select
                        options={Constants?.Primarysite}
                        value={selectedData.primarysite}
                        labelKey='value'
                        valueKey='value'
                        size={SelectSize.large}
                        name='company'
                        
                    />
                    <h6 className='mt-1 font-87-5 text-start'>Secondary Site</h6>
                    <Select
                        options={Constants?.Secondarysite}
                        value={selectedData.secondarysite}
                        labelKey='value'
                        valueKey='value'
                        size={SelectSize.large}
                        name='company_type'
                    />
                    <h6 className='mt-1 font-87-5 text-start'>Git</h6>
                    <Select
                        options={Constants?.Git}
                        value={selectedData.gitrepo}
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
                        // onClick={() => handleSubmitInviteNew()}
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