// External Libraries
import React, { useEffect, useState } from 'react';
import { BsGrid, BsTable } from "react-icons/bs";
import { Heading, TypographyColor, TypographyType, TypographyWeight } from './typography/Heading';
import Search from './search/Search';
import { Button, ButtonSize, ButtonTheme, ButtonVariant } from './button/Button';
import * as Constants from '../../utils/Constants'
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import { MdDeleteSweep, MdModeEdit } from 'react-icons/md';
import SearchBar from './search/SearchBar';

// CSS
// import '../styles/main.css';

// Components
interface TableViewProps {
    setGridView: (gridView: boolean) => void;
    tableName: string;
    tData: any;
    searchTerm: string | '';
    handleInputChange: (value: any) => void;
    suggestions: any[];
    handleEditClick: (row: any) => void;
    handleDelete: (id: string) => void;
}

const TableView = ({ setGridView, tableName, tData, searchTerm, suggestions, handleInputChange, handleEditClick, handleDelete }: TableViewProps) => {
    const [buttonState, setButtonState] = useState<[number, boolean]>([0, false]);
    const [tableData, setTableData] = useState(tData)
    // function for sorting
    const handleSortTable = (item: any, order: string, index: number) => {
        setButtonState([index, order === 'asc' ? true : false]);
        let sortedTable = tableData.slice().sort((a: any, b: any) => {
            const actualKey = item + 'ActualValue';
            const hasActualValue = tableData.some((obj: any) => obj.hasOwnProperty(actualKey));
            if (a[item] === null && b[item] === null) {
                return 0;
            } else if (a[item] === null) {
                return 1;
            } else if (b[item] === null) {
                return -1;
            } else if (typeof a[item] === 'string' && typeof b[item] === 'string') {
                if (hasActualValue) {
                    return order === 'desc' ? a[actualKey] - b[actualKey] : b[actualKey] - a[actualKey];
                }
                return order === 'desc' ? a[item].localeCompare(b[item]) : b[item].localeCompare(a[item]);
            } else if (typeof a[item] === 'number' && typeof b[item] === 'number') {
                if (hasActualValue) {
                    return order === 'desc' ? a[actualKey] - b[actualKey] : b[actualKey] - a[actualKey];
                }
                return order === 'desc' ? b[item] - a[item] : a[item] - b[item];
            } else {
                return 0;
            }
        });
        setTableData([...sortedTable])
    }

    useEffect(() => {
        setTableData(tData);
    }, [tData])

    return (
        <div className='col-lg-12 col-md-12 col-sm-12 col-12 z-index-0 px-0 d-flex flex-column justify-content-start align-items-center ' style={{ height: '91vh' }}>
            <div className="d-flex flex-row justify-content-between align-items-end" style={{ height: '10%', width: '97%' }}>
                <div className="w-25">
                    <Heading
                        title={tableName}
                        type={TypographyType.h2}
                        color={TypographyColor.primary}
                        weight={TypographyWeight.semiBold}
                        classname='mb-0 text-start'
                    />
                </div>
                <div className='d-flex flex-row justify-content-end align-items-end w-25'>
                    <SearchBar classname='w-75' searchTerm={searchTerm} handleInputChange={handleInputChange} />
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
            <div className='d-flex flex-row justify-content-center align-items-start padding-top-bottom-5' style={{ height: '90%', width: '100%' }}>
                <div className="tenant-table-container">
                    <table>
                        <thead>
                            <tr>
                                {Object.keys(tableData[0]).map((key, index) => (
                                    <th className='text-start' key={index}>
                                        <div className='d-flex flex-row align-items-center'>
                                            <Heading
                                                title={key}
                                                type={TypographyType.h4}
                                                color={TypographyColor.primary}
                                                weight={TypographyWeight.semiBold}
                                                classname='padding-right-2'
                                            />
                                            <div className='d-flex flex-column'>
                                                <BiSolidUpArrow name='desc' className="fs-9" color={`${(buttonState[0] === index) && !buttonState[1] ? '#003da5' : '#939393'}`} onClick={() => handleSortTable(key, 'desc', index)} />
                                                <BiSolidDownArrow name='asc' className="fs-9" color={`${(buttonState[0] === index) && buttonState[1] ? '#003da5' : '#939393'}`} onClick={() => handleSortTable(key, 'asc', index)} />
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
                                    />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {(searchTerm && (suggestions?.length > 0))
                                ? (suggestions?.map((row: any) => (
                                    <tr
                                        key={row['Id']}>
                                        {Object.keys(row)
                                            .map((key, i) => (
                                                <td>
                                                    {typeof row[key as keyof typeof row] === 'boolean' ? (row[key as keyof typeof row] ? 'true' : 'false') : row[key as keyof typeof row]}
                                                </td>
                                            ))}
                                        <td className='text-center' style={{ whiteSpace: 'nowrap' }}>
                                            <Button
                                                theme={ButtonTheme.muted}
                                                size={ButtonSize.default}
                                                variant={ButtonVariant.transparent}
                                                onClick={() => handleEditClick(row)}
                                            >
                                                <MdModeEdit className="fs-20" />
                                            </Button>
                                            <Button
                                                theme={ButtonTheme.warning}
                                                size={ButtonSize.default}
                                                variant={ButtonVariant.transparent}
                                                onClick={() => handleDelete(row['Id'])}
                                            >
                                                <MdDeleteSweep className="fs-20" />
                                            </Button>
                                        </td>
                                    </tr>
                                )))
                                : ((searchTerm && (suggestions.length === 0))
                                    ? (<tr>
                                        <td colSpan={12} className='text-center fs-14'>
                                            No matches found!
                                        </td>
                                    </tr>)
                                    : (tableData.map((row: any) => (
                                        <tr
                                            key={row['Id']}>
                                            {Object.keys(row)
                                                .map((key, i) => (
                                                    <td>
                                                        {typeof row[key as keyof typeof row] === 'boolean' ? (row[key as keyof typeof row] ? 'true' : 'false') : row[key as keyof typeof row]}
                                                    </td>
                                                ))}
                                            <td className='text-center' style={{ whiteSpace: 'nowrap' }}>
                                                <Button
                                                    theme={ButtonTheme.muted}
                                                    size={ButtonSize.default}
                                                    variant={ButtonVariant.transparent}
                                                    onClick={() => handleEditClick(row)}
                                                >
                                                    <MdModeEdit className="fs-20" />
                                                </Button>
                                                <Button
                                                    theme={ButtonTheme.warning}
                                                    size={ButtonSize.default}
                                                    variant={ButtonVariant.transparent}
                                                    onClick={() => handleDelete(row['Id'])}
                                                >
                                                    <MdDeleteSweep className="fs-20" />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                    )
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default TableView;