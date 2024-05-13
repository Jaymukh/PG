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

interface EditGitProps {
    selectedData: any;
    handleCloseDialog: () => void;
    handleUpdate: (updatedRow: any) => void;
}

const EditGit: React.FC<EditGitProps> = ({
    selectedData,
    handleCloseDialog,
    handleUpdate
}) => {
    const setError = useSetRecoilState(errorState);
    const [updatedData, setUpdatedData] = useState<any>(selectedData);

    const handleChangeData = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        e.preventDefault();
        const name = e.target.name as keyof Constants.Tenant; // Explicitly cast to the known keys of User
        const value = e.target.value;
        setUpdatedData({ ...updatedData, [name]: value });
    }
    const handleUpdateClick = () => {
        if (updatedData.Name && updatedData.Environment && updatedData['Host Url'] && updatedData['API Token'] && updatedData['Client Secret'] && updatedData['Client ID'] && updatedData.State) {
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
                        title='Auth Method'
                        type={TypographyType.h5}
                        color={TypographyColor.dark}
                        weight={TypographyWeight.medium}
                        classname='margin-top-2 margin-bottom-1'
                    />
                    <Select
                        options={Constants?.authMethods}
                        onChange={(e) => handleChangeData(e)}
                        value={updatedData['Auth Method']}
                        labelKey='key'
                        valueKey='key'
                        size={SelectSize.large}
                        name='Auth Method'
                        classname='padding-left-right-3'
                    />
                    <Heading
                        title='API Token*'
                        type={TypographyType.h5}
                        color={TypographyColor.dark}
                        weight={TypographyWeight.medium}
                        classname='margin-top-2 margin-bottom-1'
                    />
                    <Input
                        type="password"
                        placeholder="Enter api token"
                        value={updatedData['API Token']}
                        name='API Token'
                        onChange={(e) => handleChangeData(e)}
                    />
                    <Heading
                        title='Client Secret*'
                        type={TypographyType.h5}
                        color={TypographyColor.dark}
                        weight={TypographyWeight.medium}
                        classname='margin-top-2 margin-bottom-1'
                    />
                    <Input
                        type="text"
                        placeholder="Enter client secret"
                        value={updatedData['Client Secret']}
                        name='Client Secret'
                        onChange={(e) => handleChangeData(e)}
                    />
                    <Heading
                        title='Client ID*'
                        type={TypographyType.h5}
                        color={TypographyColor.dark}
                        weight={TypographyWeight.medium}
                        classname='margin-top-2 margin-bottom-1'
                    />
                    <Input
                        type="text"
                        placeholder="Enter client id"
                        value={updatedData['Client ID']}
                        name='Client ID'
                        onChange={(e) => handleChangeData(e)}
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

export default EditGit;

