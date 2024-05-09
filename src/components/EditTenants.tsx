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
    selectedData: Constants.Tenant;
    handleCloseDialog: () => void;
    handleUpdate: (updatedRow: any) => void;
}

const EditTenants: React.FC<EditTenantsProps> = ({
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
        if (updatedData.name && updatedData.id && updatedData.environment && updatedData.hostUrl && updatedData.state) {
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
                        placeholder="Enter your name"
                        value={updatedData.name}
                        name='name'
                        onChange={(e) => handleChangeData(e)}
                    />
                    <Heading
                        title='Id*'
                        type={TypographyType.h5}
                        color={TypographyColor.dark}
                        weight={TypographyWeight.medium}
                        classname='margin-top-2 margin-bottom-1'
                    />
                    <Input
                        type="text"
                        placeholder="Enter your Id"
                        value={updatedData.id}
                        name='id'
                        onChange={(e) => handleChangeData(e)}
                    />
                    <Heading
                        title='Environment*'
                        type={TypographyType.h5}
                        color={TypographyColor.dark}
                        weight={TypographyWeight.medium}
                        classname='margin-top-2 margin-bottom-1'
                    />
                    <Input
                        type="text"
                        placeholder="Enter environment"
                        value={updatedData?.environment}
                        name='environment'
                        onChange={(e) => handleChangeData(e)}
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
                        value={updatedData?.hostUrl}
                        name='hostUrl'
                        onChange={(e) => handleChangeData(e)}
                    />
                    <Heading
                        title='State*'
                        type={TypographyType.h5}
                        color={TypographyColor.dark}
                        weight={TypographyWeight.medium}
                        classname='margin-top-2 margin-bottom-1'
                    />
                    <Input
                        type="text"
                        placeholder="Enter state"
                        value={updatedData?.state}
                        name='state'
                        onChange={(e) => handleChangeData(e)}
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
}

export default EditTenants;

