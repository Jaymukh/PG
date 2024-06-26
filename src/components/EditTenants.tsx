/* eslint-disable react-hooks/exhaustive-deps */
// External libraries
import React, { useState, useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from "recoil";

// CSS
import '../styles/main.css';

// Components
import { Button, ButtonTheme, ButtonSize, ButtonVariant } from '../components/ui/button/Button';
import { Heading, TypographyColor, TypographyType, TypographyWeight } from '../components/ui/typography/Heading';
import Body, { BodyColor, BodyType } from '../components/ui/typography/Body';
import Select, { SelectSize } from '../components/ui/select/Select';
import { Input } from '../components/ui/input/Input';
import Drawer from '../components/ui/Drawer';
import * as Constants from '../utils/Constants';
import { errorState } from '../states';

// Utilities

interface EditTenantsProps {
    selectedData?: any;
    handleCloseDialog: () => void;
    handleUpdate: (updatedRow: any) => void;
}

const EditTenants: React.FC<EditTenantsProps> = ({
    selectedData,
    handleCloseDialog,
    handleUpdate
}) => {
    const setError = useSetRecoilState(errorState);
    const [updatedData, setUpdatedData] = useState<any>(selectedData || null);

    const handleChangeData = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        e.preventDefault();
        const name = e.target.name as keyof Constants.Tenant; // Explicitly cast to the known keys of User
        const value = e.target.value;
        setUpdatedData({ ...updatedData, [name]: value });
    }
    const handleUpdateClick = () => {
        if (updatedData.Name && updatedData['Host Url'] && updatedData.User && updatedData.Password && updatedData.Environment && updatedData.State) {
            handleUpdate(updatedData);
        }
        else {
            setError({ type: 'Error', message: 'All fields are mendatory!' });
        }
    };
    return (
        <div className=''>
            <Drawer
                id='edit'
                title='Edit'
                isOpen={selectedData !== null}
                toggleFunction={handleCloseDialog}
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
                        value={updatedData.Name}
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
                        value={updatedData.Description}
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
                        onChange={(e) => handleChangeData(e)}
                        value={updatedData?.Region}
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
                        value={updatedData['Host Url']}
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
                        value={updatedData?.User}
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
                        value={updatedData?.Password}
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
                        onChange={(e) => handleChangeData(e)}
                        value={updatedData?.Environment}
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
                        onChange={(e) => handleChangeData(e)}
                        value={updatedData?.State}
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
                        onClick={() => handleUpdateClick()}
                        classname='margin-top-bottom-3 height-3'
                    >
                        Update
                    </Button>
                </div>
            </Drawer>
        </div>
    );
};

export default EditTenants;

