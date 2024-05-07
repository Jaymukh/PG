// External Libraries
import React, { useEffect, useState } from 'react';
import { BsGrid, BsTable } from "react-icons/bs";
import { Heading, TypographyColor, TypographyType, TypographyWeight } from './ui/typography/Heading';
import Search from './ui/search/Search';
import { Button, ButtonSize, ButtonTheme, ButtonVariant } from './ui/button/Button';
import * as Constants from '../utils/Constants'
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import { MdDeleteSweep, MdModeEdit } from 'react-icons/md';
import SearchBar from './ui/search/SearchBar';

// CSS
// import '../styles/main.css';

// Components
interface TableViewProps {
    setGridView: (gridView: boolean) => void;
    tableName: string;
    tableHeader: any;
    tData: any;
}

const TableView = ({ setGridView, tableName, tableHeader, tData }: TableViewProps) => {
    const [buttonState, setButtonState] = useState<[number, boolean]>([0, false]);
    const [tableData, setTableData] = useState(tData)
    // function for sorting
    const handleSortTable = (item: any, order: string, index: number) => {
        setButtonState([index, order === 'asc' ? true : false]);
        let sortedTable = tableData.slice().sort((a: any, b: any) => {
            const actualKey = item.key + 'ActualValue';
            const hasActualValue = tableData.some((obj: any) => obj.hasOwnProperty(actualKey));
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
        setTableData([...sortedTable])
    }

    return (
        <div className='col-lg-12 col-md-12 col-sm-12 col-12 z-index-0 px-0 d-flex flex-column justify-content-start align-items-center ' style={{ height: '91vh' }}>
            <div className="d-flex flex-row justify-content-between align-items-center" style={{ height: '10%', width: '97%' }}>
                <div className="w-25">
                    <Heading
                        title={tableName}
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
                        onClick={() => setGridView(true)}
                    >
                        <BsGrid className="fs-25" />
                    </Button>
                </div>
            </div>
            {/* <hr className='my-0 w-100' /> */}
            <div className='d-flex flex-row justify-content-center align-items-center' style={{ height: '90%', width: '100%' }}>
                <div className="tenant-table-container">
                    <table>
                        <thead>
                            <tr>
                                {tableHeader.map((item: any, index: number) => (
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
                            {tableData.map((row: any) => (
                                <tr
                                    key={row.id}>
                                    <td>{row.name}</td>
                                    <td>{row.id}</td>
                                    <td>{row.environment}</td>
                                    <td>{row.hostUrl}</td>
                                    <td>{row.state}</td>
                                    <td className='text-center' style={{ whiteSpace: 'nowrap' }}>
                                        <Button
                                            theme={ButtonTheme.muted}
                                            size={ButtonSize.default}
                                            variant={ButtonVariant.transparent}
                                        // onClick={() => handleEditClick(row)}
                                        >
                                            <MdModeEdit className="fs-20" />
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

        </div>
    );
};

export default TableView;