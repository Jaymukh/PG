/* eslint-disable react-hooks/exhaustive-deps */
// External libraries
import React, { useState, useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from "recoil";

// CSS
import '../styles/main.css';

// Components
import { Button, ButtonTheme, ButtonSize, ButtonVariant } from './ui/button/Button';
import { Heading, TypographyColor, TypographyType, TypographyWeight } from './ui/typography/Heading';
import Body, { BodyColor, BodyType } from './ui/typography/Body';
import Select, { SelectSize } from './ui/select/Select';
import { Input } from './ui/input/Input';
import Drawer from './ui/Drawer';
import * as Constants from '../utils/Constants';
import { errorState } from '../states';

// Utilities

interface AddTenantsProps {
    openAddNew: boolean;
    handleAddNewDrawer: (openAddNew: boolean) => void;
    handleAddNewData: (updatedRow: any) => void;
}

const AddTenants: React.FC<AddTenantsProps> = ({
    openAddNew,
    handleAddNewDrawer,
    handleAddNewData
}) => {
    const setError = useSetRecoilState(errorState);
    const [newData, setNewdData] = useState<any>({});


    const handleChangeData = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        e.preventDefault();
        const name = e.target.name as keyof Constants.Tenant; // Explicitly cast to the known keys of User
        const value = e.target.value;
        setNewdData({ ...newData, [name]: value });
    }
    const handleAddClick = () => {
        if (newData.Name && newData['Host Url'] && newData.User && newData.Password && newData.Environment && newData.State) {
            handleAddNewData(newData);
            console.log(newData);
        }
        else {
            setError({ type: 'Error', message: 'All fields are mendatory!' });
            console.log(newData);
        }
    };
    return (
        <div className=''>
            <Drawer
                id='add'
                title='Add'
                isOpen={openAddNew === true}
                toggleFunction={() => handleAddNewDrawer(false)}
            >
                <div className='d-flex flex-column align-items-start justify-content-center text-start'>
                    <Heading
                        title='Name*'
                        type={TypographyType.h5}
                        color={TypographyColor.dark}
                        weight={TypographyWeight.medium}
                        classname='margin-top-2 margin-bottom-1'
                    />
                    <Input
                        type="text"
                        placeholder="Enter Tenant name"
                        value={newData?.Name}
                        name='Name'
                        onChange={(e) => handleChangeData(e)}
                    />
                    <Heading
                        title='Description'
                        type={TypographyType.h5}
                        color={TypographyColor.dark}
                        weight={TypographyWeight.medium}
                        classname='margin-top-2 margin-bottom-1'
                    />
                    <Input
                        type="text"
                        placeholder="Enter Description"
                        value={newData?.Description}
                        name='Description'
                        onChange={(e) => handleChangeData(e)}
                    />
                    <Heading
                        title='Region'
                        type={TypographyType.h5}
                        color={TypographyColor.dark}
                        weight={TypographyWeight.medium}
                        classname='margin-top-2 margin-bottom-1'
                    />
                    <Select
                        options={Constants?.regions}
                        placeholder='Select region'
                        onChange={(e) => handleChangeData(e)}
                        value={newData?.Region}
                        labelKey='key'
                        valueKey='key'
                        size={SelectSize.large}
                        name='Region'
                        classname='padding-left-right-3'
                    />
                    <Heading
                        title='Host Url*'
                        type={TypographyType.h5}
                        color={TypographyColor.dark}
                        weight={TypographyWeight.medium}
                        classname='margin-top-2 margin-bottom-1'
                    />
                    <Input
                        type="text"
                        placeholder="Enter host url"
                        value={newData['Host Url']}
                        name='Host Url'
                        onChange={(e) => handleChangeData(e)}
                    />
                    <Heading
                        title='User*'
                        type={TypographyType.h5}
                        color={TypographyColor.dark}
                        weight={TypographyWeight.medium}
                        classname='margin-top-2 margin-bottom-1'
                    />
                    <Input
                        type="text"
                        placeholder="Enter user"
                        value={newData?.User}
                        name='User'
                        onChange={(e) => handleChangeData(e)}
                    />
                    <Heading
                        title='Password*'
                        type={TypographyType.h5}
                        color={TypographyColor.dark}
                        weight={TypographyWeight.medium}
                        classname='margin-top-2 margin-bottom-1'
                    />
                    <Input
                        type="password"
                        placeholder="Enter password"
                        value={newData?.Password}
                        name='Password'
                        onChange={(e) => handleChangeData(e)}
                    />
                    <Heading
                        title='Environment*'
                        type={TypographyType.h5}
                        color={TypographyColor.dark}
                        weight={TypographyWeight.medium}
                        classname='margin-top-2 margin-bottom-1'
                    />
                    <Select
                        options={Constants?.environments}
                        placeholder='Select environment'
                        onChange={(e) => handleChangeData(e)}
                        value={newData?.Environment}
                        labelKey='key'
                        valueKey='key'
                        size={SelectSize.large}
                        name='Environment'
                        classname='padding-left-right-3'
                    />
                    <Heading
                        title='State*'
                        type={TypographyType.h5}
                        color={TypographyColor.dark}
                        weight={TypographyWeight.medium}
                        classname='margin-top-2 margin-bottom-1'
                    />
                    <Select
                        options={Constants?.states}
                        placeholder='Select state'
                        onChange={(e) => handleChangeData(e)}
                        value={newData?.State}
                        labelKey='key'
                        valueKey='key'
                        size={SelectSize.large}
                        name='State'
                        classname='padding-left-right-3'
                    />
                    <Button
                        theme={ButtonTheme.primary}
                        size={ButtonSize.large}
                        variant={ButtonVariant.bordered}
                        onClick={() => handleAddClick()}
                        classname='margin-top-bottom-3 height-3'
                    >
                        Add
                    </Button>
                </div>
            </Drawer>
        </div>
    );
};

export default AddTenants;

