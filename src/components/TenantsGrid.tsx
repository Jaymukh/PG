// External Libraries
import React, { useEffect, useState } from 'react';
import { BsGrid, BsTable } from "react-icons/bs";
import { Heading, TypographyColor, TypographyType, TypographyWeight } from './ui/typography/Heading';
import Search from './ui/search/Search';
import { Button, ButtonSize, ButtonTheme, ButtonVariant } from './ui/button/Button';
import * as Constants from '../utils/Constants'
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import { MdDeleteSweep, MdInfo, MdModeEdit, MdOutlineHub } from 'react-icons/md';
import { Card, CardSize, CardVariant } from './ui/card/Card';
import Body, { BodyColor, BodyType } from './ui/typography/Body';
import Switch from './ui/switch/Switch';
import SearchBar from './ui/search/SearchBar';

// CSS
// import '../styles/main.css';

// Components

interface TenantsGridProps {
    setGridView: (gridView: boolean) => void;
}

const TenantsGrid = ({ setGridView }: TenantsGridProps) => {
    const [buttonState, setButtonState] = useState<[number, boolean]>([0, false]);
    const [tenants, setTenants] = useState(Constants.tenants);
    const [checkedStates, setCheckedStates] = useState(tenants.map(() => true));

    const toggleSwitch = (index: number) => {
        const newCheckedStates = [...checkedStates];
        newCheckedStates[index] = !newCheckedStates[index];
        setCheckedStates(newCheckedStates);
    };

    return (
        <div className='col-lg-12 col-md-12 col-sm-12 col-12 z-index-0 px-0 d-flex flex-column justify-content-center align-items-center ' style={{ height: '91vh' }}>
            <div className="d-flex flex-row justify-content-between align-items-center" style={{ height: '10%', width: '97%' }}>
                <div className="w-25">
                    <Heading
                        title='Tenants'
                        type={TypographyType.h2}
                        color={TypographyColor.primary}
                        weight={TypographyWeight.semiBold}
                        classname='mb-0 text-start'
                    />
                </div>
                <div className='d-flex flex-row justify-content-end w-25'>
                    <SearchBar classname='w-75' />
                    <Button
                        theme={ButtonTheme.muted}
                        size={ButtonSize.default}
                        variant={ButtonVariant.transparent}
                        classname=''
                        onClick={() => setGridView(false)}
                    >
                        <BsTable className="fs-25" />
                    </Button>
                </div>
            </div>
            {/* <hr className='my-0 w-100' /> */}
            <div className='d-flex flex-row justify-content-start align-items-start' style={{ height: '90%', width: '97%', flexWrap: 'wrap' }}>
                {tenants.map((data, index) => (
                    <div className='col-xl-2 col-lg-2 col-md-3 col-sm-12 padding-left-right-0 mb-0'>
                        <Card size={CardSize.medium} variant={CardVariant.contained} classname='m-2 padding-0 cursor-pointer m-0' >
                            <div className='d-flex flex-row justify-content-between align-items-center padding-3'>
                                <Heading
                                    title={data.name}
                                    type={TypographyType.h4}
                                    color={TypographyColor.primary}
                                    weight={TypographyWeight.semiBold}
                                    classname='text-start'
                                />
                                <Switch
                                    key={index}
                                    isChecked={checkedStates[index]}
                                    toggleSwitch={() => toggleSwitch(index)}
                                    name='tenant'
                                    disabled={false}
                                />
                            </div>
                            <hr className='my-0 w-100' />
                            <div className="d-flex flex-column padding-3">
                                <div className="d-flex flex-row justify-content-start align-items-center">
                                    <Heading
                                        title='Id : '
                                        type={TypographyType.h6}
                                        color={TypographyColor.primary}
                                        weight={TypographyWeight.semiBold}
                                        classname=''
                                    />
                                    <Body
                                        type={BodyType.p3}
                                        color={BodyColor.primary}
                                    >
                                        &nbsp;{data.id}
                                    </Body>
                                </div>
                                <div className="d-flex flex-row justify-content-start align-items-center">
                                    <Heading
                                        title='Environment : '
                                        type={TypographyType.h6}
                                        color={TypographyColor.primary}
                                        weight={TypographyWeight.semiBold}
                                        classname=''
                                    />
                                    <Body
                                        type={BodyType.p3}
                                        color={BodyColor.primary}
                                    >
                                        &nbsp;{data.environment}
                                    </Body>
                                </div>
                                <div className="d-flex flex-row justify-content-start align-items-center">
                                    <Heading
                                        title='State : '
                                        type={TypographyType.h6}
                                        color={TypographyColor.primary}
                                        weight={TypographyWeight.semiBold}
                                        classname=''
                                    />
                                    <Body
                                        type={BodyType.p3}
                                        color={BodyColor.primary}
                                    >
                                        &nbsp;{data.state}
                                    </Body>
                                </div>
                                <div className="d-flex flex-row justify-content-start align-items-center">
                                    <Heading
                                        title='Host URL : '
                                        type={TypographyType.h6}
                                        color={TypographyColor.primary}
                                        weight={TypographyWeight.semiBold}
                                        classname=''
                                    />
                                    <Body
                                        type={BodyType.p3}
                                        color={BodyColor.primary}
                                    >
                                        &nbsp;{data.hostUrl}
                                    </Body>
                                </div>
                                <div className="d-flex flex-row justify-content-end align-items-center">
                                    <Button
                                        theme={ButtonTheme.muted}
                                        size={ButtonSize.default}
                                        variant={ButtonVariant.transparent}
                                        classname='p-0 padding-right-1'
                                    // onClick={() => openConfirmDeleteModal(true, row.user_id)}
                                    >
                                        <MdInfo className="fs-20" />
                                    </Button>
                                    <Button
                                        theme={ButtonTheme.muted}
                                        size={ButtonSize.default}
                                        variant={ButtonVariant.transparent}
                                        classname='p-0 padding-right-1'
                                    // onClick={() => openConfirmDeleteModal(true, row.user_id)}
                                    >
                                        <MdOutlineHub className="fs-20" />
                                    </Button>
                                    <Button
                                        theme={ButtonTheme.muted}
                                        size={ButtonSize.default}
                                        variant={ButtonVariant.transparent}
                                        classname='p-0 padding-right-1'
                                    // onClick={() => handleEditClick(row)}
                                    >
                                        <MdModeEdit className="fs-20" />
                                    </Button>
                                    <Button
                                        theme={ButtonTheme.warning}
                                        size={ButtonSize.default}
                                        variant={ButtonVariant.transparent}
                                        classname='p-0 padding-right-1'
                                    // onClick={() => openConfirmDeleteModal(true, row.user_id)}
                                    >
                                        <MdDeleteSweep className="fs-20" />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default TenantsGrid;